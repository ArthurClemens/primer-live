export * from 'dialogic-js';

type PhxEvent = {
  detail: unknown;
};

export type TThemeMenu = {
  /**
   * Phoenix LiveView callback.
   */
  mounted: () => void;
};

export const ThemeMenu = {
  mounted() {
    // Usage:
    // push_event(Theme.session_key(), updated_theme)
    //
    // The API request should be processed by SessionController so that it becomes available in the session
    window.addEventListener('phx:theme', (e: CustomEvent<PhxEvent>) =>
      fetch(`/api/session?theme=${JSON.stringify(e.detail)}`, {
        method: 'post',
      })
    );
  },
};

declare global {
  interface Window {
    ThemeMenu?: TThemeMenu;
  }
}

window.ThemeMenu = ThemeMenu;
