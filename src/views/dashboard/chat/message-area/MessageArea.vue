<template>
  <section
    id="secondary-sidenav"
    class="w-[50%] h-[100vh] border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform left-0 top-0 transform-none"
  >
    <header-area></header-area>
    <div class="flex flex-col justify-between h-[calc(100%-90px)]">
      <message-list-area></message-list-area>
      <text-area></text-area>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderArea from "./components/header-area/HeaderArea.vue";
import MessageListArea from "./components/message-list-area/MessageListArea.vue";
import TextArea from "./components/text-area/TextArea.vue";
</script>
