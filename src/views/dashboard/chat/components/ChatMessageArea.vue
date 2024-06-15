<template>
  <section
    id="secondary-sidenav"
    class="w-[50%] h-[100vh] border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform left-0 top-0 transform-none"
  >
    <div>
      <div class="mt-2 mb-2 pl-4 pr-4 flex justify-between">
        <h5 class="font-bold text-gray-900 text-lg">
          {{ activeOperator.name }}
        </h5>
        <button>
          <cancel-icon></cancel-icon>
        </button>
      </div>

      <div
        class="flex item-center border-gray-100 text-sm font-medium pb-4 pl-4 pr-4 h-[30px] border-b hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300 text-gray-400 hover:text-gray-600 cursor-pointer"
      >
        Chat on website • alawi.ng Chat on website • alawi.ng
        <arrowdown-icon></arrowdown-icon>
      </div>
    </div>

    <div class="flex flex-col justify-between h-[calc(100%-90px)]">
      <div class="flex h-full flex-grow-1 items-end overflow-hidden">
        <PerfectScrollbar ref="scrollbar" class="scrollarea">
          <div
            :class="activeOperatorClass(item.userId)"
            v-for="(item, index) in msg"
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
                  @click="deleteChatRecord(item.id)"
                  v-if="item.userId == activeOperator.userId && !item.isDeleted"
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
      </div>
      <div
        :class="textAreaClass"
        @focusout="removeFocusOnTextBox"
        @focusin="focusChatMessageTextBox"
      >
        <div class="flex flex-row mb-2">
          <div
            class="mr-3 mt-3 mb-3 text-gray-900 text-[15px] border-b border-gray-900 border-b-2"
          >
            Chat
          </div>
          <div class="mr-3 mt-3 mb-3 text-gray-600 text-[15px] cursor-pointer">
            Email
          </div>
          <div class="mr-3 mt-3 mb-3 text-gray-600 text-[15px] cursor-pointer">
            SMS
          </div>
          <div class="mr-3 mt-3 mb-3 text-gray-600 text-[15px] cursor-pointer">
            Comment
          </div>
        </div>
        <div>
          <!--           
          <span contenteditable placeholder="Enter your message" class="block w-full overflow-hidden resize min-h-[40px] leading-[20px]"></span>
           -->

          <sw-textarea
            :canGrow="true"
            placeholder="Enter your message"
            :rows="1"
            autocomplete="off"
            class="rounded-md border-0 bg-white round min-h-[47px] focus:ring-transparent resize-none overflow-y-auto pl-0 pt-[5px] pb-[10px]"
          />

          <!-- <textarea
          placeholder="Enter your message"
            class="rounded-md border-0 bg-white round h-[30px] focus:ring-transparent resize-none overflow-hidden pt-[7px] pb-[10px]"
            ref="chatMessageTextBox"
            @keyup="resizeChatAreaHeight"
          ></textarea> -->
        </div>
        <div class="flex flex-row justify-end items-center">
          <div class="mr-3 mt-3 mb-3 text-gray-900 text-[15px]">
            <sw-dropdown
              buttonclass="border-0 px-0 py-0"
              button-color="alternative"
              :show-drop-down-arrow="false"
              :closeInside="false"
              placement="top"
            >
              <template #title>
                <gif-icon class="w-[25px] h-[25px]" />
              </template>
              <template #default>
                <div
                  class="z-10 px-3 h-[300px] pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700"
                >
                  <div class="pt-3 pb-2">
                    <label for="input-group-search" class="sr-only"
                      >Search</label
                    >
                    <div class="relative">
                      <div
                        class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
                      >
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="input-group-search"
                        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search keywords..."
                      />
                    </div>

                    <div>
                      <div v-if="!showGifResult">
                        <div
                          class="suggested mb-3 text-sm font-semibold text-gray-600 mt-3"
                        >
                          Suggested
                        </div>
                        <ul class="mt-3 mb-3">
                          <li
                            @click="searchGifImages(item)"
                            v-for="(item, index) in gifSearchSuggestion"
                            :key="index"
                            class="text-[13px] inline-block mr-2 pr-2 pl-2 h-[22px] mb-[4px] rounded-md text-gray-500 hover:text-primary-400 cursor-pointer hover:underline bg-gray-200"
                          >
                            {{ item }}
                          </li>
                        </ul>
                      </div>

                      <div v-if="showGifResult">
                        <div
                          class="suggested mb-3 text-sm font-semibold text-gray-600 mt-3"
                        >
                          Showing Search Result for: {{ gifSearchTerm }}
                        </div>
                        <div
                          class="grid grid-cols-3 gap-3 h-[200px] overflow-x-auto"
                        >
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx2)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx2" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                          <div
                            @click="sendGifImage(imageUrlEx1)"
                            class="cursor-pointer"
                          >
                            <img :src="imageUrlEx1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </sw-dropdown>
          </div>
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
          <div class="mr-3 mt-3 mb-3 text-gray-900 text-[15px]">
            <sw-dropdown
              buttonclass="border-0 px-0 py-0"
              button-color="alternative"
              :show-drop-down-arrow="false"
              :closeInside="false"
              placement="top"
            >
              <template #title>
                <attach-icon class="w-[25px] h-[25px]" />
              </template>
              <template #default>
                <div class="relative block">
                  <label v-bind="getRootProps()" :class="dropZoneClass">
                    <div
                      class="flex flex-col justify-center items-center pt-5 pb-6"
                    >
                      <p class="mb-2 text-sm text-red-500 dark:text-gray-400">
                        {{ fileDropError }}
                      </p>
                      <svg
                        aria-hidden="true"
                        class="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF or PDF (MAX. 5MB)
                      </p>
                    </div>
                    <input
                      v-bind="getInputProps()"
                      @change="listenForFileupload"
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                    />
                  </label>
                </div>
              </template>
            </sw-dropdown>
          </div>
          <div class="mr-3 mt-3 mb-3">
            <button
              class="w-[30px] h-[30px] bg-gray-300 rounded-full flex justify-center items-center mb-[8px]"
            >
              <send-icon class="w-[1.25rem] h-[1.25rem]" />
            </button>
          </div>
        </div>
      </div>
    </div>
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
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch, nextTick } from "vue";
import {
  ArrowdownIcon,
  CancelIcon,
  SendIcon,
  AttachIcon,
  EmojiIcon,
  GifIcon,
  SwDropdown,
  SwModal,
  SwButton,
  DownloadIcon,
  SwTextarea,
} from "@/global";

