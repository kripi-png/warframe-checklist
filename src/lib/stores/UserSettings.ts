import { PersistedState } from 'runed';

export type UserSettings = {
  language: 'en';
  hideCompleted: boolean;
  includeHelminthSacrifice: boolean;
  [key: `section_open::${string}`]: boolean;
};

export type UserSettingsKey = keyof UserSettings;

export function createSettingsStore() {
  const initialState: Partial<UserSettings> = {
    language: 'en',
    includeHelminthSacrifice: true,
  };
  const state = new PersistedState<Partial<UserSettings>>(
    'user_settings',
    initialState,
  );

  // merge possible new fields
  state.current = { ...initialState, ...state.current };

  return {
    getSetting<K extends UserSettingsKey>(key: K): UserSettings[K] | null {
      return state.current[key] ?? null;
    },
    removeSetting(key: UserSettingsKey): void {
      const copy = { ...state.current };
      delete copy[key];
      state.current = copy;
    },
    setSetting<K extends UserSettingsKey>(
      key: K,
      value: UserSettings[K],
    ): void {
      state.current = {
        ...state.current,
        [key]: value,
      };
    },
    reset(): void {
      state.current = { ...initialState };
    },

    isSectionOpen(sectionId: string): boolean {
      return this.getSetting(`section_open::${sectionId}`) ?? true;
    },
    toggleSectionOpen(sectionId: string): void {
      const key: `section_open::${string}` = `section_open::${sectionId}`;

      if (this.getSetting(key) === false) {
        this.removeSetting(key);
      } else {
        this.setSetting(key, false);
      }
    },
  };
}

export const settingsStore = createSettingsStore();
