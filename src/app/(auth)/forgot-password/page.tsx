"use client";

import {
  Button,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handelForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    const { error } = await authClient.requestPasswordReset({
      email,
      redirectTo: "/reset-password",
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "কিছু একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।", {
        duration: 4500,
        icon: "⚠️",
      });
      return;
    }

    setSent(true);
    toast.success("ইমেইল পাঠানো হয়েছে! আপনার ইমেইল ইনবক্স দেখুন।", {
      icon: "🌿",
      duration: 4000,
    });
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#fafcfb",
            color: "#26332b",
            border: "1px solid #e0e9e2",
            fontSize: "13px",
          },
        }}
      />
      <main className="flex min-h-screen items-center justify-center bg-[#f0f5f1] px-4 py-10">
        <div className="w-full max-w-82.5">
          {/* Heading */}
          <div className="mb-5 text-center">
            <h1 className="text-xl font-bold text-[#26332b]">
              পাসওয়ার্ড রিসেট
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              আপনার ইমেইল ঠিকানা দিন, আমরা পাসওয়ার্ড রিসেট লিংক পাঠাব।
            </p>
          </div>

          {/* Card */}
          <div className="rounded-xl border border-[#e0e9e2] bg-[#fafcfb] p-5">
            {sent ? (
              <div className="text-center">
                <p className="text-sm text-[#29352d]">
                  আমরা আপনার ইমেইলে একটি পাসওয়ার্ড রিসেট লিংক পাঠিয়েছি।
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  ইমেইলটি না পেলে স্প্যাম ফোল্ডার দেখুন অথবা আবার চেষ্টা করুন।
                </p>
                <Button
                  onClick={() => setSent(false)}
                  className="mt-4 h-8.5 w-full rounded-md bg-[#07883e] text-xs font-semibold text-white shadow-sm transition hover:bg-[#067334]"
                >
                  আবার পাঠান
                </Button>
              </div>
            ) : (
              <Form className="flex flex-col gap-3" onSubmit={handelForgotPassword}>
                {/* Email */}
                <TextField name="email" className="flex flex-col gap-1.5">
                  <Label className="text-xs font-medium text-[#29352d]">
                    ইমেইল
                  </Label>

                  <Input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-8 w-full rounded-lg border border-[#e0e8e1] bg-transparent px-2.5 text-xs outline-none focus:border-green-600"
                  />
                </TextField>

                {/* Submit Button */}
                <Button
                  type="submit"
                  isDisabled={loading}
                  className="mt-0.5 h-8.5 w-full rounded-md bg-[#07883e] text-xs font-semibold text-white shadow-sm transition hover:bg-[#067334]"
                >
                  {loading ? "পাঠানো হচ্ছে..." : "রিসেট লিংক পাঠান"}
                </Button>
              </Form>
            )}

            {/* Sign In Link */}
            <p className="mt-3 text-center text-[11px] text-gray-600">
              মনে আছে?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-[#07883e] hover:underline"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-5 text-center">
            <Link
              href="/"
              className="text-xs text-gray-500 transition hover:text-[#07883e]"
            >
              ← হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgotPasswordPage;
