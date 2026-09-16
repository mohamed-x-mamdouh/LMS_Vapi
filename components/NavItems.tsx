'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Companions', href: '/companions' },
    { name: 'My Journey', href: '/my-journey' },
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ name, href }) => (
                <Link key={name} href={href} 
                    className={cn(
                        'rounded-full px-4 py-2 transition-colors hover:bg-gray-100',
                        pathname === href && 'bg-black text-white font-bold hover:bg-black'
                    )}>
                    {name}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems;