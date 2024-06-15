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
        <gif-icon class="w-[25px] h-[25px]" />
      </template>
      <template #default>
        <div
          class="z-10 px-3 h-[300px] pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700"
        >
          <div class="pt-3 pb-2">
            <label for="input-group-search" class="sr-only">Search</label>
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
                <div class="grid grid-cols-3 gap-3 h-[200px] overflow-x-auto">
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
</template>

<script setup lang="ts">
import { ref, Ref, inject } from "vue";
import { GifIcon, SwDropdown } from "@/global";
import { useImageUrl } from "@/utils/helpers";
import { messageInterFace } from "@/views/dashboard/chat/types";
import { msgAddedToListEventStore } from "@/store/MsgAddedToListEventStore";

const msg = inject("msg") as Ref<messageInterFace[]>;

const { getImageUrl } = useImageUrl();
const imageUrlEx1 = getImageUrl("profile-picture-1.jpg");
const imageUrlEx2 = getImageUrl("profile-picture-3.jpg");


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

const customEvent = msgAddedToListEventStore();

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
  customEvent.addEventMessage("update:scrollbar");
}

</script>
