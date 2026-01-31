import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="rounded-full p-2 transition-colors hover:bg-tech-gray-100 dark:hover:bg-tech-gray-800"
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 text-tech-gray-700" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full p-2 transition-colors hover:bg-tech-gray-100 dark:hover:bg-tech-gray-800"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-tech-gray-300 transition-transform hover:rotate-180 hover:text-yellow-400" />
            ) : (
                <Moon className="h-5 w-5 text-tech-gray-700 transition-transform hover:-rotate-12 hover:text-tech-blue-600" />
            )}
        </button>
    );
}
