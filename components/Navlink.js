"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({title , href}) {
    const path = usePathname()
  return (
    <Link href={href} className={path === href ? 'text-yellow-600' : ''}>{title}</Link>
  )
}