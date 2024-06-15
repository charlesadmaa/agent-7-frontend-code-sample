<template>
  <sw-dropdown
    buttonclass="border-none"
    placement="top"
    buttonColor="alternative"
    :closeInside="true"
    :show-drop-down-arrow="props.showArrow"
    v-if="props.position !== 'sidebar'"
  >
    <template #title>
      <flag class="mr-2" :iso="defaultLanguage.flag" v-bind:squared="false" />
      <span v-if="props.position == 'default'">{{
        defaultLanguage.title
      }}</span>
    </template>
    <div
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[133px] dark:bg-gray-700"
    >
      <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
        <li
          class="flex items-center hover:bg-slate-100 cursor-pointer pb-2 pt-2 rounded"
          v-for="entry in availableLanguages"
          @click="changeLanguageOption(entry)"
        >
          <flag class="ml-5" :iso="entry.flag" v-bind:squared="false" />
          <div
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            {{ entry.title }}
          </div>
        </li>
      </ul>
    </div>
  </sw-dropdown>
  <sw-dropdown
    buttonclass="border-none hover:bg-transparent focus:ring-transparent !mb-6"
    placement="top"
    buttonColor="alternative"
    :closeInside="true"
    :show-drop-down-arrow="props.showArrow"
    v-else
  >
    <template #title>
      <flag :iso="defaultLanguage.flag" v-bind:squared="false" />
      <span v-if="props.position !== 'sidebar'">{{
        defaultLanguage.title
      }}</span>
    </template>
    <div
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[50px] dark:bg-gray-700"
    >
      <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
        <li
          class="flex items-center hover:bg-slate-100 cursor-pointer pb-2 pt-2 rounded"
          v-for="entry in availableLanguages"
          @click="changeLanguageOption(entry)"
        >
          <div class="w-full">
            <flag :iso="entry.flag" v-bind:squared="false" />
          </div>
        </li>
      </ul>
    </div>
  </sw-dropdown>
</template>

<script setup lang="ts">
import { SwDropdown } from "@/global";
import { computed } from "vue";
import { availableLanguages } from "@/store/LanguageStore/AvailableLanguages";
import { languageStore } from "@/store/LanguageStore/LangugageStore";
import { LanguageTypes } from "@/store/LanguageStore/types";
import { TranslatorPositionType } from "./types";

const languageOption = languageStore();

function changeLanguageOption(option: LanguageTypes) {
  languageOption.changeCurrentLanguage(option);
}

const defaultLanguage = computed(() => {
  return languageOption.getCurrentLanguage;
});

interface TranslatorProps {
  position?: TranslatorPositionType;
  showArrow?: boolean;
}

const props = withDefaults(defineProps<TranslatorProps>(), {
  position: "default",
  showArrow: true,
});

</script>
