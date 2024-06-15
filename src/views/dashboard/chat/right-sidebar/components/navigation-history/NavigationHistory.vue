<template>
  <div class="mt-5">
    <div class="ml-4 mb-4 text-gray-500 text-sm font-bold">
      Navigation History
    </div>
    <div class="bg-white ml-3 mr-3 rounded-md">
      <div
        class="flex items-center p-4 hover:bg-gray-200 cursor-pointer group/nav-history"
      >
        <div class="ml-2 mr-4">
          <globe-icon color="#C6CBD1" class="w-[20px]" />
        </div>
        <div class="block text-ellipsis overflow-hidden whitespace-nowrap">
          <div class="text-sm text-gray-600 font-bold flex justify-between">
            <div class="text-ellipsis overflow-hidden whitespace-nowrap">
              Home | How to train a dragon
            </div>
          </div>
          <div class="text-xs text-gray-400 text-ellipsis overflow-hidden">
            https://example.com/how-to-train-a-dragon-in--south-pole
          </div>
          <div
            class="text-xs overflow-hidden whitespace-nowrap text-gray-400 font-normal mt-1"
          >
            06:27
          </div>
        </div>
        <div class="ml-4">
          <external-link-icon
            color="#C6CBD1"
            class="w-[20px] invisible group-hover/nav-history:visible"
          />
        </div>
      </div>

      <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <div class="ml-2 mr-4">
          <globe-icon color="#C6CBD1" class="w-[20px]" />
        </div>
        <div class="block text-ellipsis overflow-hidden whitespace-nowrap">
          <div
            class="text-sm text-gray-600 font-bold text-ellipsis overflow-hidden"
          >
            Home | How to train a dragon dnhd dhd hd hd dh dhdh d dd ddh dh
          </div>
          <div class="text-xs text-gray-400 text-ellipsis overflow-hidden">
            https://example.com/how-to-train-a-dragon-in--south-pole
          </div>
        </div>
      </div>

      <div class="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
        <div class="ml-2 mr-4">
          <globe-icon color="#C6CBD1" class="w-[20px]" />
        </div>
        <div class="block text-ellipsis overflow-hidden whitespace-nowrap">
          <div
            class="text-sm text-gray-600 font-bold text-ellipsis overflow-hidden"
          >
            Home | How to train a dragon dnhd dhd hd hd dh dhdh d dd ddh dh
          </div>
          <div class="text-xs text-gray-300 text-ellipsis overflow-hidden">
            https://example.com/how-to-train-a-dragon-in--south-pole
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

import { GlobeIcon, ExternalLinkIcon } from '@/global';
</script>