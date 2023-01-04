export * from 'dialogic-js';
export type TThemeMenu = {
    /**
     * Phoenix LiveView callback.
     */
    mounted: () => void;
};
export declare const ThemeMenu: {
    mounted(): void;
};
declare global {
    interface Window {
        ThemeMenu?: TThemeMenu;
    }
}
