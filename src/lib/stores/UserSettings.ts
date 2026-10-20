import { PersistedState } from 'runed';

type UserSettings = Record<string, any> &
  Partial<{
    language: 'en';
  }>;

export function createSettingsStore() {
  const initialState: UserSettings = { language: 'en' };
  const state = new PersistedState<UserSettings>('user_settings', initialState);

  // merge possible new fields
  state.current = { ...initialState, ...state.current };

  return {
    getSetting(key: string) {
      return state.current[key] ?? null;
    },
    removeSetting(key: string) {
      const { [key]: _, ...rest } = state.current;
      state.current = rest;
    },
    setSetting(key: string, value: any) {
      state.current = {
        ...state.current,
        [key]: value,
      };
    },
    reset() {
      state.current = { ...initialState };
    },

    isSectionOpen(sectionId: string): boolean {
      // defaults to open
      return this.getSetting(`section_open::${sectionId}`) ?? true;
    },
    toggleSectionOpen(sectionId: string) {
      const key = `section_open::${sectionId}`;

      if (state.current[key] === false) {
        this.removeSetting(key);
      } else {
        this.setSetting(key, false);
      }
    },
  };
}

export const settingsStore = createSettingsStore();
