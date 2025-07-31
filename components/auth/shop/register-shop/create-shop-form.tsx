"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { registerShop } from "@/src/services-api/authServices";
import {
  registerShopSchema,
  TRegisterShopSchema,
} from "@/lib/validations/register-shop-schema";
import Link from "next/link";
import { InputWithCharCount } from "@/components/sheard/InputWithCharCount";

export default function CreateShopForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TRegisterShopSchema>({
    resolver: zodResolver(registerShopSchema),
    defaultValues: {
      name: "",
      description: "",
      contactEmail: "",
      phone: "",
      address: "",
      seoTitle: "",
      seoDescription: "",
    },
  });

  const onSubmit = async (values: TRegisterShopSchema) => {
    setIsLoading(true);
    try {
      const result = await registerShop(values);

      if (result.success) {
        toast.success("Shop created successfully!");
        form.reset();
      } else {
        toast.error(result.message || "Something went wrong.");
        console.log(result)
      }
    } catch (err) {
      toast.error("Failed to create shop.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Card className="shadow-xl rounded-2xl border border-gray-200">
        <CardHeader className="bg-slate-900 text-white rounded-t-2xl p-6">
          <CardTitle className="text-2xl font-bold text-center">
            🚀 Create Your Shop
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              {/* Basic Info Section */}
              <div>
                <h2 className="text-lg font-semibold mb-2 text-slate-700">🛍️ Basic Info</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shop Name</FormLabel>
                        <FormControl>
                          <InputWithCharCount placeholder="e.g., Tech Bazaar" field={field} maxLength={30} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+8801XXXXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <div>
                            <Textarea rows={2} placeholder="Street, City, Country" {...field} maxLength={160} />
                            <p className="text-sm text-muted-foreground text-right">
                              {field.value?.length || 0} / 160
                            </p>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Description Section */}
              <div>
                <h2 className="text-lg font-semibold mb-2 text-slate-700">📝 Description</h2>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About Your Shop</FormLabel>
                      <FormControl>
                        <div>
                          <Textarea rows={2} placeholder="Write a short description" {...field} maxLength={160} />
                          <p className={`text-sm text-right ${(field.value?.length || 0) >= 160 ? "text-red-500" : "text-muted-foreground"}`}>
                            {field.value?.length || 0} / {160}
                          </p>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* SEO Section */}
              <div>
                <h2 className="text-lg font-semibold mb-2 text-slate-700">🔍 SEO Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="seoTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEO Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Best online gadget store" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="seoDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEO Description</FormLabel>
                        <FormControl>
                          <Textarea rows={2} placeholder="Shop the latest gadgets online." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Document Upload */}
              <div>
                <h2 className="text-lg font-semibold mb-2 text-slate-700">📄 Document Upload</h2>
                <FormField
                  control={form.control}
                  name="documentUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Upload Document (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf,.docx,.png,.jpeg"
                          onChange={(e) => field.onChange(e.target.files)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" disabled={isLoading} className="w-full text-white bg-slate-900 hover:bg-slate-800 transition-colors">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Shop...
                  </>
                ) : (
                  "Create Shop"
                )}
              </Button>
              <div className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
                Do not have a shop account?{" "}
                <Link
                  href="/auth/shop/loginShop"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Login Shop
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
