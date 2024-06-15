<template>
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7L7 17M7 7L17 17" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>

<script lang="ts">
export default {
  name: "TimesIcon",
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
