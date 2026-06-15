import { LoginForm } from "@/components/auth/auth-form."
import { routes } from "@/config/routes"
import { X } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthPage = () => {
    const navigate = useNavigate();
    const [ isRegister , setRegister ] = useState(false)
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <video className="absolute top-0 left-0 w-full h-full object-cover" src="src/video/video-for-reg.mp4" loop autoPlay></video>
            <div className="z-10 relative p-8 shadow-lg bg-white rounded-lg bg-opacity-90">
                <div className="flex justify-between">
                    <h1 className="font-medium text-2xl mb-5 text-green-500 "> {!isRegister ? "Login" : "Sign in"  } </h1>
                    <button onClick={() => navigate(routes.home)} className="w-8 h-8 flex items-center justify-center text-gray-600/70 rounded-full transition"><X/></button>
                </div>
                <LoginForm isRegister={isRegister} setRegister={setRegister} />
            </div>
        </div>
    )
}