<template>
  <div ref="wrapper" class="inline-flex relative">
    <div class="inline-flex items-center">
      <sw-slot-listener @click="onToggle">
        <slot name="trigger">
          <sw-button
            :disabled="disabled"
            :class="buttonclass"
            :color="buttonColor"
            ref="reference"
          >
            <slot name="title"> </slot>
            <template v-if="showDropDownArrow" #suffix>
              <svg
                :class="dropDownArrowClass"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </template>
          </sw-button>
        </slot>
      </sw-slot-listener>
    </div>
    <transition :name="transitionName">
      <div
        v-if="visible"
        ref="content"
        :class="[contentClasses]"
        :style="contentStyles"
      >
        <sw-slot-listener @click="onHide">
          <slot class="unset" />
        </sw-slot-listener>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, toRef } from "vue";
import { onClickOutside } from "@vueuse/core";
import type { DropdownPlacement } from "./types";
import SwButton from "@/components/SwButton/SwButton.vue";
import SwSlotListener from "@/components/utils/SwSlotListener/SwSlotListener.vue";
import { useDropdownClasses } from "./composables/useDropdownClasses";
import type { ButtonVariant } from "@/components/SwButton/types";

const visible = ref(false);
const onHide = () => {
  if (props.closeInside) visible.value = false;
};
function hideDropdown(){
  visible.value = false;
}

const onToggle = () => (visible.value = !visible.value);

const props = withDefaults(
  defineProps<{
    placement?: DropdownPlacement;
    text?: string;
    transition?: string;
    closeInside: boolean;
    buttonColor?: ButtonVariant;
    buttonclass?: string;
    showDropDownArrow?: boolean;
    disabled?: boolean;
    dropDownType?: string;
  }>(),
  {
    placement: "bottom",
    text: "",
    transition: "",
    closeInside: false,
    buttonColor: "default",
    buttonclass: "",
    showDropDownArrow: true,
    disabled: false,
    dropDownType: "button",
  }
);

const placementTransitionMap: Record<DropdownPlacement, string> = {
  bottom: "to-bottom",
  left: "to-left",
  right: "to-right",
  top: "to-top",
};

const transitionName = computed(() => {
  if (props.transition === null) return placementTransitionMap[props.placement];
  return props.transition;
});

const content = ref<HTMLDivElement>();
const wrapper = ref<HTMLDivElement>();

const { contentClasses, contentStyles } = useDropdownClasses({
  placement: toRef(props, "placement"),
  visible,
  contentRef: content,
});

onClickOutside(wrapper, () => {
  if (!visible.value) return;
  visible.value = false;
});

const dropDownArrowClass = computed( () => {
  if(!visible.value ){
    return "w-4 h-4 ml-2 transition ease-in-out delay-150";
  } else {
    return "w-4 h-4 ml-2 rotate-180 transition ease-in-out delay-150";
  }
})

defineExpose({
  hideDropdown
})

</script>

<style scoped>
/* transitions */
.to-bottom-enter-active,
.to-bottom-leave-active,
.to-left-enter-active,
.to-left-leave-active,
.to-right-enter-active,
.to-right-leave-active,
.to-top-enter-active,
.to-top-leave-active {
  transition: all 250ms;
}

/* to top */
.to-top-enter-active,
.to-top-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.to-top-leave,
.to-top-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* to right */
.to-right-enter-active,
.to-right-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
.to-right-leave,
.to-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* to bottom */
.to-bottom-enter-active,
.to-bottom-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.to-bottom-leave,
.to-bottom-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* to left */
.to-left-enter-active,
.to-left-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
.to-left-leave,
.to-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
