<template>
  <sw-modal
    v-if="showConfirmationDialog"
    size="md"
    :onClose="hideDialog"
    :notEscapable="false"
    :persistent="false"
    :showHeader="false"
  >
    <template #body>
      <div class="p-4 md:p-5 text-center">
       <info-icon  class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200 fill-red-600"/>
        <div class="mb-10 mt-10 text-lg font-normal text-gray-500 dark:text-gray-400">
          {{ dialogMessage }}
        </div>
        <sw-button
          :loading="loadingConfirmationDialog"
          :disabled="loadingConfirmationDialog"
          loadingPosition="prefix"
          :combineWithPrefix="true"
          size="sm"
          type="button"
          color="red"
          v-on:click="$emit('continueDialogAction')"
          class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
        >
          {{ dialogConfirmationText }}
        </sw-button>
        <sw-button
        size="sm"
        color="alternative"

          :disabled="loadingConfirmationDialog"
          @click="hideDialog"
          type="button"
          class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {{$t('teamMembers.deleteSelectedItemModal.action.cancel')}}
        </sw-button>
      </div>
    </template>
  </sw-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SwModal, SwButton } 
from "@/global";

import { useI18n } from 'vue-i18n';
import InfoIcon from "../SwIcons/InfoIcon.vue";

const {t} = useI18n({})

const dialogMessage = ref<string | undefined>(
  t("teamMembers.deleteSelectedItemModal.title")
);
const dialogConfirmationText = ref<string | undefined>(t("teamMembers.deleteSelectedItemModal.action.continue"));
let showConfirmationDialog = ref<boolean>(false);
let loadingConfirmationDialog = ref<boolean>(false);

const showDialog = (message?: string, actionValue?: string): void => {
  dialogMessage.value = message ? message : dialogMessage.value;
  dialogConfirmationText.value = actionValue
    ? actionValue
    : dialogConfirmationText.value;
  showConfirmationDialog.value = true;
};

const hideDialog = (): void => {
  loadingConfirmationDialog.value = false;
  showConfirmationDialog.value = false;
};

const dialogIsLoading = (option?: boolean): void => {
  loadingConfirmationDialog.value = !option ? true : option;
};

defineExpose({
  showDialog,
  hideDialog,
  dialogIsLoading,
});
</script>
