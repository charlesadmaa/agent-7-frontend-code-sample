<template>
  <div class="w-2/3">
    <div class="mb-4 font-bold border-b-[1px] border-b-gray-200 pb-4">
      Widget Settings
    </div>
    <div>
      <sw-vertical-tabs
        v-model="activeTab"
        position="horizontal"
        variant="pills"
      >
        <sw-tab name="setup_instruction" title="Setup Instruction">
          <setup-instruction></setup-instruction>
        </sw-tab>

        <sw-tab name="customization" title="Customization">
          <widget-customization></widget-customization>
        </sw-tab>

        <sw-tab name="contact_information" title="Contact Info.">
          <contact-information></contact-information>
        </sw-tab>

        <sw-tab name="widget_addon" title="Addon">
          <widget-addon></widget-addon>
        </sw-tab>

        <sw-tab name="remove_property" title="Remove Property">
          <remove-widget></remove-widget>
        </sw-tab>
      </sw-vertical-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { SwVerticalTabs, SwTab } from "@/global";
import SetupInstruction from "./components/SetupInstruction.vue";
import WidgetCustomization from "./components/WidgetCustomization/WidgetCustomization.vue";
import ContactInformation from "./components/ContactInformation.vue";
import WidgetAddon from "./components/WidgetAddon.vue";
import RemoveWidget from "./components/RemoveWidget.vue";
import { widgetDataInterFace } from "./types";

const activeTab = ref("setup_instruction");

const data = ref<widgetDataInterFace>({
  propertyId: "c34e1c7e4e0d8bf091f59fc0ef75d800",
  widgetCode:
    '&#x3C;script src="/js/widget.min.js" data-hash="c34e1c7e4e0d8bf091f59fc0ef75d800" data-mode="version-1"&#x3E; &#x3C;/script&#x3E;',
  widgetSettings: {
    theme: [
      {
        id: 1,
        name: "Gray",
        colorCode: "#ccc",
      },
      {
        id: 2,
        name: "Red",
        colorCode: "red",
      },
      {
        id: 2,
        name: "Black",
        colorCode: "#000",
      },
      {
        id: 2,
        name: "Blue",
        colorCode: "blue",
      },
    ],
    activeTheme: {
      id: 1,
      name: "Gray",
      colorCode: "#ccc",
    },
  },
  themeText: {
    data: [
      {
        id: 1,
        value: "Question ? chat with us",
      },
      {
        id: 2,
        value: "2 Question ? chat with us ",
      },
    ],
    active: {
      id: 1,
      value: "Question ? chat with us",
    },
  },
  wellcomeMessage: {
    data: [
      {
        id: 1,
        value: "Sample 1",
      },
      {
        id: 2,
        value: "Sample Question 334 ",
      },
    ],
    active: {
      id: 1,
      value: "Sample 1",
    },
  },
  backgroundImage: {
    data: [
      {
        id: 1,
        name: "Background 1",
        src: "https://picsum.photos/200",
      },
      {
        id: 2,
        name: "Background 2",
        src: "https://picsum.photos/200",
      },
      {
        id: 3,
        name: "Background 2",
        src: "https://picsum.photos/200",
      },
    ],
    active: {
      id: 3,
      name: "Background 3",
      src: "https://picsum.photos/200",
    },
  },
  visibility: {
    reverseChatBoxPosition: true,
    showOnDesktop: true,
    showOnTablet: true,
    showOnMobile: false,
    showRepProfileImage: true,
  },
  behavior: {
    hideIfAway: false,
    askForEmail: true,
    askForPhone: true,
    forceVisitorIdentity: false,
    enableMediaUpload: false,
    showReadReceipts: false,
    deleteChatHistoryAfterOneDay: false,
    showVisitorMessageRealTime: false,
  },
  security: {
    lockDomain: false,
  },
  countries: [
    {
      name: "Afghanistan",
      code: "AF",
    },
    {
      name: "Aland Islands",
      code: "AX",
    },
    {
      name: "Albania",
      code: "AL",
    },
    {
      name: "Algeria",
      code: "DZ",
    },
    {
      name: "American Samoa",
      code: "AS",
    },
    {
      name: "Andorra",
      code: "AD",
    },
    {
      name: "Angola",
      code: "AO",
    },
    {
      name: "Anguilla",
      code: "AI",
    },
  ],
  restricted: {
    restrictedCountries: ["AF", "DZ"],
    allowedCountries: ["AX", "AS"],
    restrictedPages: [],
    restrictedIP: []
  },
});

provide("data", data);
</script>
