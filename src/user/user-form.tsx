import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserData {
  avatar?: string;
  name: string;
  email: string;
  role: string;
}

export const UserForm = ({ data }: { data: UserData }) => {
  if (!data) return null;

  const trunc = (text: string = "", maxLength: number) =>
    text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;

  return (
    <div className="flex items-center gap-6 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <Avatar className="w-[100px] h-[100px] border-4 border-gray-300 shadow-sm">
        <AvatarImage src={data.avatar || "https://default-avatar.com"} alt="User Avatar" />
        <AvatarFallback className="bg-gray-300 text-gray-700 font-bold">
          {trunc(data.name, 1)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-between">
        <p className="text-xl font-semibold text-gray-900">{data.name}</p>
        <p className="text-sm text-gray-600">{data.email}</p>
        <span className="mt-2 px-3 py-1 bg-gray-700 text-white text-xs rounded-full w-fit">
          {data.role}
        </span>
      </div>
    </div>
  );
};
