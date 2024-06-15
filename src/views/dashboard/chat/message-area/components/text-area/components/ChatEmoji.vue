<template>
  <div class="mr-3 mt-3 mb-3 text-gray-900 text-[15px]">
    <sw-dropdown
      buttonclass="border-0 px-0 py-0"
      button-color="alternative"
      :show-drop-down-arrow="false"
      :closeInside="false"
      placement="top"
    >
      <template #title>
        <emoji-icon class="w-[25px] h-[25px]" />
      </template>
      <template #default>
        <div class="relative">
          <EmojiPicker
            :disableSkinTones="true"
            :displayRecent="true"
            :native="true"
            @select="onSelectEmoji"
          />
        </div>
      </template>
    </sw-dropdown>
  </div>
</template>

<script setup lang="ts">
import EmojiPicker from "vue3-emoji-picker";
import "vue3-emoji-picker/css";

import { EmojiIcon, SwDropdown } from "@/global";

const emit = defineEmits(["insert:emoji"]);

function onSelectEmoji(emoji: any) {
  emit("insert:emoji", emoji.i);
}
</script>
