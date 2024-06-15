<template>
  <div>
    <div class="ml-4 mb-4 text-gray-500 text-sm font-bold">Client</div>
    <div class="bg-white ml-3 mr-3 rounded-md">
      <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <div class="ml-2 mr-4">
          <sw-tooltip theme="dark" nudgeX="5" :arrowOverflow="true">
            <template #trigger>
              <link-icon color="#C6CBD1" class="w-[20px]" />
            </template>
            <template class="relative" #content>
              <div class="text-center">
                Client <br />
                Owner
              </div>
            </template>
          </sw-tooltip>
        </div>
        <div class="flex align-middle items-center ml-[5px]">
          <sw-dropdown
            buttonclass="border-0 px-0 ring-none focus:ring-transparent bg-transparent hover:bg-gray-200 text-xs font-medium me-2 px-2.5 py-0.5  dark:bg-gray-700 dark:text-gray-300"
            button-color="alternative"
            :show-drop-down-arrow="true"
            :closeInside="false"
            placement="bottom"
            ref="clientOwnerDropdown"
          >
            <template #title>
              <div class="flex items-center">
                <div>
                  <img class="w-6 h-6 rounded-full mr-3" :src="activeClientOwner.avatar" />
                </div>
                <div class="text-sm text-gray-600">{{activeClientOwner.name}}</div>
              </div>
            </template>
            <template #default>
              <div
                class="z-10 px-0 h-auto bg-white rounded-lg shadow w-[300px] dark:bg-gray-700"
              >
                <div class="p-2">
                  <sw-input
                    type="text"
                    name="email"
                    id="users-search"
                    class="bg-white h-[35px] text-gray-900 !border-gray-200 sm:text-sm rounded-lg focus:border-primary-500 block w-full"
                    placeholder="Search"
                  >
                  </sw-input>
                </div>
                <div class="block">
                  <div v-for="(item, index) in clientOwner" :key="index" @click="setClientOwner(item)" class="mb-2 last:mb-0">
                    <div
                      class="inline-block border-0 w-full p-2 pl-4 hover:bg-gray-200 text-gray-800 text-xs font-medium dark:bg-gray-700"
                    >
                      <div class="flex items-center">
                        <div>
                          <img
                            class="w-6 h-6 rounded-full mr-3"
                            :src="item.avatar"
                          />
                        </div>
                        <div>{{ item.name }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </sw-dropdown>
        </div>
      </div>

      <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <div class="ml-2 mr-4">
          <sw-tooltip theme="dark" nudgeX="5" :arrowOverflow="true">
            <template #trigger>
              <tag-icon color="#C6CBD1" class="w-[20px]" />
            </template>
            <template class="relative" #content> Tag </template>
          </sw-tooltip>
        </div>
        <div class="text-sm text-gray-600 w-full">
          <div class="bg-white pt-[5px] pl-[5px]">
            <span
              id="badge-dismiss-default"
              v-for="(item, index) in chatTags"
              :key="index"
              class="inline-flex mb-2 items-center px-2 py-1 rounded-full me-2 text-xs font-medium text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-300"
            >
              {{ item.name }}
              <sw-button
                color="transparent"
                type="button"
                class="inline-flex items-center p-1 ms-2 text-xs text-gray-400 bg-transparent rounded-sm"
                data-dismiss-target="#badge-dismiss-default"
                aria-label="Remove"
                @click="removeTag(item.id, index)"
              >
                <svg
                  class="w-2 h-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Remove tag</span>
              </sw-button>
            </span>
          </div>
          <sw-input
            v-on:keyup.enter.stop="addNewTag"
            v-on:keyup.stop="deleteTagOnBackSpace"
            class="rounded-none border-0 bg-white round h-[30px] focus:ring-transparent"
            placeholder="Add tags..."
          />
        </div>
      </div>

      <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <div class="ml-2 mr-4">
          <sw-tooltip theme="dark" nudgeX="5" :arrowOverflow="true">
            <template #trigger>
              <category-icon color="#C6CBD1" class="w-[20px]" />
            </template>
            <template class="relative" #content>
              <div class="text-center">
                Client <br />
                Category
              </div>
            </template>
          </sw-tooltip>
        </div>
        <div class="flex align-middle items-center ml-[5px]">
          <sw-dropdown
            buttonclass="border-0 px-0 hover:bg-cyan-400 ring-none py-0 bg-cyan-200 text-cyan-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
            button-color="alternative"
            :show-drop-down-arrow="false"
            :closeInside="true"
            placement="bottom"
          >
            <template #title>
              <span>New</span>
            </template>
            <template #default>
              <div
                class="z-10 px-3 h-auto pt-3 pb-3 bg-white rounded-lg shadow w-40 dark:bg-gray-700"
              >
                <div class="block">
                  <div class="mb-2">
                    <div
                      class="inline-block border-0 hover:bg-green-400 ring-none bg-green-200 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700"
                    >
                      Completed
                    </div>
                  </div>
                  <div class="mb-2">
                    <div
                      class="inline-block border-0 hover:bg-gray-400 ring-none bg-gray-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                    >
                      Not our Client
                    </div>
                  </div>
                  <div class="mb-2">
                    <div
                      class="inline-block border-0 hover:bg-yellow-400 ring-none bg-yellow-200 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                    >
                      Contact Later
                    </div>
                  </div>
                  <div class="mb-2">
                    <div
                      class="inline-block border-0 hover:bg-red-400 ring-none bg-red-200 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"
                    >
                      Unseccesfull
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </sw-dropdown>
        </div>
      </div>

      <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <div class="ml-2 mr-4">
          <sw-tooltip theme="dark" nudgeX="5" :arrowOverflow="true">
            <template #trigger>
              <comment-icon color="#C6CBD1" class="w-[20px]" />
            </template>
            <template class="relative" #content>
              <div class="text-center">
                Client <br />
                Category
              </div>
            </template>
          </sw-tooltip>
        </div>
        <div class="w-full ml-[5px]">
          <sw-textarea
            :canGrow="true"
            class="rounded-md border-0 bg-white round h-[30px] focus:ring-transparent resize-none overflow-hidden pt-[5px] pb-[10px]"
            placeholder="Add comment..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from "vue";
import {
  LinkIcon,
  TagIcon,
  CommentIcon,
  CategoryIcon,
  SwButton,
  SwInput,
  SwTextarea,
  SwDropdown,
  SwTooltip,
} from "@/global";

//TODO: remember to remove
import { useImageUrl } from "@/utils/helpers";
import { chatTagsInterface, clientOwnerInterface } from "../../../types";
const { getImageUrl } = useImageUrl();
const imageUrlEx1 = getImageUrl("profile-picture-1.jpg");

const chatTags = inject("chatTags") as Ref<chatTagsInterface[]>;
const clientOwner = inject("clientOwner") as Ref<clientOwnerInterface[]>;
const activeClientOwner = inject("activeClientOwner") as Ref<clientOwnerInterface>;
const clientOwnerDropdown = ref();

function removeTag(tagId: number, index: number) {
  chatTags.value.splice(index, 1);
  console.log(tagId); //TODO: remmeber to remove, For deleting in server side
}

function addNewTag(event: KeyboardEvent) {
  const target = <HTMLInputElement>event.target;

  if (chatTags.value.length !== 10) {
    if (target.value) {
      chatTags.value.push({
        id: 10,
        name: target.value,
      });
    }
    target.value = "";
  } else {
    //TODO: show max tag allowed message
  }
}

function deleteTagOnBackSpace(event: KeyboardEvent) {
  const target = <HTMLInputElement>event.target;
  if (event.code == "Backspace" && target.value.length === 0) {
    chatTags.value.pop();
  }
}



function setClientOwner(item: clientOwnerInterface){
  clientOwnerDropdown.value.hideDropdown();
  activeClientOwner.value = item;
}
</script>
