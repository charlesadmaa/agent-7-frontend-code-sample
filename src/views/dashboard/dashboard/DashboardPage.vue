<template>
  <main class="bg-gray-50 dark:bg-gray-900 p-4 lg:ml-[105px] h-full space-y-4">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 h-1/6">
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-32 lg:h-64"
      ></div>
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-32 lg:h-64"
      ></div>
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl"
      ></div>
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-32 lg:h-64"
      ></div>
    </div>
    <div class="grid grid-cols-2 gap-4 h-1/4">
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-48 lg:h-96"
      ></div>
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-48 lg:h-96"
      ></div>
    </div>
    <div class="grid grid-cols-3 gap-4 h-1/4">
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-32 lg:h-64"
      ></div>
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-32 lg:h-64"
      ></div>
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-32 lg:h-64"
      ></div>
    </div>
    <div class="grid grid-cols-2 gap-4 h-1/4">
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-48 lg:h-96"
      ></div>
      <div
        class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-48 lg:h-96"
      ></div>
    </div>
  </main>
  <sw-modal
    v-if="teamModalVisibility"
    size="4xl"
    :onClose="hideModal"
    :notEscapable="false"
    :persistent="false"
  >
    <template #header>
      <div class="text-xl font-bold">Invite All Your Colleagues</div>
    </template>
    <template #body>

      <!-- Loading Skeleton -->
      <!-- <div v-if="loadingRequest" role="status" class="animate-pulse">
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5"
        ></div>
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"
        ></div>
        <div class="flex items-center mt-4">
          <svg
            class="w-8 h-8 text-gray-200 dark:text-gray-700 me-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
            />
          </svg>
          <div
            class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"
          ></div>
          <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div> -->


      <div class="text-sm text-gray-600">
        Online at all times so you won't miss an important customer.
      </div>
      <div class="text-lg font-bold mt-3 mb-3">Share invitation link</div>
      <p class="text-sm text-gray-600">
        Anyone can follow the link to join your team.
      </p>
      <p class="text-sm text-gray-600">
        For security reasons, the link will expire in 5 days (03/17/2024) and a
        new one would be automatically generated.
      </p>

      <div class="flex mt-4 mb-4">
        <sw-input
          placeholder="••••••••"
          type="text"
          v-model="inputData"
          class="w-full"
          required
        ></sw-input>
        <sw-button class="w-[100px] ml-5" size="sm" color="light"
          >Copy link</sw-button
        >
      </div>

      <div class="mt-10 mb-11">
        <div class="grid gap-1 grid-cols-12 items-center mt-5">
          <div class="col-span-1">
            <img
              class="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Rounded avatar"
            />
          </div>
          <div class="col-span-4">Oziri Emeka Emmanuek</div>
          <div class="col-span-6">oziriemeka@gmail.com</div>
        </div>

        <div class="grid gap-1 grid-cols-12 items-center mt-5">
          <div class="col-span-1">
            <img
              class="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Rounded avatar"
            />
          </div>
          <div class="col-span-4">
            <sw-input
              placeholder="Name"
              type="text"
              class="w-auto"
              required
            ></sw-input>
          </div>
          <div class="col-span-6">
            <sw-input
              placeholder="Email"
              type="text"
              class="w-auto"
              required
            ></sw-input>
          </div>
        </div>

        <div class="mt-5">
          <a class="text-sm font-semibold text-blue-600" href="#">Add more</a>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-row">
        <sw-button class="w-[200px] p-3 mr-5">Send email invitations</sw-button>
        <sw-button @click="hideModal" class="w-[200px] p-3 mr-5"
          >I'll invite my team later</sw-button
        >
      </div>
    </template>
  </sw-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SwModal, SwInput, SwButton } from "@/global";

const teamModalVisibility = ref(true);

function hideModal() {
  teamModalVisibility.value = false;
}

const inputData = ref(
  "https://app.jivosite.com/join.html?token=f31acb765283a86c2de9eb2dc7e8895d.1713486"
);

</script>
