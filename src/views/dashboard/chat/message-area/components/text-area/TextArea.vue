<template>
  <div class=" mx-4 border-gray-300 px-0 text-right" v-if="activateMessageType == 'email'"> Email will be sent to neon@gmail.com //From internalContactList </div>

  <div
    :class="textAreaClass"
    @focusout="removeFocusOnTextBox"
    @focusin="focusChatMessageTextBox"
  >
    <div class="flex flex-row mb-2">
      <div
        v-for="item in messageType"
        @click="changeMessageText(item)"
        :class="{'mr-3 mt-3 mb-3 text-gray-900 text-[15px] cursor-pointer border-b-2 border-gray-900': activateMessageType === item, 'mr-3 mt-3 mb-3 cursor-pointer text-gray-900 text-[15px]': activateMessageType !== item }"
      >
        {{ textToUpperCase(item)}}
      </div>
    </div>

    <div>

  
      <textarea
        ref="messageBox"
        v-model="messageText"
        placeholder="Enter your message"
        autocomplete="off"
        @keyup="resizeCommentAreaHeight"
        row="1"
        maxlength="1000"
        class="rounded-md border-0 w-full bg-white round min-h-[47px] focus:ring-transparent resize-none overflow-y-auto pl-0 pt-[5px] pb-[10px]"
      ></textarea>
    </div>
    <div class="flex flex-row justify-end items-center">
      <!-- Need to remove from this or use state management -->
      <chat-gif></chat-gif>
      <chat-emoji v-on:insert:emoji="addEmojiToTextArea($event)"></chat-emoji>
      <chat-attach-file></chat-attach-file>
      <div class="mr-3 mt-3 mb-3">
        <button @click="sendMessage" :class="sendButtonClass">
          <send-icon class="w-[1.25rem] h-[1.25rem]" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, watch, inject } from "vue";
import ChatAttachFile from "./components/ChatAttachFile.vue";
import ChatEmoji from "./components/ChatEmoji.vue";
import ChatGif from "./components/ChatGif.vue";
import { SendIcon } from "@/global";
import { twMerge } from "tailwind-merge";
import { messageInterFace } from "../../../types";
import { useImageUrl } from "@/utils/helpers";
import {msgAddedToListEventStore} from "@/store/MsgAddedToListEventStore";

const { getImageUrl } = useImageUrl();
const imageUrlEx1 = getImageUrl("profile-picture-1.jpg");

const messageBox = ref();
const messageText = ref("");
const msg = inject("msg") as Ref<messageInterFace[]>;
const emit = defineEmits(["update:scrollbar"]);

function focusChatMessageTextBox() {
  addFocusToMessageTextBox();
}

const textAreaClass = ref(
  "bg-white mx-4 border border-gray-300 px-4 rounded-md"
);
function addFocusToMessageTextBox() {
  textAreaClass.value = "bg-white mx-4 border px-4 rounded-md border-blue-500";
}

function removeFocusOnTextBox() {
  textAreaClass.value = "bg-white mx-4 border border-gray-300 px-4 rounded-md";
}

async function addEmojiToTextArea(event: any) {
  messageText.value = messageText.value + " " + event;
}

// Textarea Grow Height on user input

function calcHeight(value: string) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight < 120 ? newHeight : 120;
}

function resizeCommentAreaHeight(event: KeyboardEvent) {
  const eventValue = <HTMLInputElement>event.target; //Type cast event as HTMLInputElement https://stackoverflow.com/questions/63631069/what-are-types-for-input-events-in-vue
  messageBox.value.style.height = calcHeight(eventValue.value) + "px";
}

const sendButtonClass = ref(
  "w-[30px] h-[30px] bg-gray-300 rounded-full flex justify-center items-center mb-[8px]"
);

watch(
  messageText,
  (value: any) => {
    const defaaultButtonClass =
      "w-[30px] h-[30px] bg-blue-500 rounded-full flex justify-center items-center mb-[8px]";
    if (value.length > 0) {
      sendButtonClass.value = defaaultButtonClass;
    } else {
      sendButtonClass.value = twMerge(
        sendButtonClass.value,
        "disabled disabled:bg-gray-300"
      );
    }
  },
  {
    deep: true,
  }
);


const customEvent = msgAddedToListEventStore();
function sendMessage() {
  msg.value.push({
    id: 123332,
    userId: 2,
    name: "Neon Emmanuel",
    avatar: imageUrlEx1,
    date: "02:56",
    type: "message",
    message: messageText.value,
  });
  messageText.value = "";
  customEvent.addEventMessage("update:scrollbar");
}

const messageType = ref([
  'chat',
  'email',
  'sms'
]);

const activateMessageType = ref('chat');

function textToUpperCase(text: string){
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function changeMessageText(messageType: string){
  activateMessageType.value = messageType;
}
</script>
