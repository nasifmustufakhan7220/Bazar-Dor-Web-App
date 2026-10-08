"use client"
import { INavlink } from '@/bazarDor.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveNavLink = ({li}:{li:INavlink}) => {
    const pathname = usePathname();
    return (
        <div>
            <Link className={`flex gap-1 cursor-pointer p-2 ${pathname === `/${li.slug}` ? 'bg-[#048039] p-2 text-[#f2faf3] rounded-xl' : '' }`} href={`/${li.slug}`} key={li.id}>
            <li className="list-none mx-3 flex gap-1 cursor-pointer"><p>{li.icon}</p><p>{li.nameBn}</p></li>
            </Link>
        </div>
    );
};

export default ActiveNavLink;