import { useImageUrl } from "@/utils/helpers";
import EmojiPicker from "vue3-emoji-picker";
import { initDropdowns } from "flowbite";
import { useDropzone } from "vue3-dropzone";
import { twMerge } from "tailwind-merge";

import "vue3-emoji-picker/css";
import { PerfectScrollbarExpose } from "vue3-perfect-scrollbar";

onMounted(() => {
  initDropdowns();
});

const { getImageUrl } = useImageUrl();
const imageUrlEx1 = getImageUrl("profile-picture-1.jpg");
const imageUrlEx2 = getImageUrl("profile-picture-3.jpg");

const activeOperator = {
  userId: 2,
  name: "Jane Doe",
  country: "ng",
  avatar: "",
};
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

interface messageInterFace {
  id: number;
  userId: number;
  name: string;
  avatar: string;
  date: string;
  type: string;
  message: string;
  isDeleted?: boolean;
}

//Add joined chat to object
const msg = ref<messageInterFace[]>([
  {
    id: 1,
    userId: 2,
    name: "Jane Deo the first",
    avatar: imageUrlEx2,
    date: "06:39",
    type: "message",
    message: "Lorem ipsum dolor sit amet consectetu",
    isDeleted: false,
  },
  {
    id: 17,
    userId: 2,
    name: "Jane Deo",
    avatar: imageUrlEx2,
    date: "06:39",
    type: "message",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
    isDeleted: false,
  },
  {
    id: 2,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "07:12",
    type: "message",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae.",
    isDeleted: false,
  },

  {
    id: 3,
    userId: 2,
    name: "Jane doe",
    avatar: imageUrlEx2,
    date: "01:39",
    type: "message",
    message:
      "onsectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },

  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel the last",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
]);

function calcHeight(value: string) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight < 120 ? newHeight : 120;
}

