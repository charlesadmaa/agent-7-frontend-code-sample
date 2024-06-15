<template>
  <div class="w-2/4">
    <div class="mb-4 font-bold border-b-[1px] border-b-gray-200 pb-4">
      Application Settings
    </div>
    <div>
      <sw-vertical-tabs
        v-model="activeTab"
        position="horizontal"
        variant="pills"
      >
        <sw-tab name="general" title="General">
          <div>
            <h2 class="text-3xl font-bold">General</h2>
          </div>
          <div class="mt-12">
            <div class="flex flex-col mt-6">
              <h2 class="font-bold text-base">Sidebar Theme</h2>
              <div class="mt-4">
                <div>
                  <sw-dropdown
                    size="sm"
                    buttonclass="min-w-[300px] justify-between"
                    button-color="alternative"
                    :close-inside="true"
                  >
                    <template #title>
                      <div class="flex items-center">
                        <div class="text-sm text-gray-600">
                          {{ generalSettings.theme.name }}
                        </div>
                      </div>
                    </template>
                    <template #default>
                      <div
                        class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[300px] dark:bg-gray-700"
                      >
                        <div class="block">
                          <div
                            v-for="(item, index) in sideBarTheme"
                            :key="index"
                            @click="setSiteBarTheme(item)"
                            class="mb-2 last:mb-0"
                          >
                            <div
                              class="inline-block cursor-pointer  border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                            >
                              <div class="flex items-center">
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

          <div class="flex flex-col mt-12">
            <h2 class="font-bold text-base">Browser Notification</h2>
            <p class="text-sm mt-2 text-gray-500">
              Enable Browser Notifications to receive notifications about new
              messages through standard browser notification windows.
            </p>
            <div class="mt-4">
              <sw-toggle
                v-model="generalSettings.browserNotification"
                color="primary"
              ></sw-toggle>
            </div>
          </div>

          <div class="mt-12">
            <div class="flex flex-col mt-6">
              <h2 class="font-bold text-base">Language</h2>
              <p class="text-sm mt-2 text-gray-500">
                This option changes the app interface language only. If you want
                to change the language for a website live chat, you can do so on
                the "Channels" page in the "Settings" section
              </p>
              <div class="mt-4">
                <div>
                  <sw-dropdown
                    size="sm"
                    buttonclass="min-w-[300px] justify-between"
                    button-color="alternative"
                    :close-inside="true"
                  >
                    <template #title>
                      <div class="flex items-center">
                        <div class="text-sm text-gray-600">
                          {{ generalSettings.language.name }}
                        </div>
                      </div>
                    </template>
                    <template #default>
                      <div
                        class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[300px] dark:bg-gray-700"
                      >
                        <div class="block">
                          <div
                            v-for="(item, index) in availableLanguages"
                            :key="index"
                            @click="setApplicationLanguage(item)"
                            class="mb-2 last:mb-0"
                          >
                            <div
                              class="inline-block cursor-pointer border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                            >
                              <div class="flex items-center">
                                <div>{{ item.title }}</div>
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
        </sw-tab>
        <sw-tab name="sounds" title="Sounds">
          <div>
            <h2 class="text-3xl font-bold">Sounds</h2>
          </div>

          <div class="mt-12">
            <div class="flex flex-col mt-6">
              <h2 class="font-bold text-base">New chat sound</h2>
              <p class="text-sm mt-2 text-gray-500">
                This sound plays when a new visitor requests a chat
              </p>
              <div class="mt-4">
                <div>
                  <sw-dropdown
                    size="sm"
                    buttonclass="min-w-[300px] justify-between"
                    button-color="alternative"
                    :close-inside="true"
                  >
                    <template #title>
                      <div class="flex items-center">
                        <div class="text-sm text-gray-600">
                          {{ generalSettings.newChatSound.name }}
                        </div>
                      </div>
                    </template>
                    <template #default>
                      <div
                        class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[300px] dark:bg-gray-700"
                      >
                        <div class="block">
                          <div
                            v-for="(item, index) in sounds"
                            :key="index"
                            @click="setSound('newChatSound', item)"
                            class="mb-2 last:mb-0"
                          >
                            <div
                              class="inline-block cursor-pointer border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                            >
                              <div class="flex items-center">
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

          <div class="mt-12">
            <div class="flex flex-col mt-6">
              <h2 class="font-bold text-base">
                New message sound in existing chat
              </h2>
              <p class="text-sm mt-2 text-gray-500">
                This sound plays when new messages arrive in a chat that has
                already been started
              </p>
              <div class="mt-4">
                <div>
                  <sw-dropdown
                    size="sm"
                    buttonclass="min-w-[300px] justify-between"
                    button-color="alternative"
                    :close-inside="true"
                  >
                    <template #title>
                      <div class="flex items-center">
                        <div class="text-sm text-gray-600">
                          {{ generalSettings.newMessageSound.name }}
                        </div>
                      </div>
                    </template>
                    <template #default>
                      <div
                        class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[300px] dark:bg-gray-700"
                      >
                        <div class="block">
                          <div
                            v-for="(item, index) in sounds"
                            :key="index"
                            @click="setSound('newMessageSound', item)"
                            class="mb-2 last:mb-0"
                          >
                            <div
                              class="inline-block cursor-pointer border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                            >
                              <div class="flex items-center">
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

          <div class="mt-12">
            <div class="flex flex-col mt-6">
              <h2 class="font-bold text-base">New website visitor sound</h2>
              <p class="text-sm mt-2 text-gray-500">
                This sound plays when a new visitor clicks into your website
              </p>
              <div class="mt-4">
                <div>
                  <sw-dropdown
                    size="sm"
                    buttonclass="min-w-[300px] justify-between"
                    button-color="alternative"
                    :close-inside="true"
                  >
                    <template #title>
                      <div class="flex items-center">
                        <div class="text-sm text-gray-600">
                          {{ generalSettings.newWebsiteVisitorSound.name }}
                        </div>
                      </div>
                    </template>
                    <template #default>
                      <div
                        class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[300px] dark:bg-gray-700"
                      >
                        <div class="block">
                          <div
                            v-for="(item, index) in sounds"
                            :key="index"
                            @click="setSound('newWebsiteVisitorSound', item)"
                            class="mb-2 last:mb-0"
                          >
                            <div
                              class="inline-block cursor-pointer border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                            >
                              <div class="flex items-center">
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
        </sw-tab>
        <sw-tab name="about" title="About">
          <div>
            <h2 class="text-3xl font-bold">General</h2>
          </div>

          <div class="mt-12">
            <h2 class="font-bold text-base">Platform</h2>
            <p class="text-sm mt-2 text-gray-500">Web Application (MacIntel)</p>
          </div>

          <div class="mt-12">
            <h2 class="font-bold text-base">Bundle</h2>
            <p class="text-sm mt-2 text-gray-500">Version: 1.12.23.8</p>
          </div>

          <div class="mt-12">
            <h2 class="font-bold text-base">About Project</h2>
            <p class="text-sm mt-2 text-gray-500">
              <a class="text-blue-500" href="#">Read More</a>
            </p>
          </div>
        </sw-tab>
      </sw-vertical-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { SwVerticalTabs, SwTab, SwDropdown, SwToggle } from "@/global";
