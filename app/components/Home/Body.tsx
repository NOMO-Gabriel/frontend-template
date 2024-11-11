'use client';

import Link from "next/link";
import {useTheme} from "@/app/utils/hooks/useTheme.js";
import {useLocale} from "@/app/utils/hooks/useLocale.js";

export default function HomeBody() {
    const { theme } = useTheme();
    const { locale } = useLocale();


    const content = {
        en: {
            welcome: 'Welcome to the Veldra Enterprise Next.js Template!',
            description: `This is a front-end project template created by Veldra Enterprise using Next.js 14. 
                          It is designed for applications that do not require a backend. 
                          The project includes basic setup for theming and internationalization, 
                          allowing you to easily adapt the application to different languages and themes.`,
            themeInfo: 'To use theming, simply wrap your components with the ThemeProvider and use the "useTheme" hook to access the current theme state and switch between "light" and "dark" modes.',
            localeInfo: 'For internationalization, the application uses a "useLocale" hook, allowing you to switch languages and adapt the content dynamically based on the selected locale.',
            exampleLink: 'For more information about the project structure and customization commands, visit the example page.',
            examplePage: 'Example Page'
        },
        fr: {
            welcome: 'Bienvenue sur le template Next.js de Veldra Enterprise !',
            description: `Ceci est un template de projet front-end créé par Veldra Enterprise avec Next.js 14. 
                          Il est conçu pour des applications sans backend. 
                          Le projet inclut une configuration de base pour la gestion du thème et l'internationalisation, 
                          permettant d’adapter facilement l’application à différentes langues et thèmes.`,
            themeInfo: 'Pour utiliser le changement de thème, il suffit d’encapsuler vos composants dans le "ThemeProvider" et d’utiliser le hook "useTheme" pour accéder à l’état du thème et basculer entre les modes "clair" et "sombre".',
            localeInfo: 'Pour l’internationalisation, l’application utilise un hook "useLocale", qui permet de changer de langue et d’adapter dynamiquement le contenu en fonction de la langue sélectionnée.',
            exampleLink: 'Pour plus d’informations sur la structure du projet et les commandes de personnalisation, consultez la page d\'exemple.',
            examplePage: 'Page d\'exemple'
        }
    };

    const currentContent = locale === 'en' ? content.en : content.fr;

    return (
        <div className={`p-7  space-y-12 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'}`}>
            <h1 className="text-3xl font-bold mb-4">{currentContent.welcome}</h1>
            <p className="mb-4">{currentContent.description}</p>

            <h2 className="text-2xl font-semibold mb-2">{locale === 'en' ? 'Theme Usage' : 'Utilisation du Thème'}</h2>
            <p className="mb-4">{currentContent.themeInfo}</p>

            <h2 className="text-2xl font-semibold mb-2">{locale === 'en' ? 'Internationalization' : 'Internationalisation'}</h2>
            <p className="mb-4">{currentContent.localeInfo}</p>

            <Link href="/examplePage" className="text-blue-500 underline">
                {currentContent.exampleLink}
            </Link>
        </div>
    );
}
