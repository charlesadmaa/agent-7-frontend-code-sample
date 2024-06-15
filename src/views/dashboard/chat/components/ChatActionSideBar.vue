<template>
  <div
    id="secondary-sidenav"
    class="w-[25%] h-[100vh] overflow-hidden bg-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-transform left-0 top-0 transform-none"
  >
    <div>
      <div class="mt-3 mb-2 pl-4 pr-4 flex justify-between pb-[20px]">
        <h5 class="font-bold text-gray-900 text-lg">
          <flag class="rounded mr-2" iso="ng" /> Neon Emmanuel
        </h5>
        <button>
          <cancel-icon></cancel-icon>
        </button>
      </div>
    </div>

    <div class="mb-30">
      <perfect-scrollbar v-once class="scrollarea">
        <div>
          <div class="ml-4 mb-4 text-gray-500 text-sm font-bold">Client</div>
          <div class="bg-white ml-3 mr-3 rounded-md">
            <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
              <div class="ml-2 mr-4">
                <link-icon color="#C6CBD1" class="w-[20px]" />
              </div>
              <div class="flex align-middle items-center ml-[5px]">
                <div class="">
                  <img class="w-6 h-6 rounded-full mr-3" :src="imageUrlEx1" />
                </div>
                <div class="text-sm text-gray-600">Neon Emmanuel</div>
              </div>
            </div>

            <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
              <div class="ml-2 mr-4">
                <tag-icon color="#C6CBD1" class="w-[20px]" />
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
                <category-icon color="#C6CBD1" class="w-[20px]" />
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
                <comment-icon color="#C6CBD1" class="w-[20px]" />
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

        <div class="mt-5">
          <div class="ml-4 mb-4 text-gray-500 text-sm font-bold">Contacts</div>
          <div class="bg-white ml-3 mr-3 rounded-md">
            <div
              class="flex items-center p-4 hover:bg-gray-200 cursor-pointer justify-between"
              v-for="(item, index) in internalContactList"
              :key="index"
            >
              <div class="flex items-center">
                <div class="ml-2 mr-4">
                  <link-icon color="#C6CBD1" class="w-[20px]" />
                </div>
                <div class="flex align-middle items-center">
                  <div class="text-sm text-gray-600">
                    <sw-input
                      v-model="item.value"
                      v-on:keyup.enter.stop="addNewTag"
                      v-on:keyup.stop="deleteTagOnBackSpace"
                      class="rounded-none border-0 bg-white round h-[30px] focus:ring-transparent"
                      :placeholder="'Enter ' + `${item.type}`"
                    />
                  </div>
                </div>
              </div>
              <div class="ml-2 mr-2">
                <sw-tooltip
                  v-if="item.source == 'external'"
                  theme="dark"
                  nudgeX="5"
                  nudgeY="-34"
                  :arrowOverflow="true"
                >
                  <template #trigger>
                    <lock-icon color="#C6CBD1" class="w-[20px]" />
                  </template>
                  <template class="relative" #content> External link </template>
                </sw-tooltip>

                <sw-tooltip
                  v-else
                  theme="dark"
                  nudgeX="5"
                  nudgeY="-34"
                  :arrowOverflow="true"
                >
                  <template #trigger>
                    <times-icon
                      @click="removeContact(index)"
                      color="#C6CBD1"
                      class="w-[20px]"
                    />
                  </template>
                  <template class="relative" #content> Remove contact</template>
                </sw-tooltip>
              </div>
            </div>

            <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
              <div class="ml-2 mr-4">
                <link-icon color="#C6CBD1" class="w-[20px]" />
              </div>
              <div class="flex align-middle items-center">
                <div class="text-sm text-gray-600">
                  <sw-dropdown
                    buttonclass="border-0 w-full px-0 py-0 ml-2 disabled:cursor-not-allowed"
                    button-color="none"
                    :show-drop-down-arrow="false"
                    :closeInside="true"
                    placement="bottom"
                    :disabled="internalContactList.length >= 6"
                  >
                    <template #title>
                      <span>Add new contact</span>
                    </template>
                    <template #default>
                      <div
                        class="z-10 h-auto bg-white rounded-lg shadow w-80 dark:bg-gray-700"
                      >
                        <div class="block">
                          <div
                            @click="addNewContactInfo('phone')"
                            class="p-4 border-0 hover:bg-gray-200 ring-none bg-white text-gray-800 text-xs font-medium dark:bg-gray-700"
                          >
                            Add Phone
                          </div>
                          <div
                            @click="addNewContactInfo('email')"
                            class="p-4 border-0 hover:bg-gray-200 ring-none bg-white text-gray-800 text-xs font-medium"
                          >
                            Add Email
                          </div>
                        </div>
                      </div>
                    </template>
                  </sw-dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <div class="ml-4 mb-4 text-gray-500 text-sm font-bold">
            Navigation History
          </div>
          <div class="bg-white ml-3 mr-3 rounded-md">
            <div
              class="flex items-center p-4 hover:bg-gray-200 cursor-pointer group/nav-history"
            >
              <div class="ml-2 mr-4">
                <globe-icon color="#C6CBD1" class="w-[20px]" />
              </div>
              <div
                class="block text-ellipsis overflow-hidden whitespace-nowrap"
              >
                <div
                  class="text-sm text-gray-600 font-bold flex justify-between"
                >
                  <div class="text-ellipsis overflow-hidden whitespace-nowrap">
                    Home | How to train a dragon
                  </div>
                </div>
                <div
                  class="text-xs text-gray-400 text-ellipsis overflow-hidden"
                >
                  https://example.com/how-to-train-a-dragon-in--south-pole
                </div>
                <div
                  class="text-xs overflow-hidden whitespace-nowrap text-gray-400 font-normal mt-1"
                >
                  06:27
                </div>
              </div>
              <div class="ml-4">
                <external-link-icon
                  color="#C6CBD1"
                  class="w-[20px] invisible group-hover/nav-history:visible"
                />
              </div>
            </div>

            <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
              <div class="ml-2 mr-4">
                <globe-icon color="#C6CBD1" class="w-[20px]" />
              </div>
              <div
                class="block text-ellipsis overflow-hidden whitespace-nowrap"
              >
                <div
                  class="text-sm text-gray-600 font-bold text-ellipsis overflow-hidden"
                >
                  Home | How to train a dragon dnhd dhd hd hd dh dhdh d dd ddh
                  dh
                </div>
                <div
                  class="text-xs text-gray-400 text-ellipsis overflow-hidden"
                >
                  https://example.com/how-to-train-a-dragon-in--south-pole
                </div>
              </div>
            </div>

            <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
              <div class="ml-2 mr-4">
                <globe-icon color="#C6CBD1" class="w-[20px]" />
              </div>
              <div
                class="block text-ellipsis overflow-hidden whitespace-nowrap"
              >
                <div
                  class="text-sm text-gray-600 font-bold text-ellipsis overflow-hidden"
                >
                  Home | How to train a dragon dnhd dhd hd hd dh dhdh d dd ddh
                  dh
                </div>
                <div
                  class="text-xs text-gray-300 text-ellipsis overflow-hidden"
                >
                  https://example.com/how-to-train-a-dragon-in--south-pole
                </div>
              </div>
            </div>
          </div>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  LinkIcon,
  TagIcon,
  CommentIcon,
  CategoryIcon,
  GlobeIcon,
  SwButton,
  SwInput,
  SwTextarea,
  SwDropdown,
  ExternalLinkIcon,
  LockIcon,
  SwTooltip,
  TimesIcon,
} from "@/global";
import { useImageUrl } from "@/utils/helpers";
import { ref } from "vue";

