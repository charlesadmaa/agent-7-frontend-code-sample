<template>
  <section
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
          <sidebar-search></sidebar-search>
          <sidebar-user-list></sidebar-user-list>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import SidebarUserList from "./components/sidebar-user-list/SidebarUserList.vue";
import SidebarSearch from "./components/sidebar-search/SidebarSearch.vue";
</script>
