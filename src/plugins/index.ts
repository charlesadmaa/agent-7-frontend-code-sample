/**
 * plugins/index.ts
 *
 * Included in `./src/main.ts`
 */

// Plugins
import type { App } from 'vue'
import router from '@/router';
// @ts-ignore
import FlagIcon from 'vue-flag-icon';
import pinia from '@/store'
import i18n from "@/plugins/languagePlugin/languagePlugin";
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';

import '@/assets/scss/gloabl.scss';
import 'vue3-perfect-scrollbar/style.css'




export function registerPlugins (app: App) {

  app
    .use(router)
    .use(FlagIcon)
    .use(pinia)
    .use(i18n)
    .use(PerfectScrollbarPlugin)
}
