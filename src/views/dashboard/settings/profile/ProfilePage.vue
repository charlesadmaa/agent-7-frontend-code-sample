<template>
  <div class="w-2/4">
    <div class="mb-4 font-bold text-sm border-b-[1px] border-b-gray-200 pb-4">
      Edit Profile
    </div>
    <div class="flex flex-col">
      <div class="flex items-center">
        <img
          class="mb-4 w-20 h-20 object-cover object-center rounded-full sm:mb-0 xl:mb-4 2xl:mb-0"
          :src="imageUrlEx1"
          alt="Jese picture"
        />
        <div class="ml-4">
          <h3 class="mb-1 text-md font-bold text-gray-900 dark:text-white">
            Jese Leos
          </h3>
          <div
            class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400"
          >
            Customer service agent (you)
          </div>
        </div>
      </div>
      <div class="mt-5">
        <sw-button size="md" color="default">
          <template #prefix>
            <upload-icon />
          </template>
          <template #default> Change picture </template>
        </sw-button>

        <sw-button class="ml-2" size="md" color="transparent">
          <template #prefix>
            <refresh-icon />
          </template>
          <template #default> Use random image </template>
        </sw-button>

        <sw-button class="ml-2" size="md" color="transparent">
          <template #default> Remove image </template>
        </sw-button>
      </div>
    </div>

    <div class="mt-3 pb-3">
      <p class="text-xs text-gray-400">
        Real photo pontentially increase the number of chats.
      </p>
    </div>
    <div class="flex flex-col mt-6">
      <h2 class="font-bold">Your Name</h2>
      <p class="text-sm mt-2 text-gray-500">
        This is your display name, it would appear on the chat widget.
      </p>
      <div class="mt-4">
        <sw-input
          :model-value="userInformation.email"
          class="w-[300px]"
          placeholder="example@gmail.com"
        ></sw-input>
      </div>
    </div>

    <div class="flex flex-col mt-6">
      <h2 class="font-bold">Your Email</h2>
      <p class="text-sm mt-2 text-gray-500">
        You use this email for logging into the agent's web app. This address is
        also used to deliver notifications. Only the account owner can edit the
        credentials
      </p>
      <div class="mt-4">
        <sw-input
          :model-value="userInformation.email"
          class="w-[300px]"
          placeholder="example@gmail.com"
        ></sw-input>
      </div>
    </div>

    <div class="flex flex-col mt-6">
      <h2 class="font-bold">Your Phone</h2>
      <p class="text-sm mt-2 text-gray-500">
        Only visible to your team members, system will automatically infer your
        country code from your IP address if not provided
      </p>
      <div class="mt-4">
        <sw-input
          :model-value="userInformation.phone"
          class="w-[300px]"
          placeholder=""
        ></sw-input>
      </div>
    </div>

    <div class="border-t-[1px] border-t-gray-200 mt-6 mb-4"></div>

    <div class="flex flex-col mt-6">
      <h2 class="font-bold">Change Password</h2>

      <div>
        <p class="text-sm mt-2 text-gray-500">
          Please enter password enter your current password. Please use at least
          8 characters, including numbers, uppercase and lowercase letters,
          special characters
        </p>
        <div
          v-if="!passwordUpdateFieldIsVisible"
          class="text-blue-500 cursor-pointer text-sm font-semibold mt-5"
          @click="togglePasswordUpdateFields"
        >
          Update Account password
        </div>

        <div class="mt-4" v-else>
          <div class="mt-2">
            <sw-input
              type="password"
              v-model="userInformation.password"
              class="w-[300px]"
              placeholder="Current password"
            ></sw-input>
          </div>
          <div class="mt-2">
            <sw-input
              type="password"
              v-model="userInformation.newPassword"
              class="w-[300px]"
              placeholder="New password"
            ></sw-input>
          </div>
          <div class="mt-2">
            <sw-input
              type="password"
              v-model="userInformation.newPasswordConfirmation"
              class="w-[300px] ="
              placeholder="Confirm new password"
            ></sw-input>
          </div>

          <div class="flex items-center mt-7">
            <div>
            <sw-button>Update password</sw-button>
          </div>
          <sw-button
            class="text-red-500 cursor-pointer text-sm font-semibold"
            @click="togglePasswordUpdateFields"
            color="transparent"
          >
            Cancel update
          </sw-button>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t-[1px] border-t-gray-200 mt-6 mb-4"></div>

    <div class="flex flex-col mt-6">
      <h2 class="font-bold">Two-factor Authentication</h2>
      <p class="text-sm mt-2 text-gray-500">
        The feature to protect your account with an additional code that will
        need to be entered from your smartphone at each authorization.
      </p>
      <div class="mt-4">
        <sw-toggle v-model="enableTwoFactor" color="primary"></sw-toggle>
      </div>
      <div v-if="showTwoFactorSetup && !userInformation.twoFactorIsActive">
        <div
          id="alert-border-4"
          class="flex items-center p-4 mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800 mt-4"
          role="alert"
        >
          <info-icon class="flex-shrink-0 w-4 h-4"/>
          <div class="ms-3 text-sm font-medium">
            Two Factor Authentication not setup
            <a href="#" class="font-semibold underline hover:no-underline"
              >Setup 2FA</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="border-t-[1px] border-t-gray-200 mt-6 mb-4"></div>

    <div class="flex flex-col mt-6">
      <h2 class="font-bold">Signature</h2>
      <p class="text-sm mt-2 text-gray-500">
        The signature that will be added to the bottom of your emails
      </p>
      <div class="mt-4">
        <sw-textarea v-model="userInformation.signature"></sw-textarea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import {
  UploadIcon,
  SwButton,
  RefreshIcon,
  SwInput,
  SwToggle,
  SwTextarea,
  InfoIcon
} from "@/global";
import { useImageUrl } from "@/utils/helpers";
import { userInformationType } from "./types";

const { getImageUrl } = useImageUrl();
const imageUrlEx1 = getImageUrl("profile-picture-1.jpg");

const enableTwoFactor = ref<boolean>(false);
const showTwoFactorSetup = ref<boolean>(false);

const userInformation = ref<userInformationType>({
  name: "Neon Emmanuel",
  email: "oziriemeka@gmail.com",
  password: "",
  newPassword: "",
  newPasswordConfirmation: "",
  twoFactorIsActive: false,
  phone: "",
  signature: "Neon Emmanuel, Customer Service Agent",
});

watch(
  enableTwoFactor,
  (item) => {
    if (item) {
      showTwoFactorSetup.value = true;
      console.log(item);
      //Todo: Update DB and the userinformation object
    } else {
      showTwoFactorSetup.value = false;
    }
  },
  {
    deep: true,
  }
);

const passwordUpdateFieldIsVisible = ref<boolean>(false);

function togglePasswordUpdateFields() {
  passwordUpdateFieldIsVisible.value = !passwordUpdateFieldIsVisible.value;
}
</script>
