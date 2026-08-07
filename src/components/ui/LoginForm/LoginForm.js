"use client";

export default function LoginForm() {
    return (
        <form className="w-full">
            <div className="flex w-full flex-col">
                <label htmlFor="email" className="mb-1.5 text-sm font-semibold text-neutral-950">
                    Email address
                </label>
                <input
                    id="email"
                    type="text"
                    aria-label="input"
                    role="input"
                    placeholder="Enter email address"
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-950 caret-green-500 transition-all duration-200 ease-linear outline-none focus:ring-2 focus:ring-green-500"
                />
                <span className="mt-0.5 block h-4 w-full text-right text-sm font-medium text-red-500">
                    {/* Error! */}
                </span>
            </div>
            <div className="flex w-full flex-col">
                <label htmlFor="password" className="mb-1.5 text-sm font-semibold text-neutral-950">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    aria-label="input"
                    role="input"
                    placeholder="Enter password"
                    className="w-full rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-950 caret-green-500 transition-all duration-200 ease-linear outline-none focus:ring-2 focus:ring-green-500"
                />
                <span className="mt-0.5 block h-4 w-full text-right text-sm font-medium text-red-500">
                    {/* Error! */}
                </span>
            </div>
            <button
                type="submit"
                aria-label="button"
                role="button"
                className="mt-2 h-[38px] w-full cursor-pointer rounded-lg bg-green-500 text-sm font-medium text-white transition-all duration-200 ease-linear hover:bg-green-400"
            >
                Continue
            </button>
        </form>
    );
}
