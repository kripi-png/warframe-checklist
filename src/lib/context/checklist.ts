import type { WarframeStore } from '$lib/stores/createWarframeStore';
import { createContext } from 'svelte';

export const checklistKey = Symbol('checklist');
export const [getChecklistContext, setChecklistContext] =  createContext<WarframeStore>();
