import "../globals.css";

export const metadata = {
    title: "NexArena - Authentication",
};

export default function AuthLayout({ children }) {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-neutral-50">
            {children}
        </main>
    );
}
