<template>
  <td :class="tableCellClasses">
    <slot />
  </td>
</template>

<script lang="ts" setup>
import { useTableCellClasses } from "./composables/useTableCellClasses";

const props = defineProps({
  tableCellClassProp: {
    type: String,
    default: "",
  },
});
const { tableCellClasses } = useTableCellClasses(props.tableCellClassProp);
</script>
