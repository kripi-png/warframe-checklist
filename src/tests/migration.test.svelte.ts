import type { AcquisitionState } from "$lib/data/types";
import { CURRENT_VERSION, migrate } from "$lib/migrations";
import { describe, expect, it } from "vitest";

describe("migrate", () => {
  describe("when state is already at the current version", () => {
    it("returns the state unchanged", () => {
      const state: Partial<AcquisitionState> = {
        version: CURRENT_VERSION,
        balance: [],
        acquired: {},
        history: []
      };

      expect(migrate(state)).toEqual(state);
    });
  });

  describe("when state has no version", () => {
    it("migrates it as version 1", () => {
      const state: Partial<AcquisitionState> = {
        balance: [{ resourceId: "wood", quantity: 10 }],
        acquired: { wood: 5 }
      };

      expect(migrate(state)).toEqual({
        version: 2,
        balance: [{ resourceId: "wood", quantity: 10 }],
        acquired: { wood: 5 },
        history: []
      });
    });
  });

  describe("when state is version 1", () => {
    it("adds an empty history and migrates to version 2", () => {
      const state: Partial<AcquisitionState> = {
        version: 1,
        balance: [{ resourceId: "wood", quantity: 10 }],
        acquired: { wood: 5 }
      };

      expect(migrate(state)).toEqual({
        version: 2,
        balance: [{ resourceId: "wood", quantity: 10 }],
        acquired: { wood: 5 },
        history: []
      });
    });

    it("replaces any existing history", () => {
      const state: Partial<AcquisitionState> = {
        version: 1,
        history: [
          {
            id: "old",
            duration: 60,
            rewards: []
          }
        ]
      };

      expect(migrate(state)).toEqual({
        version: 2,
        balance: [],
        acquired: {},
        history: []
      });
    });
  });
});
