<template>
  <!-- Needs v-if here to ensure provider provides value at run time,
       Thus the need for type casting injected values
  -->
  <main class="dark:bg-gray-900 ml-[105px] h-full flex">
    <left-sidebar></left-sidebar>
    <message-area></message-area>
    <!-- <chat-message-area></chat-message-area>  -->
    <right-sidebar></right-sidebar>
  </main>
</template>

<script setup lang="ts">
import { type Ref, ref, provide } from "vue";
import LeftSidebar from "./left-sidebar/LeftSidebar.vue";
import RightSidebar from "./right-sidebar/RightSidebar.vue";
import MessageArea from "./message-area/MessageArea.vue";

//TODO: remaining this guy
// import ChatMessageArea from "./components/ChatMessageArea.vue";
import {
  ItemsType,
  messageInterFace,
  internalContactListInterface,
  chatTagsInterface,
  clientOwnerInterface,
} from "./types";
import { useImageUrl } from "@/utils/helpers";

const { getImageUrl } = useImageUrl();
const imageUrlEx1 = getImageUrl("profile-picture-1.jpg");
const imageUrlEx2 = getImageUrl("profile-picture-2.jpg");
const imageUrlEx3 = getImageUrl("profile-picture-3.jpg");
const imageUrlEx4 = getImageUrl("profile-picture-4.jpg");
const imageUrlEx5 = getImageUrl("profile-picture-5.jpg");
const imageUrlEx6 = getImageUrl("profile-picture-6.jpg");

//Todo: remove test data
const items: Ref<ItemsType[]> = ref([
  {
    id: 1,
    name: "Neon Emmanuel",
    email: "neonemmanuel@gmail.com",
    avatar: imageUrlEx1,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 10,
    isActive: false,
  },
  {
    id: 2,
    name: "Cady Joe",
    email: "neonemmanuel@gmail.com",
    avatar: imageUrlEx2,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Auditor",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 3,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx3,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 4,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx1,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 5,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx5,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 6,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx1,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 7,
    isActive: false,
  },
  {
    id: 7,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx2,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 8,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx3,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 9,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx4,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 1,
    isActive: false,
  },
  {
    id: 10,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx5,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 11,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx2,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 12,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx3,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 12,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx4,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 13,
    name: "Jane Joe",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx1,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
  {
    id: 14,
    name: "Jane Joe The last",
    email: "janedoe@gmail.com",
    avatar: imageUrlEx4,
    lastLogin: "June 24th, 2024 ",
    memberSince: "May 24th, 2024 ",
    permission: "Administrator",
    unReadMessages: 0,
    isActive: false,
  },
]);

const msg = ref<messageInterFace[]>([
  {
    id: 1,
    userId: 2,
    name: "Jane Deo the first",
    avatar: imageUrlEx2,
    date: "06:39",
    type: "message",
    message: "Lorem ipsum dolor sit amet consectetu",
    isDeleted: false,
  },
  {
    id: 17,
    userId: 2,
    name: "Jane Deo",
    avatar: imageUrlEx2,
    date: "06:39",
    type: "message",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
    isDeleted: false,
  },
  {
    id: 2,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "07:12",
    type: "message",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi modi repudiandae.",
    isDeleted: false,
  },

  {
    id: 3,
    userId: 2,
    name: "Jane doe",
    avatar: imageUrlEx2,
    date: "01:39",
    type: "message",
    message:
      "onsectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe, perspiciatis expedita eos aut.",
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },

  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
  {
    id: 4,
    userId: 1,
    name: "Neon Emmanuel the last",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message:
      "Delectus animi modi repudiandae? Consectetur non cupiditate accusamus sit, modi, sapiente possimus eum est molestiae et labore saepe.",
    isDeleted: false,
  },
]);

const chatTags = ref<chatTagsInterface[]>([
  {
    id: 1,
    name: "Client",
  },
  {
    id: 3,
    name: "Paid",
  },
  {
    id: 4,
    name: "Disturbing",
  },
]);

const internalContactList = ref<internalContactListInterface[]>([
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "external",
  },
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "external",
  },
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "internal",
  },
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "internal",
  },
  {
    type: "email",
    value: "newemail@gmail.com",
    source: "internal",
  },
  {
    type: "phone",
    value: "000000000000000",
    source: "internal",
  },
]);

const activeOperator = {
  userId: 2,
  name: "Jane Doe",
  country: "ng",
  avatar: "",
};

const clientOwner = ref<clientOwnerInterface[]>([
  {
    id: 'NOT_SELECTED',
    name: "Not Selected",
    avatar: imageUrlEx6,
  },
  {
    id: 2,
    name: "John Doe",
    avatar: imageUrlEx2,
  },
  {
    id: 3,
    name: "Purity Jane",
    avatar: imageUrlEx3,
  },
  {
    id: 4,
    name: "Hope Ransome",
    avatar: imageUrlEx4,
  }, 
  {
    id: 4,
    name: "Neon Emmanuel",
    avatar: imageUrlEx4,
  },
]);
//TODO: Push not selected in client side 

const activeClientOwner = ref<clientOwnerInterface>({
    id: 4,
    name: "Neon Emmanuel",
    avatar: imageUrlEx4,
})
// Using Provide & Inject to avoid prop drilling
// See reason for decision: https://mokkapps.de/vue-tips/use-provide-inject-to-avoid-prop-drilling
provide("items", items);
provide("chatTags", chatTags);
provide("internalContactList", internalContactList);
provide("msg", msg);
provide("activeOperator", activeOperator);
provide("clientOwner", clientOwner);
provide("activeClientOwner",  activeClientOwner);
</script>
