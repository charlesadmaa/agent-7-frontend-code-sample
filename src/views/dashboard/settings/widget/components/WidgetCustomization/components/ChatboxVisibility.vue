<template>
  <sw-accordion-header>Visibility</sw-accordion-header>
  <sw-accordion-content>
    <div class="p-5">
      <div class="flex items-center justify-end">
        <div class="w-[50%]">Reverse chatbox position</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="visibility.reverseChatBoxPosition"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Show on Desktop</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="visibility.showOnDesktop"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Show on Tablet</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="visibility.showOnTablet"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Show on Mobile</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="visibility.showOnMobile"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Show chat representative profile image</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="visibility.showRepProfileImage"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>
    </div>
  </sw-accordion-content>
</template>

<script setup lang="ts">
import { SwAccordionContent, SwAccordionHeader, SwToggle } from "@/global";
import { inject, ref, Ref } from "vue";
import { widgetDataInterFace } from "../../../types";

const widgetSettings = inject("data") as Ref<widgetDataInterFace>;
const visibility = ref(widgetSettings.value.visibility);

// function setBackgroundImage(item: backgroundImageType) {
//   activeBackgroundImage.value = item;
// }
</script>
