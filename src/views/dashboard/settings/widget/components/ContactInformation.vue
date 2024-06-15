<template>
  <div>
    <h2 class="text-3xl font-bold">Contact Information</h2>
  </div>
  <div class="mt-12">
    <div>
      <h2 class="font-bold text-base">Contact Information</h2>
      <p class="text-sm mt-2 text-gray-500">
        Update your public contact information so that visitors have others ways
        to directly contact you
      </p>
    </div>

    <div class="w-full mt-10">
      <div class="flex items-center">
        <div class="w-[50%]"> 
            <div> Email </div>  
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-input></sw-input>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="w-[50%]"> 
            <div> Phone </div>  
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-input></sw-input>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="w-[50%]"> 
            <div> Messenger </div>  
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-input></sw-input>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="w-[50%]"> 
            <div> Telegram </div>  
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-input></sw-input>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="w-[50%]"> 
            <div> Twitter </div>  
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-input></sw-input>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="w-[50%]"> 
            <div> Whatsapp </div>  
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-input></sw-input>
          </div>
        </div>
      </div> 

      <div class="flex items-center mt-4">
        <div class="w-[50%]"> 
            <div> Instagram </div>  
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-input></sw-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject, Ref } from "vue";
import { ClipboardIcon, CheckIcon, SwInput } from "@/global";
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
  }
  4;
  return "Copied!";
});

function copyWidgetCode() {
  copiedWidgetCodeToClipboard.value = false;
  setTimeout(() => {
    copiedWidgetCodeToClipboard.value = true;
  }, 3000);
}
</script>
