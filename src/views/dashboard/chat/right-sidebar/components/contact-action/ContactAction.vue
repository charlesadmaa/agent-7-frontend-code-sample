<template>
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
</template>

<script setup lang="ts">
import { inject, Ref } from "vue";
import {
  SwDropdown,
  SwInput,
  SwTooltip,
  LinkIcon,
  LockIcon,
  TimesIcon,
} from "@/global";

// TODO: set data type 
const internalContactList = inject<Ref>("internalContactList");

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

function removeContact(index: number) {
  internalContactList.value.splice(index, 1);
}
</script>
