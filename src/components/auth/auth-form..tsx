import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "@/hooks/use-toast"
import { useState } from "react"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLoginUserMutation } from "@/api/auth/auth"
import { useNavigate } from "react-router-dom"
import { routes } from "@/config/routes"

interface LoginProps {
    isRegister: boolean;
    setRegister: React.Dispatch<React.SetStateAction<boolean>>;
  }

  export const LoginForm = ({ isRegister, setRegister }: LoginProps) => {
    const [login, { isLoading }] = useLoginUserMutation()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const navigate = useNavigate()

    const formSchema = z.object({
        username: isRegister 
            ? z.string().min(4, 'Username must be at least 4 characters')
            : z.string().optional(),
        email: z.string().email("Invalid email format"),
        password: z.string().min(5, "Password must be at least 5 characters"),
    });
    

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
    })

    const handleLogin = async (formData: z.infer<typeof formSchema>) => {
        try {
            const requestData = isRegister
            ? { login: false, username: formData.username, email: formData.email, password: formData.password }
            : { login: true, email: formData.email, password: formData.password };

            const response = await login(requestData).unwrap()
            localStorage.setItem("access_token", response.access_token)
            
            toast({
                title: "Login successful!",
                description: "You have successfully logged in.",
            })
            navigate(routes.home)
        } catch (error: any) {
            setErrorMessage(error.data?.message || "Something went wrong")
        }
    }

    const onSubmit = (formData: z.infer<typeof formSchema>) => {
        handleLogin(formData)
    }

    return (
        <div className="w-[500px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {isRegister ? (
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-green-500">Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your username" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    ) : null}

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-green-500">Email</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-green-500">Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <p className="text-red-500">{errorMessage}</p>
                    <div className="flex gap-5 text-gray-100">
                        <Button className="w-[500px] bg-gray-500 hover:bg-green-500" type="submit" disabled={isLoading}>
                            {isRegister ? "Sign in" : "Login"}
                        </Button>
                    </div>
                </form>
            </Form>
            <div className="flex justify-end mt-1">
                <button
                    onClick={() => setRegister(!isRegister)}
                >
                    {isRegister ? "Switch to Login" : "Switch to Register"}
                </button>
            </div>
        </div >
    )
} 
