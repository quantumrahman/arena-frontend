"use client";

import { FcGoogle } from "react-icons/fc";

import Link from "next/link";
import RegisterForm from "@/components/ui/RegisterForm/RegisterForm";

export default function RegisterModule() {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center px-3 md:px-4 lg:px-5">
            <div className="flex w-full flex-1 items-center justify-center">
                <div className="flex w-full max-w-[450px] flex-col items-center justify-center rounded-xl bg-white p-8">
                    <Link href={"/"} className="text-lg font-bold text-neutral-950 uppercase">
                        Nex<span className="text-green-500">Arena</span>
                    </Link>
                    <div className="mt-5 text-center">
                        <h3 className="text-base leading-tight font-semibold text-neutral-950">
                            Create account
                        </h3>
                        <p className="mt-1 text-sm font-medium text-neutral-500">
                            Create an account to unlock all facilities
                        </p>
                    </div>
                    <button className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-neutral-200 py-2 transition-all duration-200 ease-linear hover:bg-neutral-100">
                        <FcGoogle size={20} />
                        <span className="text-sm font-medium text-neutral-500">
                            Continue with Google
                        </span>
                    </button>
                    <div className="my-3 flex w-full items-center justify-center gap-2">
                        <div className="mt-0.5 h-px w-full bg-neutral-200"></div>
                        <span className="text-sm font-normal text-neutral-500">or</span>
                        <div className="mt-0.5 h-px w-full bg-neutral-200"></div>
                    </div>
                    <RegisterForm />
                    <div className="mt-4 w-full text-center">
                        <p className="text-sm font-medium text-neutral-500">
                            Already have an account?{" "}
                            <Link href={"/auth/login"} className="text-green-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full py-5 text-center">
                <span className="text-sm font-medium text-neutral-300">
                    @ {new Date().getFullYear()} NexArena
                </span>
            </div>
        </section>
    );
}