import { availableLanguages } from "@/store/LanguageStore/AvailableLanguages";
import { languageStore } from "@/store/LanguageStore/LangugageStore";
import { LanguageTypes } from "@/store/LanguageStore/types";

const languageOption = languageStore();

const activeTab = ref("general");

interface generalTypeInterface {
  id: String | Number;
  name: String;
}

interface notificationSoundInterface {
  id: String | Number;
  name: String;
  url: String;
}

interface generalSettingsInterface {
  theme: generalTypeInterface;
  browserNotification: boolean;
  language: generalTypeInterface;
  newChatSound: notificationSoundInterface;
  newWebsiteVisitorSound: notificationSoundInterface;
  newMessageSound: notificationSoundInterface;
}

const generalSettings = ref<generalSettingsInterface>({
  theme: {
    id: 1,
    name: "Dark",
  },
  browserNotification: true,
  language: {
    id: "en",
    name: "English",
  },
  newChatSound: {
    id: 1,
    name: "Example 1",
    url: "https://soundexample.com/example-1",
  },
  newMessageSound: {
    id: 2,
    name: "Example 2",
    url: "https://soundexample.com/example-2",
  },
  newWebsiteVisitorSound: {
    id: 3,
    name: "Example 3",
    url: "https://soundexample.com/example-3",
  },
});

const sideBarTheme: generalTypeInterface[] = [
  {
    id: "light",
    name: "Light",
  },
  {
    id: "dark",
    name: "Dark",
  },
];

function setSiteBarTheme(item: generalTypeInterface) {
  generalSettings.value.theme = item;
}

function setApplicationLanguage(item: LanguageTypes) {
  generalSettings.value.language = { id: item.language, name: item.title };
  languageOption.changeCurrentLanguage(item);
}

const sounds = ref<notificationSoundInterface[]>([
  {
    id: 1,
    name: "Example 1",
    url: "https://soundexample.com/example-1",
  },
  {
    id: 2,
    name: "Example 2",
    url: "https://soundexample.com/example-2",
  },
  {
    id: 3,
    name: "Example 3",
    url: "https://soundexample.com/example-3",
  },
]);

function setSound(actionType: string, item: notificationSoundInterface) {
  if (actionType === "newChatSound") {
    generalSettings.value.newChatSound = item;
  } else if (actionType === "newWebsiteVisitorSound") {
    generalSettings.value.newWebsiteVisitorSound = item;
  } else if (actionType === "newMessageSound") {
    generalSettings.value.newMessageSound = item;
  } else {
    console.log("Unkown action type");
  }
}

onMounted(() => {
  generalSettings.value.language = {
    id: languageOption.getCurrentLanguage.language,
    name: languageOption.getCurrentLanguage.title,
  };
});
</script>
