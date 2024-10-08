import type { ThemeDefinition } from 'vuetify';

// String that represents the name of the theme I am using
export const MAIN_THEME = 'mainTheme';
// Light mode theme
export const mainTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#2f3861',
        secondary: '#9333ea',
        error: '#ff4559',
        info: '#3b82f6',
        success: '#50cd89',
        warning: '#f59e0b',
        activeHeaderDas: '#FBF4EB',
        grey__c: '#999999',
    },
};

// String that represents the name of the dark theme I am using
export const MAIN_DARK_THEME = 'mainDarkTheme';
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#2f3861',
        secondary: '#9333ea',
        error: '#ff4559',
        info: '#3b82f6',
        success: '#50cd89',
        warning: '#f59e0b',
        activeHeaderDas: '#FBF4EB',
        grey__c: '#999999',
    },
};
