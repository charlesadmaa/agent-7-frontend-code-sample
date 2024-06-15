<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <g
      fill="none"
      fill-rule="evenodd"
      :stroke="color"
      transform="translate(1 3)"
    >
      <rect width="12" height="1" x="1" y=".5" rx=".5" />
      <rect width="12" height="1" x="1" y="4.5" rx=".5" />
      <rect width="8" height="1" x="1" y="8.5" rx=".5" />
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "LinkIcon",
  props: {
    color: {
      type: String,
      default() {
        return "currentColor";
      },
    },
  },
};
</script>
