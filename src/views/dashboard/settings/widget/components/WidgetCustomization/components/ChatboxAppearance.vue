<template>
  <sw-accordion-header>Appearance</sw-accordion-header>
  <sw-accordion-content>
    <div class="p-5">
      <div class="flex items-center justify-end">
      <div class="w-[50%]">Chatbox Default Theme (Color)</div>
      <div class="w-[50%]">
        <div class="text-right">
          <sw-dropdown
            size="sm"
            buttonclass="w-[200px] overflow-hidden  justify-between"
            button-color="alternative"
            :close-inside="true"
          >
            <template #title>
              <div class="flex items-center">
                <span
                  class="w-[15px] h-[15px] mr-2 rounded-full"
                  v-bind:style="{ background: activeTheme.colorCode }"
                ></span>
                <div class="text-sm text-gray-600">
                  {{ activeTheme.name }}
                </div>
              </div>
            </template>
            <template #default>
              <div
                class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[200px] dark:bg-gray-700"
              >
                <div class="block">
                  <div
                    v-for="(item, index) in theme"
                    :key="index"
                    @click="setWidgetTheme(item)"
                    class="mb-2 last:mb-0"
                  >
                    <div
                      class="inline-block cursor-pointer border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                    >
                      <div class="flex items-center">
                        <span
                          class="w-[15px] h-[15px] mr-2 rounded-full"
                          v-bind:style="{ background: item.colorCode }"
                        ></span>

                        <div>{{ item.name }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </sw-dropdown>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end mt-5">
      <div class="w-[50%]">Theme Text</div>
      <div class="w-[50%]">
        <div class="text-right">
          <sw-dropdown
            size="sm"
            buttonclass="w-[200px] overflow-hidden  justify-between"
            button-color="alternative"
            :close-inside="true"
          >
            <template #title>
              <div class="flex items-center">
                <div class="text-sm text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
                  <span>{{ activeThemeText.value }}</span>
                </div>
              </div>
            </template>
            <template #default>
              <div
                class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[200px] dark:bg-gray-700"
              >
                <div class="block">
                  <div
                    v-for="(item, index) in themeText"
                    :key="index"
                    @click="setThemeText(item)"
                    class="mb-2 last:mb-0"
                  >
                    <div
                      class="inline-block cursor-pointer border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                    >
                      <div class="flex items-center">
                        <div>{{ item.value }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </sw-dropdown>
        </div>
      </div>
    </div>


    <div class="flex items-center justify-end mt-5">
      <div class="w-[50%]">Welcome Message</div>
      <div class="w-[50%]">
        <div class="text-right">
          <sw-dropdown
            size="sm"
            buttonclass="w-[200px] overflow-hidden  justify-between"
            button-color="alternative"
            :close-inside="true"
          >
            <template #title>
              <div class="flex items-center">
                <div class="text-sm text-gray-600  overflow-hidden whitespace-nowrap text-ellipsis">
                  {{ activeWellcomeMessage.value }}
                </div>
              </div>
            </template>
            <template #default>
              <div
                class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[200px] dark:bg-gray-700"
              >
                <div class="block">
                  <div
                    v-for="(item, index) in wellcomeMessage"
                    :key="index"
                    @click="setWellcomeMessage(item)"
                    class="mb-2 last:mb-0"
                  >
                    <div
                      class="inline-block cursor-pointer border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                    >
                      <div class="flex items-center">
                        <div>{{ item.value }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </sw-dropdown>
        </div>
      </div>
    </div>


    <div class="flex items-center justify-end mt-5">
      <div class="w-[50%]">Chatbox Background image</div>
      <div class="w-[50%]">
        <div class="text-right">
          <sw-dropdown
            size="sm"
            buttonclass="w-[200px] overflow-hidden  justify-between"
            button-color="alternative"
            :close-inside="true"
          >
            <template #title>
              <div class="flex items-center">
                <div
                  class="mr-2"
                >
                <img class="min-w-[15px] min-h-[15px] w-[15px] h-[15px]  rounded-xs object-cover mr-2" :src="activeBackgroundImage.src">

              </div>
                <div class="text-sm text-gray-600  overflow-hidden whitespace-nowrap text-ellipsis">
                  {{ activeBackgroundImage.name }} sks sj sj sjs js sj sj sjs js js sj s js sj 
                </div>
              </div>
            </template>
            <template #default>
              <div
                class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[200px] dark:bg-gray-700"
              >
                <div class="block">
                  <div
                    v-for="(item, index) in backgroundImage"
                    :key="index"
                    @click="setBackgroundImage(item)"
                    class="mb-2 last:mb-0"
                  >
                    <div
                      class="inline-block cursor-pointer border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                    >
                      <div class="flex items-center">
                        <span
                          class="w-[15px] h-[15px] mr-2 rounded-xs"
                        >
                        <img :src="item.src">
                      </span>

                        <div>{{ item.name }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </sw-dropdown>
        </div>
      </div>
    </div>

    </div>
  </sw-accordion-content>
</template>

<script setup lang="ts">
import { SwAccordionContent, SwAccordionHeader, SwDropdown } from "@/global";
import { inject, ref, Ref } from "vue";
import { backgroundImageType, defaultType, themeInterface, widgetDataInterFace } from "../../../types";

const widgetSettings = inject("data") as Ref<widgetDataInterFace>;
const theme = ref(widgetSettings.value.widgetSettings.theme);
const activeTheme = ref(widgetSettings.value.widgetSettings.activeTheme);

const themeText = ref(widgetSettings.value.themeText.data);
const activeThemeText = ref(widgetSettings.value.themeText.active);


const wellcomeMessage = ref(widgetSettings.value.wellcomeMessage.data);
const activeWellcomeMessage = ref(widgetSettings.value.wellcomeMessage.active);

const backgroundImage = ref(widgetSettings.value.backgroundImage.data);
const activeBackgroundImage = ref(widgetSettings.value.backgroundImage.active);

function setWidgetTheme(item: themeInterface) {
  activeTheme.value = item;
}
function setThemeText(item: defaultType) {
  activeThemeText.value = item;
}
function setWellcomeMessage(item: defaultType) {
  activeWellcomeMessage.value = item;
}
function setBackgroundImage(item: backgroundImageType) {
  activeBackgroundImage.value = item;
}
</script>
