import type { AcquisitionState } from "./data/types";

export const CURRENT_VERSION = 2;

export function migrate(state: Partial<AcquisitionState>): AcquisitionState {
  let migrated: AcquisitionState = {
    version: state.version ?? 1, // in case state does not have versioning
    balance: state.balance ?? [],
    acquired: state.acquired ?? {},
    history: state.history ?? []
  };

  while (migrated.version < CURRENT_VERSION) {
    switch (migrated.version) {
      case 1:
        migrated = {
          ...migrated,
          history: [],
          version: 2
        };
        break

      default:
        throw new Error(`Unknown state version: ${migrated.version}`);
    }
  }

  return migrated
}
