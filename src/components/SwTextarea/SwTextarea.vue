<template>
  <label>
    <span v-if="showLabel" :class="labelClasses">{{ label }}</span>
    <span :class="wrapperClasses">
      <textarea
        v-model="model"
        v-bind="$attrs"
        :class="textareaClasses"
        :rows="rows"
        :placeholder="placeholder"
        ref="commentAreaTextBox"
        @keyup="resizeCommentAreaHeight"
        autocomplete="off"
        maxlength="1000"
      />
      <span v-if="$slots.footer" :class="footerClasses">
        <slot name="footer" />
      </span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useTextareaClasses } from "./composables/useTextareaClasses";

interface TextareaProps {
  modelValue?: string;
  label?: string;
  rows?: number;
  custom?: boolean;
  placeholder?: string;
  canGrow?: boolean;
  showLabel?: boolean
}

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: "",
  label: "Your message",
  rows: 4,
  custom: false,
  placeholder: "Write your message here...",
  canGrow: false,
  showLabel: false
});

const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    console.log(val);
    emit("update:modelValue", val);
  },
});

const { textareaClasses, labelClasses, wrapperClasses, footerClasses } =
  useTextareaClasses(props.custom);

const commentAreaTextBox = ref();

function calcHeight(value: string) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight < 120 ? newHeight : 120;
}

function resizeCommentAreaHeight(event: KeyboardEvent) {
  if (props.canGrow) {
    const eventValue = <HTMLInputElement>event.target; //Type cast event as HTMLInputElement https://stackoverflow.com/questions/63631069/what-are-types-for-input-events-in-vue
    commentAreaTextBox.value.style.height = calcHeight(eventValue.value) + "px";
  }
}
</script>
