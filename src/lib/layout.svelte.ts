// https://github.com/sveltejs/kit/issues/627#issuecomment-3121655646
import { getContext, setContext, type Snippet } from 'svelte';

const key = Symbol('layout-slots');

interface Slots extends Record<string, Snippet | undefined> {
  custom?: Snippet;
}

export function initLayout() {
  const slots = $state<Slots>({});
  return setContext(key, slots);
}

export function layout(slots: Slots) {
  const context = getContext<Slots>(key);
  Object.keys(context).forEach((key) => delete context[key]);
  Object.assign(context, slots);
}
