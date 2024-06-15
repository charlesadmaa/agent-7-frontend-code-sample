<template>
  <div>
    <h2 class="text-3xl font-bold">Setup Instruction</h2>
  </div>
  <div class="mt-12">
    <div>
      <h2 class="font-bold text-base">Property ID</h2>
      <p class="text-sm mt-2 text-gray-500">
        Unique to your website domain name
      </p>
    </div>

    <div class="w-full max-w-[25rem] mt-5">
      <div class="relative">
        <input
          type="text"
          class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled
          readonly
          :value="data.propertyId"
        />
        <button
          @click="copyPropertyId"
          class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
        >
          <span class="inline-flex items-center">
            <clipboard-icon class="me-1.5" v-show="copiedPropertyIdToClipboard" />
            <check-icon class="me-1.5" v-show="!copiedPropertyIdToClipboard" />
            <span class="text-xs font-semibold">{{ propertyIdActionText }}</span>
          </span>
        </button>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="font-bold text-base">Widget Code</h2>
      <p class="text-sm mt-2 text-gray-500">
        Place this code before the closing body tag of your website
      </p>
    </div>

    <div class="w-full max-w-[25rem] mt-5">
      <div class="w-full max-w-lg">
        <div class="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-auto">
          <span
            id="code-block"
            class="text-sm text-gray-500 dark:text-gray-400 whitespace-pre break-all"
            v-html="data.widgetCode"
          >
          </span>
        </div>
        <div class="text-right mt-4">
          <button
            @click="copyWidgetCode"
            class="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
          >
            <span class="inline-flex items-center">
              <clipboard-icon
                class="me-1.5"
                v-show="copiedWidgetCodeToClipboard"
              />
              <check-icon
                class="me-1.5"
                v-show="!copiedWidgetCodeToClipboard"
              />
              <span class="text-xs font-semibold">{{ widgetCodeActionText }}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, Ref } from "vue";
import { ClipboardIcon, CheckIcon } from "@/global";
import { widgetDataInterFace } from "../types";

const data = inject("data") as Ref<widgetDataInterFace>;

const copiedPropertyIdToClipboard = ref<boolean>(true);
const copiedWidgetCodeToClipboard = ref<boolean>(true);

function copyPropertyId() {
  copiedPropertyIdToClipboard.value = false;
  setTimeout(() => {
    copiedPropertyIdToClipboard.value = true;
  }, 3000);
}

const propertyIdActionText = computed(() => {
  if (copiedPropertyIdToClipboard.value) {
    return "Copy";
  }
  return "Copied!";
});

const widgetCodeActionText = computed(() => {
  if (copiedWidgetCodeToClipboard.value) {
    return "Copy code";
  }4 
  return "Copied!";
});

function copyWidgetCode() {
  copiedWidgetCodeToClipboard.value = false;
  setTimeout(() => {
    copiedWidgetCodeToClipboard.value = true;
  }, 3000);
}

</script>
