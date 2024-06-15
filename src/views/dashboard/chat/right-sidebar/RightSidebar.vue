<template>
  <section
    id="secondary-sidenav"
    class="w-[25%] h-[100vh] overflow-hidden bg-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-transform left-0 top-0 transform-none"
  >
    <sidebar-header></sidebar-header>
    <!-- Might need to remove v-once if it causes DOM TREE update issues -->
    <perfect-scrollbar v-once class="scrollarea mb-30">
      <client-action></client-action>
      <contact-action></contact-action>
      <navigation-history></navigation-history>
    </perfect-scrollbar>
  </section>
</template>

<script setup lang="ts">
import ClientAction from "./components/clients-action/ClientsAction.vue";
import ContactAction from "./components/contact-action/ContactAction.vue";
import NavigationHistory from "./components/navigation-history/NavigationHistory.vue";
import SidebarHeader from "./components/sidebar-header/SidebarHeader.vue";
</script>

<style scoped>
.scrollarea {
  position: relative;
  height: calc(100vh - 75px); /* or max-height: 400px; */
}
</style>
