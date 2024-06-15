<template>
  <div>
    <h2 class="text-3xl font-bold">Remove Widget</h2>
  </div>

  <div class="mt-12">
    <div>
      <h2 class="font-bold text-base">Remove Widget</h2>
      <p class="text-sm mt-2 text-gray-500"></p>
      <div
        id="alert-border-2"
        class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
        role="alert"
      >
        <info-icon class="flex-shrink-0 w-4 h-4" />
        <div class="ms-3 text-sm font-medium">
          Remove website / delete widget, this is a danger zone, proceed with
          caution
        </div>
      </div>
    </div>

    <div class="w-full max-w-[25rem] mt-10">
      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Delete website & Widget</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-button color="red" @click="showConfirmationDialog"
              >Delete Property</sw-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <sw-confirmation-dialog
    @continueDialogAction="deleteWidget()"
    ref="confirmationDialog"
  ></sw-confirmation-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SwButton, InfoIcon, SwConfirmationDialog } from "@/global";

const confirmationDialog = ref();

function showConfirmationDialog() {
  confirmationDialog.value.showDialog("Are you sure you want to continue ? this action is irrevocable ");
}

function deleteWidget(){

}
</script>
