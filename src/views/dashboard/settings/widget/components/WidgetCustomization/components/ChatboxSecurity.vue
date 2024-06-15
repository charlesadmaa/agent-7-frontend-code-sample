<template>
  <sw-accordion-header>Security</sw-accordion-header>
  <sw-accordion-content>
    <div class="p-5">
      <div class="flex items-center justify-end">
        <div class="w-[50%]"> Lock chatbox to domain and subdomain only </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="security.lockDomain"
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
const security = ref(widgetSettings.value.security);

// function setBackgroundImage(item: backgroundImageType) {
//   activeBackgroundImage.value = item;
// }
</script>
