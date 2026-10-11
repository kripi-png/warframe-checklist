import { describe, expect, it } from 'vitest';
import { getCircuitRotation, getRotationStartDate } from '$lib/utils';

describe('getCircuitRotation', () => {
  it('returns 0 on the base date (Group A)', () => {
    expect(getCircuitRotation(new Date('2026-08-31T00:00:00Z'))).toBe(0);
  });

  it('returns 0 later in the base week', () => {
    expect(getCircuitRotation(new Date('2026-09-06T23:59:59Z'))).toBe(0);
  });

  it('advances to the next group on Monday', () => {
    expect(getCircuitRotation(new Date('2026-09-07T00:00:00Z'))).toBe(1);
  });

  it('returns the correct index after several weeks', () => {
    expect(getCircuitRotation(new Date('2026-11-30T00:00:00Z'))).toBe(4);
  });

  it('handles dates before the base date', () => {
    expect(getCircuitRotation(new Date('2026-08-01T00:00:00Z'))).toBe(4);
  });
});
