<template>
    <div class="overflow-x-auto">
      <table :class="tableClasses">
        <slot />
      </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { provide } from 'vue'
  import { useTableClasses } from './composables/useTableClasses'
  
  const props = defineProps({
    striped: {
      type: Boolean,
      default: false,
    },
    stripedColumns: {
      type: Boolean,
      default: false,
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    tableCss: {
      type: String,
      default: ''
    }
  })
  
  provide('hoverable', props.hoverable)
  provide('striped', props.striped)
  provide('stripedColumns', props.stripedColumns)

  const { tableClasses } = useTableClasses(props.tableCss)
  </script>