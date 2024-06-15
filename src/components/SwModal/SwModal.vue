<template>
  <div>
    <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40" />
    <div
      ref="modalRef"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
      tabindex="0"
      @click.self="clickOutside"
      @keyup.esc="closeWithEsc"
    >
      <div
        :class="modalWrapperClass"
      >
        <!-- Modal content -->
        <div :class="modalWrapperClassInner">
          <!-- Alternative close modal when showHeader = true -->
          <button @click="closeModal" v-if="!showHeader" type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>

          <!-- Modal header -->
          <div
            v-if="showHeader"
            :class="$slots.header ? 'border-gray-200 dark:border-gray-600 ml-3 text-lg' : ''"
            class="p-4 rounded-t flex justify-between items-center"
          >
            <slot name="header" />
            <button
              v-if="!persistent"
              aria-label="close"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              type="button"
              @click="closeModal"
            >
              <slot name="close-icon">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  clip-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fill-rule="evenodd"
                /></svg>
              </slot>
            </button>
          </div>
          <!-- Modal body -->
          <div
            :class="$slots.header ? '' : 'pt-0'"
            class="pl-6 pt-3 pr-6 pb-6" 
          >
            <slot name="body" />
          </div>
          <!-- Modal footer -->
          <div
            v-if="$slots.footer"
            class="p-6 rounded-b border-gray-200 border-t dark:border-gray-600"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, type Ref} from 'vue'
import type { ModalSize } from './types'

interface ModalProps {
  notEscapable?: boolean,
  persistent?: boolean
  size?: ModalSize,
  showHeader?: boolean
}

const props = withDefaults(defineProps<ModalProps>(), {
  notEscapable: false,
  persistent: false,
  size: '2xl',
  showHeader: true
})

const emit = defineEmits(['close', 'click:outside'])
const modalSizeClasses = {
  xs: 'min-w-[20rem]',
  sm: 'min-w-[24rem]',
  md: 'min-w-[28rem]',
  lg: 'min-w-[32rem]',
  xl: 'min-w-[36rem]',
  '2xl': 'min-w-[42rem]',
  '3xl': 'min-w-[48rem]',
  '4xl': 'min-w-[56rem]',
  '5xl': 'min-w-[64rem]',
  '6xl': 'min-w-[72rem]',
  '7xl': 'min-w-[80rem]',
  'full': 'h-screen w-full',
}

function closeModal () {
  emit('close')
}
function clickOutside () {
  if (!props.persistent) {
    emit('click:outside')
    closeModal()
  }
}

function closeWithEsc () {
  if (!props.notEscapable && !props.persistent) closeModal()
}
const modalRef: Ref<HTMLElement | null> = ref(null)
onMounted(() => {
  if (modalRef.value) {
    modalRef.value.focus()
  }
})
 
const modalSizeClass = modalSizeClasses[props.size];
const modalWrapperClass = computed(() => {
  console.log(modalSizeClass)
  if (props.size === 'full'){
    return `${modalSizeClass} relative w-full h-full`;
  } else {
    return `${modalSizeClass} relative p-4 md:h-auto`;
  }
})

const defaultModalWrapperClassInner = "relative bg-white shadow dark:bg-gray-700";
const modalWrapperClassInner = computed(() => {
  if (props.size === 'full'){
    return `${defaultModalWrapperClassInner} h-full`;
  } else {
    return `${defaultModalWrapperClassInner} rounded-lg`;
  }
})



</script>
