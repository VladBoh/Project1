import { Checkbox } from "./ui/checkbox";

export const CheckBox = () => {
  const colors = ["green", "yellow", "red", "white"];

  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <Checkbox key={color} 
          className={`bg-${color}-500 w-6 h-6 rounded-full border-2 border-${color}-500`}
        />
      ))}
    </div>
  );
};
