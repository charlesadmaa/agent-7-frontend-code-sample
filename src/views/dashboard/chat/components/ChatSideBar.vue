<template>
    <div
      id="secondary-sidenav"
      class="w-[25%] h-[100vh] border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform left-0 top-0 transform-none"
    >
      <h5 class="font-bold text-gray-900 mt-2 mb-2 pl-4 text-lg">
        Contact center
      </h5>
      <div>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-styled-tab"
            data-tabs-toggle="#default-styled-tab-content"
            data-tabs-active-classes="text-gray-900 hover:text-primary-600 border-gray-400"
            data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
            role="tablist"
          >
            <li class="me-2" role="presentation">
              <button
                class="inline-block relative me-2 font-bold ml-4 pb-2 border-b-2 border-b-black rounded-t-lg"
                data-tabs-target="#inbox"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Inbox
                <span
                  class="top-[-4px] start-9 absolute w-[10px] h-[10px] text-center bg-red-500 text-white rounded-full"
                >
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div id="default-styled-tab-content">
          <div
            class="rounded-lg bg-white dark:bg-gray-800"
            id="inbox"
            role="tabpanel"
            aria-labelledby="inbox-tab"
          >
            <form action="#" method="GET">
              <label for="users-search" class="sr-only">Search</label>
              <div class="relative mt-1 px-3">
                <sw-input
                  type="text"
                  name="email"
                  id="users-search"
                  class="bg-white text-gray-900 !border-gray-200 sm:text-sm rounded-lg focus:border-primary-500 block w-full"
                  placeholder="Search"
                >
                  <template #prefix>
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                    >
                      <search-icon></search-icon>
                    </div>
                  </template>
                </sw-input>
              </div>
            </form>
  
      <perfect-scrollbar v-once  class="scrollarea">

           <div>
            <sw-table
              class="mt-4 border-t overflow-hide"
              tableCss="w-full table-fixed text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <sw-table-head
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <sw-table-head-cell class="w-[15%] !px-0 !py-0">
                </sw-table-head-cell>
                <sw-table-head-cell class="w-[85%] !px-0 !py-0">
                </sw-table-head-cell>
              </sw-table-head>
              <sw-table-body>
                <sw-table-row
                  v-for="(item, index) in items"
                  :key="index"
                  @click="showChatMessageArea(item)"
                  :class="{'bg-blue-100 cursor-pointer select-none': item.isActive || item.unReadMessages > 0, 'hover:bg-blue-100 cursor-pointer select-none': !item.isActive}"
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
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { inject, type Ref } from "vue";
  import { SwInput, SearchIcon } from "@/global";
  import {
    SwTable,
    SwTableHead,
    SwTableHeadCell,
    SwTableBody,
    SwTableRow,
    SwTableCell,
  } from "@/global";
  import ItemsType from "../types";
  
  const items = inject<Ref>("items");
  
  const emit = defineEmits(['click:open-chat']);
  
  function showChatMessageArea(item: ItemsType){
      items?.value.map((chatItem: ItemsType) => {
          chatItem.isActive = false;
      })
      
      addActivateClassToRow(item);
      emit('click:open-chat', item)
  }
  
  function addActivateClassToRow(activeChat: ItemsType){
      activeChat.unReadMessages = 0;
      activeChat.isActive = true;

      updateUnReadMessages();
  }

  function updateUnReadMessages(){}
  
  </script>
  


<style scoped>
.scrollarea{
  position: relative;
  height: calc(100vh - 132px); /* or max-height: 400px; */
}
</style>