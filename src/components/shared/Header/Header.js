"use client";

import { Bell, ChevronDown, Menu, SquareArrowRightExit, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import avatar from "@/assets/img/avatar.jpg";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 w-full border-b border-neutral-200 bg-white/80 px-5 backdrop-blur-md md:px-6 lg:px-7">
            <div className="mx-auto flex h-13.5 w-full max-w-7xl items-center justify-between">
                <h1 className="text-xl font-bold text-neutral-950 uppercase">
                    Nex<span className="text-green-600">Arena</span>
                </h1>
                <nav className="hidden h-13.5 items-center justify-center gap-8 md:flex">
                    <Link
                        href={"/"}
                        className={`text-base font-medium ${pathname === "/" ? "before: text-green-600 before:absolute before:bottom-0 before:h-0.5 before:w-full before:bg-green-600" : "text-neutral-950"} relative inline-flex h-full items-center`}
                    >
                        Home
                    </Link>
                    <Link
                        href={"/facilities"}
                        className={`text-base font-medium ${pathname === "/facilities" ? "before: text-green-600 before:absolute before:bottom-0 before:h-0.5 before:w-full before:bg-green-600" : "text-neutral-950"} relative inline-flex h-full items-center`}
                    >
                        Facilities
                    </Link>
                </nav>
                <div className="hidden items-center justify-center gap-5 md:flex">
                    <button
                        type="button"
                        role="button"
                        aria-label="button"
                        className="relative cursor-pointer"
                    >
                        <Bell size={20} />
                        <span className="absolute -top-0.5 right-0 inline-block size-3 rounded-full bg-green-600 text-[9px] font-normal text-white">
                            0
                        </span>
                    </button>
                    <div className="relative flex h-13.5 items-center justify-center">
                        <button className="flex cursor-pointer items-center justify-center gap-1.5">
                            <div className="relative size-9 overflow-hidden rounded-full border border-neutral-200 bg-neutral-50">
                                <Image
                                    src={avatar}
                                    alt="avatar"
                                    className="object-cover"
                                    fill={true}
                                />
                            </div>
                            <ChevronDown size={16} />
                        </button>
                        <div className="absolute top-13 right-0 z-10 hidden w-[200px] flex-col gap-1 rounded-lg border border-neutral-200 bg-white p-2">
                            <Link
                                href={"/auth/login"}
                                className="block px-2 py-1 text-base font-medium text-neutral-950 transition-all duration-200 ease-linear hover:bg-green-50 hover:text-green-600"
                            >
                                Login
                            </Link>
                            <div className="h-px w-full bg-neutral-200"></div>
                            <Link
                                href={"/auth/login"}
                                className="block px-2 py-1 text-base font-medium text-neutral-950 transition-all duration-200 ease-linear hover:bg-green-50 hover:text-green-600"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    role="button"
                    aria-label="button"
                    onClick={() => setToggle((prev) => !prev)}
                    className="cursor-pointer md:hidden"
                >
                    <Menu size={20} />
                </button>
            </div>
            <div
                className={`fixed top-0 right-0 z-50 flex h-screen w-full max-w-[350px] flex-col items-center justify-between bg-white px-5 pb-5 ${toggle ? "translate-x-0" : "translate-x-full"} border-l border-neutral-200 transition-transform duration-300 ease-linear md:hidden`}
            >
                <div className="w-full">
                    <div className="flex h-13.5 w-full items-center">
                        <button
                            type="button"
                            role="button"
                            aria-label="button"
                            onClick={() => setToggle((prev) => !prev)}
                            className="cursor-pointer"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <nav className="mt-5 flex w-full flex-col justify-center gap-3">
                        <Link
                            href={"/"}
                            className={`rounded-xl px-3 py-2 text-base font-medium text-green-600 ${pathname === "/" ? "bg-green-50 text-green-600" : "text-neutral-950 hover:bg-neutral-50"} transition-all duration-200 ease-linear`}
                        >
                            Home
                        </Link>
                        <Link
                            href={"/facilities"}
                            className={`rounded-xl px-3 py-2 text-base font-medium text-green-600 ${pathname === "/facilities" ? "bg-green-50 text-green-600" : "text-neutral-950 hover:bg-neutral-50"} transition-all duration-200 ease-linear`}
                        >
                            Facilities
                        </Link>
                        <Link
                            href={"/bookings"}
                            className={`rounded-xl px-3 py-2 text-base font-medium text-green-600 ${pathname === "/bookings" ? "bg-green-50 text-green-600" : "text-neutral-950 hover:bg-neutral-50"} transition-all duration-200 ease-linear`}
                        >
                            Bookings
                        </Link>
                        <Link
                            href={"/facility/create"}
                            className={`rounded-xl px-3 py-2 text-base font-medium text-green-600 ${pathname === "/facility/create" ? "bg-green-50 text-green-600" : "text-neutral-950 hover:bg-neutral-50"} transition-all duration-200 ease-linear`}
                        >
                            Create Facility
                        </Link>
                        <Link
                            href={"/facility/manage"}
                            className={`rounded-xl px-3 py-2 text-base font-medium text-green-600 ${pathname === "/facility/manage" ? "bg-green-50 text-green-600" : "text-neutral-950 hover:bg-neutral-50"} transition-all duration-200 ease-linear`}
                        >
                            Manage Facility
                        </Link>
                    </nav>
                </div>
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center justify-center gap-2">
                        <div className="relative flex size-11 items-center justify-center overflow-hidden rounded-full border border-neutral-200">
                            <Image src={avatar} alt="avatar" fill={true} className="object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <p className="test-base leading-tight font-semibold text-neutral-950">
                                Rakibul Rahman
                            </p>
                            <span className="text-sm leading-tight font-normal text-neutral-500">
                                rakibulrahman.dev@gmail.com
                            </span>
                        </div>
                    </div>
                    <button className="cursor-pointer">
                        <SquareArrowRightExit
                            size={20}
                            className="text-red-600 transition-all duration-200 ease-linear hover:text-red-500"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}
