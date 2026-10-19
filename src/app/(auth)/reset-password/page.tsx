"use client";

import {
  Button,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import toast, { Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const errorParam = searchParams.get("error");

  const [visible, setIsVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handelResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (newPassword !== confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি মিলছে না। আবার লিখুন।", {
        duration: 4500,
        icon: "⚠️",
      });
      return;
    }

    setLoading(true);

    const { error } = await authClient.resetPassword({
      newPassword,
      token: token as string,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "পাসওয়ার্ড রিসেট করা যায়নি। আবার চেষ্টা করুন।", {
        duration: 4500,
        icon: "⚠️",
      });
      return;
    }

    toast.success("পাসওয়ার্ড পরিবর্তন সফল হয়েছে! নতুন পাসওয়ার্ডে সাইন ইন করুন।", {
      icon: "🌿",
      duration: 4000,
    });
    router.push("/sign-in");
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
              নতুন পাসওয়ার্ড সেট করুন
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              আপনার অ্যাকাউন্টের জন্য একটি শক্তিশালী নতুন পাসওয়ার্ড দিন।
            </p>
          </div>

          {/* Card */}
          <div className="rounded-xl border border-[#e0e9e2] bg-[#fafcfb] p-5">
            {!token || errorParam ? (
              <div className="text-center">
                <p className="text-sm text-[#29352d]">
                  লিংকটি অবৈধ বা মেয়াদোত্তীর্ণ হয়ে গেছে।
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  নতুন রিসেট লিংক পেতে আবার অনুরোধ করুন।
                </p>
                <Link href="/forgot-password">
                  <Button className="mt-4 h-8.5 w-full rounded-md bg-[#07883e] text-xs font-semibold text-white shadow-sm transition hover:bg-[#067334]">
                    নতুন লিংক অনুরোধ করুন
                  </Button>
                </Link>
              </div>
            ) : (
              <Form className="flex flex-col gap-3" onSubmit={handelResetPassword}>
                {/* New Password */}
                <TextField name="newPassword" className="flex flex-col gap-1.5">
                  <Label className="text-xs font-medium text-[#29352d]">
                    নতুন পাসওয়ার্ড
                  </Label>

                  <InputGroup className="h-9 w-full overflow-hidden rounded-lg border border-[#e0e8e1] bg-white transition focus-within:border-[#07883e] focus-within:ring-2 focus-within:ring-[#07883e]/10">
                    <InputGroup.Input
                      type={visible ? "text" : "password"}
                      required
                      minLength={8}
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
                        onPress={() => setIsVisible(!visible)}
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
                      type={confirmVisible ? "text" : "password"}
                      required
                      minLength={8}
                      placeholder="পাসওয়ার্ড আবার লিখুন"
                      className="h-full min-w-0 flex-1 border-0 bg-transparent px-2.5 text-xs outline-none"
                    />

                    <InputGroup.Suffix className="flex h-full items-center pe-1">
                      <Button
                        type="button"
                        isIconOnly
                        aria-label={
                          confirmVisible ? "Hide password" : "Show password"
                        }
                        size="sm"
                        variant="ghost"
                        className="size-7 min-w-7 rounded-md text-gray-500 hover:bg-gray-100 hover:text-[#07883e]"
                        onPress={() => setConfirmVisible(!confirmVisible)}
                      >
                        {confirmVisible ? (
                          <Eye className="size-4" />
                        ) : (
                          <EyeSlash className="size-4" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>
                </TextField>

                {/* Submit Button */}
                <Button
                  type="submit"
                  isDisabled={loading}
                  className="mt-0.5 h-8.5 w-full rounded-md bg-[#07883e] text-xs font-semibold text-white shadow-sm transition hover:bg-[#067334]"
                >
                  {loading ? "পরিবর্তন হচ্ছে..." : "পাসওয়ার্ড পরিবর্তন করুন"}
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

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<p className="mt-10 text-center text-sm text-gray-500">লোড হচ্ছে...</p>}>
      <ResetPasswordForm />
    </Suspense>
  );
};

export default ResetPasswordPage;
