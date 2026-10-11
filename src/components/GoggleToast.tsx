"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function GoogleSignInToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (isPending) return;

    if (searchParams.get("googleSignIn") !== "success") return;

    if (!session?.user) return;

    toast.success(
      `${session.user.name}, Bazar Dor-এ তোমাকে স্বাগতম।`,
      {
        icon: () => <span>🌿</span>,
        autoClose: 4000,
      },
    );

    router.replace("/");
  }, [session, isPending, searchParams, router]);

  return null;
}