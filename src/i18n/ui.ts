import { en } from './locales/en';
import { es } from './locales/es';

export const languages ={
    en: "English",
    es: "Español",
};

export const ui = { es, en } as const;

export const showDefaultLang = false; // Set to true to show the default language in the language switcher

export const defaultLang = "en";