const chatMessageTextBox = ref();

function focusChatMessageTextBox() {
  // chatMessageTextBox.value.focus();
  addFocusToMessageTextBox();
}

const textAreaClass = ref(
  "bg-white mx-4 border border-gray-300 px-4 rounded-md"
);
function addFocusToMessageTextBox() {
  textAreaClass.value = "bg-white mx-4 border px-4 rounded-md border-blue-500";
}

function removeFocusOnTextBox() {
  textAreaClass.value = "bg-white mx-4 border border-gray-300 px-4 rounded-md";
}

function onSelectEmoji(emoji: any) {
  chatMessageTextBox.value.value += emoji.i;
  console.log(emoji.i);
  /*
    // result
    { 
        i: "😚", 
        n: ["kissing face"], 
        r: "1f61a", // with skin tone
        t: "neutral", // skin tone
        u: "1f61a" // without tone
    }
    */
}

const options = reactive({
  multiple: false,
  onDrop,
  accept: ".jpg,.png,.gif,.pdf",
});

const { getRootProps, getInputProps, isDragReject } = useDropzone(options);
const fileDropError = ref();

// acceptFiles, rejectReasons
function onDrop(files: File[] | null, rejectReasons: any) {
  if (rejectReasons) {
    fileDropError.value = rejectReasons[0].errors[0].message;
  }
  console.log(files);
}

const dropZoneClass = ref(
  "w-[300px] flex flex-col justify-center items-center h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
);

watch(
  [isDragReject, fileDropError],
  ([isDragRejectValue, fileDropErrorValue]) => {
    if (
      isDragRejectValue ||
      !fileDropErrorValue ||
      fileDropErrorValue.length == 0
    ) {
      dropZoneClass.value = twMerge(dropZoneClass.value, "border-red-500");
      removeFileDropErrorMessage();
    }
    if (
      !isDragRejectValue ||
      (fileDropErrorValue && fileDropErrorValue.length > 0)
    ) {
      dropZoneClass.value = twMerge(dropZoneClass.value, "border-gray-300");
    }
  }
);

function listenForFileupload() {
  console.log("file changed");
}

function removeFileDropErrorMessage() {
  setTimeout(() => {
    fileDropError.value = "";
  }, 5000);
}

const gifSearchSuggestion = ref<string[]>([
  "Cat",
  "Dog",
  "Smile",
  "Be Happy",
  "Good job",
  "prices",
  "Support",
  "Chat",
  "my money",
  "work",
  "i am a boss",
  "hello",
  "sound",
  "i don't know",
  "not bad",
  "birthday",
  "thanks",
]);

const gifSearchResultIsLoading = ref(false);
const gifSearchTerm = ref("false");

const showGifResult = ref(false);
function searchGifImages(term: string) {
  gifSearchTerm.value = term;
  gifSearchResultIsLoading.value = true;
  setTimeout(() => {
    gifSearchResultIsLoading.value = false;
    showGifResult.value = true;
  }, 100);
  console.log(term);
}

function sendGifImage(imageUrl: string) {
  msg.value.push({
    id: 123332,
    userId: 2,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "image",
    message: imageUrl,
  });
  updateMessageAreaScrollBar();
  console.log(imageUrl);
}

const activateImageUrl = ref("");
const imageModalIsActivate = ref(false);

function enlargeImage(imageUrl: string) {
  activateImageUrl.value = imageUrl;
  imageModalIsActivate.value = true;
}

function closeImagePreviewModal() {
  imageModalIsActivate.value = false;
}

//const scrollbar = ref();

const scrollbar = ref<PerfectScrollbarExpose>();

function deleteChatRecord(messageId: number) {
  console.log(messageId);
  msg.value.map((item) => {
    if (item.id === messageId) {
      item.isDeleted = true;
      return; // Stop loop here no need to look further
    }
  });
  nextTick(() => {
    scrollbar.value.ps.update();
  });
}

//scrollbar.value
onMounted(() => {
  updateMessageAreaScrollBar();
});

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
