import Link from "next/link";

interface NavItem {
    label: string;
    href: string;
}

interface HeaderProps {
    brandName?: string;
    navItems?: NavItem[];
}

export default function Header({
    brandName = "Tu Marca",
    navItems = [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/servicios" }
    ],
}: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full">
        
            <div className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">

                <div className="absolute -top-10 left-1/4 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 right-1/4 h-32 w-32 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

                <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                <Link
                    href="/"
                    className="text-white font-semibold tracking-tight text-sm sm:text-base hover:opacity-80 transition"
                >
                    {brandName}
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item, i) => (
                    <Link
                        key={i}
                        href={item.href}
                        className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                        {item.label}
                    </Link>
                    ))}
                </nav>

                <Link
                    href="#contact"
                    className="rounded-full bg-white text-black px-5 py-2 text-xs font-semibold hover:bg-zinc-200 transition-all duration-300 active:scale-95"
                >
                    Contactar
                </Link>

                </div>
            </div>
        </header>
    );
}