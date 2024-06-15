<template>
    <div>
        <div class="mt-2 mb-2 pl-4 pr-4 flex justify-between">
          <h5 class="font-bold text-gray-900 text-lg">
            {{ activeOperator.name }}
          </h5>
          <button>
            <cancel-icon></cancel-icon>
          </button>
        </div>
  
        <div
          class="flex item-center border-gray-100 text-sm font-medium pb-4 pl-4 pr-4 h-[30px] border-b hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          Chat on website • alawi.ng Chat on website • alawi.ng
          <arrowdown-icon></arrowdown-icon>
        </div>
      </div>
</template>

<script setup lang="ts">
import { inject} from "vue";
import {activeOperatorInterface} from "../../../types";

const activeOperator = inject("activeOperator") as activeOperatorInterface;


</script>