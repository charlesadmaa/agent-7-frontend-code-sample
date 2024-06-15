<template>
  <sw-accordion-header>Restrictions</sw-accordion-header>
  <sw-accordion-content>
    <div class="p-5">
      <div class="flex items-center justify-end">
        <div class="w-[50%]">
          Hide chatbox from people in the following location
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-dropdown
              size="sm"
              buttonclass="min-w-[200px] justify-between"
              button-color="alternative"
              :close-inside="false"
            >
              <template #title>
                <div class="flex items-center">
                  <div class="text-sm text-gray-600">Select country</div>
                </div>
              </template>
              <template #default>
                <div
                  class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[200px] dark:bg-gray-700"
                >
                  <div class="block text-left">
                    <div class="p-3">
                      <label for="input-group-search" class="sr-only"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
                        >
                          <svg
                            class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="input-group-search"
                          class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search country"
                        />
                      </div>
                    </div>
                    <ul
                      class="h-48 overflow-y-auto p-3 pt-0 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownBgHoverButton"
                    >
                      <div
                        class="p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                        v-for="(item, index) in countries"
                        :key="index"
                      >
                        <label
                          :for="'hideLocation-' + index"
                          class="w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer"
                        >
                          <div class="flex items-center rounded">
                            <input
                              :id="'hideLocation-' + index"
                              type="checkbox"
                              :checked="
                                restrictedCountries.indexOf(item.code) !== -1
                              "
                              :value="item.code"
                              class="cursor-pointer mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            {{ item.name }}
                          </div>
                        </label>
                      </div>
                    </ul>
                  </div>
                </div>
              </template>
            </sw-dropdown>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">
          Show chatbox for people only in the following location
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-dropdown
              size="sm"
              buttonclass="min-w-[200px] justify-between"
              button-color="alternative"
              :close-inside="false"
            >
              <template #title>
                <div class="flex items-center">
                  <div class="text-sm text-gray-600">Select country</div>
                </div>
              </template>
              <template #default>
                <div
                  class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[200px] dark:bg-gray-700"
                >
                  <div class="block text-left">
                    <div class="p-3">
                      <label for="input-group-search" class="sr-only"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
                        >
                          <svg
                            class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="input-group-search"
                          class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search country"
                        />
                      </div>
                    </div>
                    <ul
                      class="h-48 overflow-y-auto p-3 pt-0 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownBgHoverButton"
                    >
                      <div
                        class="p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                        v-for="(item, index) in countries"
                        :key="index"
                      >
                        <label
                          :for="'hideLocation-' + index"
                          class="w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer"
                        >
                          <div class="flex items-center rounded">
                            <input
                              :id="'hideLocation-' + index"
                              type="checkbox"
                              :checked="
                                allowedCountries.indexOf(item.code) !== -1
                              "
                              :value="item.code"
                              class="cursor-pointer mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            {{ item.name }}
                          </div>
                        </label>
                      </div>
                    </ul>
                  </div>
                </div>
              </template>
            </sw-dropdown>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Hide chatbox from pages</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-button @click="showRestrictedPagesModal"
              >Add new page</sw-button
            >
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Hide chatbox from the following IP address</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-button @click="showRestrictedIPModal">Add new IP</sw-button>
          </div>
        </div>
      </div>
    </div>
    <sw-modal
      v-on:close="closeRestrictedIPModal"
      v-if="restrictedPageModalIsActive"
      size="2xl"
    >
      <template #header> Add new blocked pages </template>
      <template #body>
        <div class="pb-10">
          <div class="text-sm text-gray-600 mb-3">
            <p>
              Add new pages to block the chatbox from showing on your website
            </p>

            <pre class="modal-pre-info-text mb-3 mt-3 border-l-8 border-l-[#e67e22]"> E.g /product/category/example-product</pre>
            <p>No need to add your website url, just the url path is enough</p>
          </div>
          <div class="col-span-12">
            <sw-input
              placeholder="e.g /product/category/product"
              type="text"
              class="w-auto"
              required
            >
            </sw-input>
          </div>
          <sw-button class="mt-5 w-[120px]" size="lg">Save</sw-button>
        </div>
      </template>
    </sw-modal>
     
    <sw-modal
      v-on:close="closeRestrictedPageModal"
      v-if="restrictedIPModalIsActive"
      size="2xl"
    >
      <template #header> Add new blocked pages </template>
      <template #body>
        <div class="pb-10">
          <div class="text-sm text-gray-600 mb-3">
            <p>
              Add new IP address to block the chatbox from showing on your website 
            </p>

            <pre class="modal-pre-info-text mb-3 mt-3 border-l-8 border-l-[#e67e22]"> E.g 172.20.187.3 </pre>
          </div>
          <div class="col-span-12">
            <sw-input
              placeholder="e.g 172.20.187.3 "
              type="text"
              class="w-auto"
              required
            >
            </sw-input>
          </div>
          <sw-button class="mt-5 w-[120px]" size="lg">Save</sw-button>
        </div>
      </template>
    </sw-modal>
     

  </sw-accordion-content>
</template>

<script setup lang="ts">
import {
  SwAccordionContent,
  SwAccordionHeader,
  SwDropdown,
  SwButton,
  SwModal,
  SwInput,
} from "@/global";
import { inject, ref, Ref } from "vue";
import { widgetDataInterFace } from "../../../types";

const restrictedPageModalIsActive = ref(false);
const restrictedIPModalIsActive = ref(false);
const widgetSettings = inject("data") as Ref<widgetDataInterFace>;

const countries = ref(widgetSettings.value.countries);
const restrictedCountries = ref(
  widgetSettings.value.restricted.restrictedCountries
);
const allowedCountries = ref(widgetSettings.value.restricted.allowedCountries);

const restrictedPages = ref(widgetSettings.value.restricted.restrictedPages);
const restrictedIP = ref(widgetSettings.value.restricted.restrictedIP);

function showRestrictedPagesModal() {
  restrictedPageModalIsActive.value = true;
}
function showRestrictedIPModal() {
  restrictedIPModalIsActive.value = true;
}

function closeRestrictedIPModal() {
  restrictedPageModalIsActive.value = false;
}
function closeRestrictedPageModal() {
  restrictedIPModalIsActive.value = false;
}


</script>
