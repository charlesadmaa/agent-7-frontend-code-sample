<template>
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
</template>

<script setup lang="ts">
import { SwInput, SearchIcon } from "@/global";
</script>
