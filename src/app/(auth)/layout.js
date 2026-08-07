import "../globals.css";

export const metadata = {
    title: "NexArena - Authentication",
};

export default function AuthLayout({ children }) {
    return (
        <main className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 scale-105 bg-[url('/img/auth_bg.png')] bg-cover bg-center bg-no-repeat blur-[3px]"></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10">{children}</div>
        </main>
    );
}
