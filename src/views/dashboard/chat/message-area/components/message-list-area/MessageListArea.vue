<template>
  <div class="flex h-full flex-grow-1 items-end overflow-hidden">
    <PerfectScrollbar ref="scrollbar" class="scrollarea">
      <div
        v-for="(item, index) in msg"
        :class="activeOperatorClass(item.userId)"
        :key="index"
      >
        <div class="ml-2 mr-4">
          <img
            class="w-[30px] h-[30px] max-w-[30px] rounded-full"
            :src="item.avatar"
          />
        </div>
        <div class="flex flex-col">
          <div class="flex items-center">
            <div :class="activeOperatorNameClass(item.userId)">
              {{ item.name }}
            </div>
            <div class="text-[12px] text-gray-500 pl-3">
              {{ item.date }}
            </div>
          </div>

          <div v-if="item.isDeleted">
            <div class="text-sm italic">Message removed</div>
          </div>
          <div v-else>
            <div v-if="item.type == 'image'" class="text-gray-900">
              <div class="mt-4" @click="enlargeImage(item.message)">
                <img
                  class="object-cover object-center rounded-md"
                  :src="item.message"
                  :alt="item.message"
                  width="150px"
                  height="150px"
                />
              </div>
            </div>
            <div v-else class="text-gray-900">
              {{ item.message }}
            </div>
          </div>

          <div>
            <sw-button
              v-if="item.userId == activeOperator.userId && !item.isDeleted"
              @click="deleteChatRecord(item.id)"
              class="w-auto p-0 invisible group-hover/message-items:visible"
              color="transparent"
            >
              <span class="text-red-400 text-xs hover:text-red-700"
                >Delete</span
              >
            </sw-button>
          </div>
        </div>
      </div>
    </PerfectScrollbar>
    <sw-modal
      v-on:close="closeImagePreviewModal"
      size="full"
      class="!p-0"
      v-if="imageModalIsActivate"
    >
      <template #body>
        <div
          class="flex h-full flex-col justify-between m-auto w-[600px] text-center"
        >
          <div class="mt-20">
            <img class="w-[300px] m-auto" :src="activateImageUrl" />
          </div>
          <div class="text-center mt-40">
            <sw-button class="w-auto" color="gray">
              <div class="flex">
                <div class="align-baseline mr-2">
                  <download-icon class="w-[20px] h-[20px]" />
                </div>
                <div>Download</div>
              </div>
            </sw-button>
          </div>
        </div>
      </template>
    </sw-modal>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, Ref, inject, watch } from "vue";
import { SwButton, SwModal } from "@/global";
import { initDropdowns } from "flowbite";
import { activeOperatorInterface, messageInterFace } from "../../../types";
import { msgAddedToListEventStore } from "@/store/MsgAddedToListEventStore";

const msg = inject("msg") as Ref<messageInterFace[]>;
const activeOperator = inject("activeOperator") as activeOperatorInterface;
const scrollbar = ref();

const getEventMsg = msgAddedToListEventStore();

getEventMsg.$onAction(() => {
  updateMessageAreaScrollBar();
});

onMounted(() => {
  updateMessageAreaScrollBar();
  initDropdowns();
});

function deleteChatRecord(messageId: number) {
  console.log(messageId);
  msg.value.map((item: messageInterFace) => {
    if (item.id === messageId) {
      item.isDeleted = true;
      return; // Stop loop here no need to look further
    }
  });
  nextTick(() => {
    scrollbar.value.ps.update();
  });
}

const activeOperatorClass = (userId: number) => {
  const defaultClass = "flex flex-row px-5 pt-5 pb-5 group/message-items";
  return activeOperator.userId == userId
    ? `${defaultClass} border-l border-l-2 border-primary-500`
    : defaultClass;
};

const activeOperatorNameClass = (userId: number) => {
  const defaultClass = "font-bold text-sm";
  return activeOperator.userId != userId
    ? `${defaultClass} text-primary-500`
    : defaultClass;
};

const activateImageUrl = ref("");
const imageModalIsActivate = ref(false);

function enlargeImage(imageUrl: string) {
  activateImageUrl.value = imageUrl;
  imageModalIsActivate.value = true;
}

function closeImagePreviewModal() {
  imageModalIsActivate.value = false;
}

function updateMessageAreaScrollBar() {
  //console log ps before add and afger add
  // console log element before add and after add, watch out for the height change and see if any needs updating

  nextTick(() => {
    scrollbar.value.ps.element.scrollTop =
      scrollbar.value.ps.element.scrollHeight;
    scrollbar.value.ps.update();
  });
}
</script>

<style>
.scrollarea {
  position: relative;
  height: calc(100vh - 275px); /* or max-height: 400px; */
}
</style>
