import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Mode = 'light' | 'dark';
const initial: Mode = browser
  ? ((localStorage.getItem('theme') as Mode) ?? 'dark')
  : 'dark';

export const theme = writable<Mode>(initial);

if (browser) {
  theme.subscribe((v) => {
    localStorage.setItem('theme', v);
    document.documentElement.classList.toggle('dark', v === 'dark');
  });
}
