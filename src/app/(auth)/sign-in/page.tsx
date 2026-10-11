"use client";
import {
  Button,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";

const page = () => {
  const [visible, setIsvisible] = useState(false);
  const handelSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const { data: userData, error } = await signIn.email({
      email: data.email as string,
      password: data.password as string,
      callbackURL: "/",
    });

    if (!error && userData) {
      toast.success(
        `${userData.user.name}, Bazar Dor-এ তোমাকে স্বাগতম।`,
        {
          icon: () => <span>🌿</span>,
          autoClose: 4000,
        },
      );
    } else {
      toast.error(
        error?.message || " আবার চেষ্টা করুন।",
        {
          icon: () => <span>⚠️</span>,
          autoClose: 4500,
        },
      );

      console.log(error);
      return;
    }
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0f5f1] px-4 py-10">
      <div className="w-full max-w-82.5">
        {/* Heading */}
        <div className="mb-5 text-center">
          <h1 className="text-xl font-bold text-[#26332b]">সাইন ইন</h1>

          <p className="mt-1 text-xs text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Signup Card */}
        <div className="rounded-xl border border-[#e0e9e2] bg-[#fafcfb] p-5">
          <Form className="flex flex-col gap-3" onSubmit={handelSignIn}>
            {/* Email */}
            <TextField name="email" className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-[#29352d]">
                ইমেইল
              </Label>

              <Input
                placeholder="you@example.com"
                className="h-8 w-full rounded-lg border border-[#e0e8e1] bg-transparent px-2.5 text-xs outline-none focus:border-green-600"
              />
            </TextField>

            {/* Password */}
            <TextField name="password" className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-[#29352d]">
                পাসওয়ার্ড
              </Label>

              <InputGroup className="h-9 w-full overflow-hidden rounded-lg border border-[#e0e8e1] bg-white transition focus-within:border-[#07883e] focus-within:ring-2 focus-within:ring-[#07883e]/10">
                <InputGroup.Input
                  type={visible ? "text" : "password"}
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  className="h-full min-w-0 flex-1 border-0 bg-transparent px-2.5 text-xs outline-none"
                />

                <InputGroup.Suffix className="flex h-full items-center pe-1">
                  <Button
                    type="button"
                    isIconOnly
                    aria-label={visible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    className="size-7 min-w-7 rounded-md text-gray-500 hover:bg-gray-100 hover:text-[#07883e]"
                    onPress={() => setIsvisible(!visible)}
                  >
                    {visible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
            </TextField>

            {/* Confirm Password */}

            {/* Create Account Button */}
            <Button
              type="submit"
              className="mt-0.5 h-8.5 w-full rounded-md bg-[#07883e] text-xs font-semibold text-white shadow-sm transition hover:bg-[#067334]"
            >
              সাইন ইন
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#dce4de]" />

            <span className="text-[11px] text-gray-500">অথবা</span>

            <div className="h-px flex-1 bg-[#dce4de]" />
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex h-8 items-center justify-center gap-1 rounded-md border border-[#e0e8e1] bg-transparent px-1 text-[11px] font-medium text-[#29352d] hover:bg-gray-50"
            >
              <FcGoogle size={14} />
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button
              type="button"
              variant="outline"
              className="flex h-8 items-center justify-center gap-1 rounded-md border border-[#e0e8e1] bg-transparent px-1 text-[11px] font-medium text-[#29352d] hover:bg-gray-50"
            >
              <FaGithub size={14} />
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          {/* Sign In Link */}
          <p className="mt-3 text-center text-[11px] text-gray-600">
            অ্যাকাউন্ট আছে?
            <a
              href="/sign-up"
              className="font-medium text-[#07883e] hover:underline"
            >
              সাইন আপ করুন
            </a>
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
  );
};

export default page;
