"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { loginSchema, LoginSchema } from "@/lib/validations/login-schema";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { login } from "@/src/services-api/authServices";
import { toast } from "sonner";
import { useCurrentUser } from "@/src/hooks/useCurrentUser";
import { useRouter } from "next/navigation";

export default function LoginFormShop() {
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { refetch } = useCurrentUser()
  const router = useRouter()

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "shamimrezaone@gmail.com",
      password: "123456",
    },
  });

  const onSubmit = async (values: LoginSchema) => {
    setLoading(true);
    console.log({ ...values, rememberMe });

    const result = await login(values)

    console.log(result)

    if (result.success) {
      toast.success(result.message || "login successfull")
      setLoading(false);
      refetch()
      router.push('/dashboard')
    } else {
      toast.error(result.message || "Internal server error")
      setLoading(false);
    }



  };

  return (
    <div className="max-w-md w-full mx-auto bg-white/80 dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold text-center text-slate-800 dark:text-white mb-6">
        Welcome Back 👋
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                    className="rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...field}
                      className="rounded-xl pr-10" // ensure space for the icon
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
            <label className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(val) => setRememberMe(!!val)}
              />
              <span>Remember me</span>
            </label>
            <Link
              href="/auth/shop/forgot-password"
              className="text-blue-600 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl text-base h-11"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>

          <div className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
            Do not have a shop account?{" "}
            <Link
              href="/auth/shop/registerShop"
              className="text-blue-600 hover:underline font-medium"
            >
              Create Shop
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
