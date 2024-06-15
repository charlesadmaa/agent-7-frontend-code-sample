<template>
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.95898 8.95935V5.59998H5.59961V8.95935H8.95898ZM13.959 5.59998H10.5996V8.95935H13.959V10.6H10.5996V13.9594H8.95898V10.6H5.59961V13.9594H3.95898V10.6H0.599609V8.95935H3.95898V5.59998H0.599609V3.95935H3.95898V0.599976H5.59961V3.95935H8.95898V0.599976H10.5996V3.95935H13.959V5.59998Z"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: "TagIcon",
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
