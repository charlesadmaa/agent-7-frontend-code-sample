<template>
  <div>
    <main class="dark:bg-gray-900 ml-[105px] h-full flex">
      <div
        id="secondary-sidenav"
        class="overflow-y-auto sticky px-3 w-64 h-[100vh] bg-gray-50 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between left-0 top-0"
      >
        <div>
          <h5 class="text-sm font-bold text-gray-900 p-2 mt-4 mb-2">
            Settings
          </h5>
          <ul>
            <li v-for="item in topNavLinks">
              <router-link
                :to="{ name: item.routeName }"
                class="flex text-sm items-center p-2 w-full font-medium text-gray-600 whitespace-nowrap dark:text-white hover:text-gray-900 cursor-pointer"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
            <h5 class="text-sm font-bold text-gray-900 p-2 mt-4 mb-2">
            Others
          </h5>
          <ul>
            <li v-for="item in bottomNavLinks">
              <a
              @click="logoOut"
              class="flex text-sm items-center p-2 w-full font-medium text-gray-600 whitespace-nowrap dark:text-white hover:text-gray-900 cursor-pointer"
               v-if="item.name == 'Logout'" href="javascript:void(0)">
                Logout
              </a>
              <router-link
              v-else
                :to="{ name: item.routeName }"
                class="flex text-sm items-center p-2 w-full font-medium text-gray-600 whitespace-nowrap dark:text-white hover:text-gray-900 cursor-pointer"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="p-8 w-full">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { settingsNavList } from "./types";
import { useRouter } from "vue-router";

const router = useRouter();

const topNavLinks = settingsNavList.filter((item) => {
  return item.section == "top";
});

const bottomNavLinks = settingsNavList.filter((item) => {
  return item.section == "bottom";
});

function logoOut(){
  //TODO: clear pinia storage 
  router.push({
    name: 'auth.login'
  })
}
</script>
