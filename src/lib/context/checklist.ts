import BaseWarframeStore from '$lib/stores/BaseWarframeStore';
import type { TGeneralMoney } from '$lib/types/data';
import { createContext } from 'svelte';

export const checklistKey = Symbol('checklist');
export type ChecklistContext = BaseWarframeStore<TGeneralMoney>;
export const [getChecklistContext, setChecklistContext] =
  createContext<ChecklistContext>();
