'use client';
import { useLocale } from '@/app/utils/hooks/useLocale.js';

import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope,faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
const LanguageToggleButton = () => {
    const { locale, changeLocale } = useLocale();

    const handleLanguageChange = () => {
        changeLocale(locale === 'en' ? 'fr' : 'en');
    };

    return (
        <button onClick={handleLanguageChange} className="p-2  rounded font-semibold flex items-center">
            {locale === 'en' ? (
                <FontAwesomeIcon icon={faGlobeAfrica} className='text-2xl text-blue-500'/>
            ) : (
                <FontAwesomeIcon icon={faGlobeEurope} className='text-2xl text-red-500' />
            )}
            {locale === 'en' ? 'FR' : 'EN'}
        </button>
    );
};

export default LanguageToggleButton;
