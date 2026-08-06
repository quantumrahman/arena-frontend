import "../globals.css";

export const metadata = {
    title: "NexArena - Dashboard",
    description: "",
};

export default function DashboardLayout({ children }) {
    return (
        <main className="h-screen w-full">
            <aside>side bar</aside>
            <header>header</header>
            {children}
        </main>
    );
}
