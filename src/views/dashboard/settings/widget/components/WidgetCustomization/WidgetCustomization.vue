<template>
  <div>
    <h2 class="text-3xl font-bold">Customization</h2>

    <div class="mt-12">
      <h2 class="font-bold text-base">Customize Widget</h2>
      <p class="text-sm mt-2 text-gray-500">
        Customize the look and feel of your widget to match your brand
      </p>
    </div>
  </div>
  <div class="mt-12">
    <sw-accordion :openFirstItem="false">
      <sw-accordion-panel>
        <chatbox-appearance></chatbox-appearance>
      </sw-accordion-panel>
      <sw-accordion-panel>
        <chatbox-visibility></chatbox-visibility>
      </sw-accordion-panel>
      <sw-accordion-panel>
        <chatbox-behaviour></chatbox-behaviour>
      </sw-accordion-panel>
      <sw-accordion-panel>
        <chatbox-restrictions></chatbox-restrictions>
      </sw-accordion-panel>
      <sw-accordion-panel>
        <chatbox-security></chatbox-security>
      </sw-accordion-panel>
    </sw-accordion>
  </div>
</template>

<script setup lang="ts">
import { SwAccordion, SwAccordionPanel } from "@/global";
import ChatboxAppearance from "./components/ChatboxAppearance.vue";
import ChatboxVisibility from "./components/ChatboxVisibility.vue";
import ChatboxBehaviour from "./components/ChatboxBehaviour.vue";
import ChatboxRestrictions from "./components/ChatboxRestrictions.vue";
import ChatboxSecurity from "./components/ChatboxSecurity.vue";
</script>
