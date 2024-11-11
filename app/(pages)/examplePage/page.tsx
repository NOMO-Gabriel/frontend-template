'use client';

import { useTheme } from "@/app/utils/hooks/useTheme.js";
import { useLocale } from "@/app/utils/hooks/useLocale.js";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function ExamplePage() {
    const { theme } = useTheme();
    const { locale } = useLocale();

    const content = {
        en: {
            title: 'Project Structure and Customization',
            intro: 'This page explains the project structure and provides commands to customize the Next.js template.',
            structureTitle: 'Project Structure',
            structure: `This template is built with Next.js 14 using the App Router. 
                        Below is an overview of the directory structure:
                        
                        - public/: Stores images and documents.
                        - app/: Contains the core application logic.
                          - pages/: Handles the Next.js pages using the App Router.
                          - components/: Contains reusable components like Header, Footer, and HomeBody.
                          - fonts/: Custom fonts for the project.
                          - utils/hooks/: Custom hooks for managing theme and internationalization.
                          - utils/contexts/: Context providers for global state management.`,
            commandsTitle: 'Available Commands',
            commands: `To rename the project:
                       1. Modify the "name" field in the package.json file.
                       2. Optionally, update any relevant environment files (if needed).
                       
                       To remove GitHub remotes:
                       1. Run "git remote remove origin".
                       
                       To deploy:
                       1. Run "npm run build" followed by "npm start" or deploy to Vercel or your platform of choice.`,
            conclusion: 'Feel free to modify the structure or add custom commands as needed to fit your specific use cases.'
        },
        fr: {
            title: 'Structure du Projet et Personnalisation',
            intro: 'Cette page explique la structure du projet et fournit des commandes pour personnaliser le template Next.js.',
            structureTitle: 'Structure du Projet',
            structure: `Ce template est construit avec Next.js 14 en utilisant l'App Router.
                        Voici un aperçu de la structure des répertoires :
                        
                        - public/ : Stocke les images et documents.
                        - app/ : Contient la logique principale de l'application.
                          - pages/ : Gère les pages Next.js utilisant l'App Router.
                          - components/ : Contient des composants réutilisables comme Header, Footer, et HomeBody.
                          - fonts/ : Polices personnalisées pour le projet.
                          - utils/hooks/ : Hooks personnalisés pour gérer le thème et l'internationalisation.
                          - utils/contexts/ : Providers de contextes pour la gestion de l'état global.`,
            commandsTitle: 'Commandes Disponibles',
            commands: `Pour renommer le projet :
                       1. Modifiez le champ "name" dans le fichier package.json.
                       2. Mettez à jour les fichiers d'environnement si nécessaire.
                       
                       Pour supprimer les remotes GitHub :
                       1. Exécutez "git remote remove origin".
                       
                       Pour déployer :
                       1. Exécutez "npm run build", puis "npm start" ou déployez sur Vercel ou la plateforme de votre choix.`,
            conclusion: 'N\'hésitez pas à modifier la structure ou à ajouter des commandes personnalisées selon vos besoins spécifiques.'
        }
    };

    const currentContent = locale === 'en' ? content.en : content.fr;

    return (
        <div>
            <Header />
            <div className={`p-4 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'}`}>
                <h1 className="text-3xl font-bold mb-4">{currentContent.title}</h1>
                <p className="mb-4">{currentContent.intro}</p>

                <h2 className="text-2xl font-semibold mb-2">{currentContent.structureTitle}</h2>
                <pre className="mb-4 whitespace-pre-wrap">{currentContent.structure}</pre>

                <h2 className="text-2xl font-semibold mb-2">{currentContent.commandsTitle}</h2>
                <pre className="mb-4 whitespace-pre-wrap">{currentContent.commands}</pre>

                <p>{currentContent.conclusion}</p>
            </div>
            <Footer />
        </div>
    );
}
