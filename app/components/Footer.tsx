'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import { useTheme } from "@/app/utils/hooks/useTheme.js";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    const { locale } = useLocale();
    const { theme } = useTheme();

    const backgroundClass = theme === 'light' ? 'bg-gray-400' : 'bg-gray-600';
    const textClass = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <footer className={`py-4 flex justify-between items-center px-6 fixed bottom-0 w-full ${backgroundClass} ${textClass}`}>
            <p className="text-sm">
                Copyright &copy; 2024 {locale === 'en' ? 'by' : 'par'} Veldra Enterprise | {locale === 'en' ? 'All Rights Reserved' : 'Tous droits réservés'}.
            </p>
            <Link href={"/"}>
                <FontAwesomeIcon icon={faHome} className="text-xl" />
            </Link>
        </footer>
    );
}