const { getImageUrl } = useImageUrl();
const imageUrlEx1 = getImageUrl("profile-picture-1.jpg");

const chatTags = ref([
  {
    id: 1,
    name: "Client",
  },
  {
    id: 3,
    name: "Paid",
  },
  {
    id: 4,
    name: "Disturbing",
  },
]);

function removeTag(tagId: number, index: number) {
  chatTags.value.splice(index, 1);
  console.log(tagId); //For deleting in server side
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

function addNewContactInfo(actionType: "phone" | "email") {
  console.log(internalContactList.value.length);
  if (internalContactList.value.length < 6) {
    internalContactList.value.push({
      type: actionType,
      value: "",
      source: "internal",
    });
  }
}

interface internalContactListInterface {
  type: "phone" | "email";
  value: string;
  source: "internal" | "external";
}
const internalContactList = ref<internalContactListInterface[]>([
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "external",
  },
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "external",
  },
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "internal",
  },
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "internal",
  },
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "internal",
  },
  {
    type: "phone",
    value: "000000000000000",
    source: "internal",
  },
]);

function removeContact(index: number) {
  internalContactList.value.splice(index, 1);
}

</script>

<style scoped>
.scrollarea {
  position: relative;
  height: calc(100vh - 75px); /* or max-height: 400px; */
}
</style>
