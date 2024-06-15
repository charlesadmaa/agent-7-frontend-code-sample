<template>
  <sw-accordion-header>Behaviour</sw-accordion-header>
  <sw-accordion-content>
    <div class="p-5">
      <div class="flex items-center justify-end">
        <div class="w-[50%]">Hide the chatbox if all operators are away</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="behavior.hideIfAway"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Ask visitors for their email address</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="behavior.askForEmail"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Ask visitors for their phone number</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="behavior.askForPhone"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">
          Force visitors to identify themselves (Email / Phone)
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="behavior.forceVisitorIdentity"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">
          Enable Files and audio recording to be sent on chatbox
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="behavior.enableMediaUpload"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Show read receipt (Operator privacy mode)</div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="behavior.showReadReceipts"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">
          Store chat records for more than 30days (Automatically deletes on user
          end after 24hours)
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="behavior.deleteChatHistoryAfterOneDay"
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">
          Operator can see what visitors write real time
        </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              v-model="behavior.showVisitorMessageRealTime"
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
const behavior = ref(widgetSettings.value.behavior);

// function setBackgroundImage(item: backgroundImageType) {
//   activeBackgroundImage.value = item;
// }
</script>
