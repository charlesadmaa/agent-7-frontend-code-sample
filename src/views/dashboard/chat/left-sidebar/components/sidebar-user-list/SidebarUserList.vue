<template>
  <!-- TODO: might have to remove v-once -->
  <perfect-scrollbar v-once class="scrollarea">
    <div>
      <sw-table
        class="mt-4 border-t overflow-hide"
        tableCss="w-full table-fixed text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <sw-table-head
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <sw-table-head-cell class="w-[15%] !px-0 !py-0"> </sw-table-head-cell>
          <sw-table-head-cell class="w-[85%] !px-0 !py-0"> </sw-table-head-cell>
        </sw-table-head>
        <sw-table-body>
          <sw-table-row
            v-for="(item, index) in items"
            :key="index"
            @click="showChatMessageArea(item)"
            :class="{
              'bg-blue-100 cursor-pointer select-none':
                item.isActive || item.unReadMessages > 0,
              'hover:bg-blue-100 cursor-pointer select-none': !item.isActive,
            }"
          >
            <sw-table-cell
              tableCellClassProp="font-medium text-gray-900 whitespace-nowrap dark:text-white px-2 py-2"
            >
              <div class="relative flex items-center space-x-6">
                <img class="w-9 h-9 rounded-full ml-2" :src="item.avatar" />
                <span
                  v-if="item.unReadMessages != 0"
                  class="top-[-10px] start-2 absolute min-h-[18px] leading-[20px] min-w-[20px] w-auto pl-1.5 pr-1.5 text-center bg-red-500 text-white rounded-full"
                >
                  {{ item.unReadMessages }}
                </span>
              </div>
            </sw-table-cell>

            <sw-table-cell
              tableCellClassProp="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div
                class="font-bold text-gray-900 flex justify-between items-center pt-2"
              >
                <div class="w-[75%] text-ellipsis overflow-hidden">
                  {{ item.name }}
                </div>
                <div
                  class="text-xs font-normal text-gray-500 mr-2 w-[25%] text-right text-ellipsis overflow-hidden"
                >
                  Yesterday
                  <!-- 20:23 // Yesterday // Monday/ 02-23 -->
                </div>
              </div>
              <div
                class="text-xs text-ellipsis text-normal text-gray-500 overflow-hidden w-[75%] pb-2"
              >
                Hello how are you doing testing
              </div>
            </sw-table-cell>
          </sw-table-row>
        </sw-table-body>
      </sw-table>
    </div>
  </perfect-scrollbar>
</template>

<script setup lang="ts">
import {Ref, inject} from "vue";
import ItemsType from "../../types";
import {
  SwTable,
  SwTableHead,
  SwTableHeadCell,
  SwTableBody,
  SwTableRow,
  SwTableCell,
} from "@/global";

const items = inject<Ref>("items");

const emit = defineEmits(["click:open-chat"]);

function showChatMessageArea(item: ItemsType) {
  items?.value.map((chatItem: ItemsType) => {
    chatItem.isActive = false;
  });

  addActivateClassToRow(item);
  emit("click:open-chat", item);
}

function addActivateClassToRow(activeChat: ItemsType) {
  activeChat.unReadMessages = 0;
  activeChat.isActive = true;

  updateUnReadMessages();
}

function updateUnReadMessages() {}

</script>

<style scoped>
.scrollarea {
  position: relative;
  height: calc(100vh - 132px); /* or max-height: 400px; */
}
</style>