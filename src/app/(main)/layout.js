import "../globals.css";

import Header from "@/components/shared/Header/Header";

export const metadata = {
    title: "NexArena",
    description: "",
};

export default function MainLayout({ children }) {
    return (
        <main className="flex min-h-screen w-full flex-col justify-between bg-neutral-50">
            <Header />
        </main>
    );
}
