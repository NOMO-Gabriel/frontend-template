'use client'
import { useTheme } from "@/app/utils/hooks/useTheme.js";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import Link from "next/link";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ThemeToggleButton from "@/app/components/buttons/ThemeToggleButton";
import LanguageToggleButton from "@/app/components/buttons/LanguageToggleButton";

export default function Header() {
    const {theme} = useTheme();
    const {locale} = useLocale();


    const links = (locale === 'en') ? [
        {text: 'Home', href: '/'},
        {text: 'ExamplePage', href: '/examplePage'},

    ] : [
        {text: 'Accueil', href: '/'},
        {text: 'Page d\'example', href: '/examplePage'},

    ];

    const backgroundClass = theme === 'light' ? 'bg-gray-400' : 'bg-gray-600';
    const textClass = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <nav className={`flex justify-between items-center p-2 ml-0 ${backgroundClass} ${textClass} `}>
            <div className="hidden lg:flex text-xl font-semibold space-x-6 p-2">
                {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                        {link.text}
                    </Link>
                ))}
                <Link href={'mailto:enterpriseveldra@gmail.com'}>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </Link>
            </div>
            <div className="flex flex-row space-x-4">
                <LanguageToggleButton/>
                <ThemeToggleButton/>
            </div>
        </nav>
    );

}

