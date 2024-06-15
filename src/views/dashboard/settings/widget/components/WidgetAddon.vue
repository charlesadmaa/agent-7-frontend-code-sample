<template>
  <div>
    <h2 class="text-3xl font-bold">Addon</h2>
  </div>
  
  <div class="mt-12">
    <div>
      <h2 class="font-bold text-base">Addon</h2>
      <p class="text-sm mt-2 text-gray-500">
        Add Extra feature to widget to make it more functional 
      </p>
    </div>

    <div class="w-full max-w-[25rem] mt-10">
      <div class="flex items-center justify-end">
        <div class="w-[50%]">Enable Emojis on chat </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end mt-5">
        <div class="w-[50%]">Prevent profanity and swear words </div>
        <div class="w-[50%]">
          <div class="text-right">
            <sw-toggle
              color="primary"
            ></sw-toggle>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { SwToggle } from "@/global";

</script>
