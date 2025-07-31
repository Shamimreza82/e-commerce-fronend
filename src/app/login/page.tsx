
import LoginForm from "@/components/auth/login-form";


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-gray-500">Login to your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}