import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { paymentData } from "./payment";

export const CheckoutForm = () => {

    const dataCart = localStorage.getItem("cart")

    const dataCartPrice = dataCart ? JSON.parse(dataCart) : [];
    const totalPrice = dataCartPrice.reduce((acc: number, item: { price: number }) => acc + item.price, 0)


    const FormSchema = z.object({
        username: z.string().min(4, "Username must be at least 4 characters"),
        city: z.string().min(4, "City must be at least 4 characters"),
        cardnumber: z.string().min(16, "Card number must be at least 16 characters"),
        payment: z.string().min(1, "Please select a payment method"),
        sum: z.number().min(1, "Total price is required")
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "johndoe",
            city: "New York",
            cardnumber: "1111-2222-3333-4444",
            payment: "",
            sum: totalPrice
        },
    });

    const onSubmit = (formData: z.infer<typeof FormSchema>) => {
        console.log(formData);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Form {...form}>
                <div>
                    <div>
                        <h2>Payment Method</h2>
                        <p>Add a new payment method to your account.</p>
                    </div>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <div className="flex gap-5">
                            {paymentData.map((item) => (
                                <FormField
                                    key={item.id}
                                    control={form.control}
                                    name="payment"
                                    render={({ field }) => (
                                        <FormItem key={item.id}>
                                            <FormLabel>Payment</FormLabel>
                                            <FormControl>
                                                <input type="radio" value={item.name} onChange={field.onChange} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                            ))}
                        </div>

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="jhondoe" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="New York" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cardnumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Card number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="1111-2222-3333-4444" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-between items-center gap-3">
                            <FormField
                                control={form.control}
                                name="sum"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Total Price</FormLabel>
                                        <FormControl>
                                            <Input readOnly className="bg-gray-100" value={field.value.toString()} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your total price
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </div>
            </Form>
        </div>
    );
};
