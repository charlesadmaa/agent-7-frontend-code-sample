<template>
  <div class="mr-3 mt-3 mb-3 text-gray-900 text-[15px]">
    <sw-dropdown
      buttonclass="border-0 px-0 py-0"
      button-color="alternative"
      :show-drop-down-arrow="false"
      :closeInside="false"
      placement="top"
    >
      <template #title>
        <attach-icon class="w-[25px] h-[25px]" />
      </template>
      <template #default>
        <div class="relative block">
          <label v-bind="getRootProps()" :class="dropZoneClass">
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <p class="mb-2 text-sm text-red-500 dark:text-gray-400">
                {{ fileDropError }}
              </p>
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG, GIF or PDF (MAX. 5MB)
              </p>
            </div>
            <input
              v-bind="getInputProps()"
              @change="listenForFileupload"
              id="dropzone-file"
              type="file"
              class="hidden"
            />
          </label>
        </div>
      </template>
    </sw-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch} from "vue";
import { useDropzone } from "vue3-dropzone";
import { twMerge } from "tailwind-merge";
import { SwDropdown, AttachIcon } from "@/global";

const options = reactive({
  multiple: false,
  onDrop,
  accept: ".jpg,.png,.gif,.pdf",
});

const { getRootProps, getInputProps, isDragReject } = useDropzone(options);
const fileDropError = ref();

// acceptFiles, rejectReasons
function onDrop(files: File[] | null, rejectReasons: any) {
  if (rejectReasons) {
    fileDropError.value = rejectReasons[0].errors[0].message;
  }
  console.log(files);
}

//Place this in classesFile
const dropZoneClass = ref(
  "w-[300px] flex flex-col justify-center items-center h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
);

watch(
  [isDragReject, fileDropError],
  ([isDragRejectValue, fileDropErrorValue]) => {
    if (
      isDragRejectValue ||
      !fileDropErrorValue ||
      fileDropErrorValue.length == 0
    ) {
      dropZoneClass.value = twMerge(dropZoneClass.value, "border-red-500");
      removeFileDropErrorMessage();
    }
    if (
      !isDragRejectValue ||
      (fileDropErrorValue && fileDropErrorValue.length > 0)
    ) {
      dropZoneClass.value = twMerge(dropZoneClass.value, "border-gray-300");
    }
  }
);

function listenForFileupload() {
  console.log("file changed");
}

function removeFileDropErrorMessage() {
  setTimeout(() => {
    fileDropError.value = "";
  }, 5000);
}

</script>