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
import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { signIn, signUp } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const [visible, setIsvisible] = useState(false);

  const handelSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const { data: userData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/sign-in",
    });

    if (!error && userData) {
      toast.success(
        `অ্যাকাউন্ট তৈরি সফল হয়েছে! ${userData.user.name}, Bazar Dor-এ তোমাকে স্বাগতম।`,
        {
          icon: "🌿",
          duration: 4000,
        },
      );
      router.push("/sign-in");
    } else {
      toast.error(
        error?.message || "অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।",
        {
          duration: 4500,
          icon: "⚠️",
        },
      );

      console.log(error);
      return;
    }
  };

  const handelSingInWithGoggle = async () => {
    const { data, error } = await signIn.social({
      provider: "google",
    });

    console.log(data, error);
  };

  const handelSingInWithGithub = async () => {
    const { data, error } = await signIn.social({
      provider: "github",
    });
    console.log(data, error);
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
              অ্যাকাউন্ট তৈরি করুন
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              বিনা খরচে নতুন অ্যাকাউন্ট করে সব বিস্তারিত দাম দেখুন।
            </p>
          </div>

          {/* Signup Card */}
          <div className="rounded-xl border border-[#e0e9e2] bg-[#fafcfb] p-5">
            <Form className="flex flex-col gap-3" onSubmit={handelSignUp}>
              {/* Name */}
              <TextField name="name" className="flex flex-col gap-1.5">
                <Label className="text-xs font-medium text-[#29352d]">
                  নাম
                </Label>

                <Input
                  placeholder="যেমন: রহিম উদ্দিন"
                  className="h-8 w-full rounded-lg border border-[#e0e8e1] bg-transparent px-2.5 text-xs outline-none focus:border-green-600"
                />
              </TextField>

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
              <TextField
                name="confirmPassword"
                className="flex flex-col gap-1.5"
              >
                <Label className="text-xs font-medium text-[#29352d]">
                  পাসওয়ার্ড নিশ্চিত করুন
                </Label>

                <InputGroup className="h-9 w-full overflow-hidden rounded-lg border border-[#e0e8e1] bg-white transition focus-within:border-[#07883e] focus-within:ring-2 focus-within:ring-[#07883e]/10">
                  <InputGroup.Input
                    type={visible ? "text" : "password"}
                    placeholder="পাসওয়ার্ড আবার লিখুন"
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

              {/* Create Account Button */}
              <Button
                type="submit"
                className="mt-0.5 h-8.5 w-full rounded-md bg-[#07883e] text-xs font-semibold text-white shadow-sm transition hover:bg-[#067334]"
              >
                অ্যাকাউন্ট তৈরি করুন
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
                onClick={handelSingInWithGoggle}
                type="button"
                variant="outline"
                className="flex h-8 items-center justify-center gap-1 rounded-md border border-[#e0e8e1] bg-transparent px-1 text-[11px] font-medium text-[#29352d] hover:bg-gray-50"
              >
                <FcGoogle size={14} />
                Google দিয়ে চালিয়ে যান
              </Button>

              <Button
                onClick={handelSingInWithGithub}
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
              অ্যাকাউন্ট আছে?{" "}
              <a
                href="/sign-in"
                className="font-medium text-[#07883e] hover:underline"
              >
                সাইন ইন করুন
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
    </>
  );
};

export default SignUpPage;
