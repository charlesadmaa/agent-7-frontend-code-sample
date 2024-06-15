<template>
  <aside
    id="sidebar-double"
    class="flex z-40 fixed left-0 h-full transition-transform -translate-x-full lg:translate-x-0 border-r bg-white border-gray-200 w-[105px]"
    aria-label="Sidebar"
  >

    <div
      class="overflow-y-auto z-30 py-5 px-3 w-30 h-full dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between"
    >
      <ul class="space-y-2">
        <li
          v-for="(item, index) in topNavigationLinks"
          :key="index"
          class="min-h-[60px]"
        >
          <a
            href="#"
            class="flex flex-col group/item text-center items-center p-2 text-gray-400 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-whit dark:hover:bg-gray-700"
          >
            <img
              class="opacity-[0.5] group-hover/item:opacity-[1]"
              :class="{ 'opacity-[1]': $route.name == item.routeName }"
              width="25px"
              height="25px"
              :src="getSvgIcon(item.icon)"
            />
            <span
              class="text-[11px] mt-2 font-bold invisible group-hover/item:visible"
              >{{ item.name }}</span
            >
          </a>
        </li>
      </ul>

      <ul
        class="text-center justify-center w-full dark:bg-gray-800 z-20"
      >
        <li>
          <sw-translator position="sidebar" :showArrow="false"></sw-translator>
        </li>
        <li
          v-for="(item, index) in bottomNavigationLinks"
          :key="index"
          class="min-h-[60px]"
        >
          <a
            href="#"
            class="flex flex-col group/item text-center items-center p-2 text-gray-400 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-whit dark:hover:bg-gray-700"
          >
            <img
              class="opacity-[0.5] group-hover/item:opacity-[1]"
              width="25px"
              height="25px"
              :src="getSvgIcon(item.icon)"
            />
            <span
              class="text-[11px] mt-2 font-bold invisible group-hover/item:visible"
              >{{ item.name }}</span
            >
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { navigationLinks } from "../../composables/navigationList";
import { useImageUrl } from "@/utils/helpers";
import { SwTranslator } from "@/global";

const { getSvgIcon } = useImageUrl();

const topNavigationLinks = navigationLinks.filter((item) => {
  return item.section == "top";
});

const bottomNavigationLinks = navigationLinks.filter((item) => {
  return item.section == "bottom";
});
</script>
