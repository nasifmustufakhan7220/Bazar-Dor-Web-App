"use client"
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const UseSession = () => {
     const session = useSession();
    console.log(session);
  return (
    <div>
      <Link href={'/sign-in'}>
      <button className="btn btn-ghost btn-sm px-2 text-[12px] font-semibold sm:btn-md sm:px-3 sm:text-[14px]">
        সাইন ইন
      </button>
      </Link>

      <Link href={'/sign-up'}>
        <button className="btn btn-sm bg-[#068a3f] px-3 text-[12px] text-[#f2faf3] sm:btn-md sm:px-4 sm:text-[14px]">
        সাইন আপ
      </button>
      </Link>
    </div>
  );
};

export default UseSession;