import { simplifyTailwindClasses } from '@/utils/simplifyTailwindClasses'
import { computed } from 'vue'

const textareaWrapperClasses = 'block w-full mb-4 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600'
const textareaDefaultClasses = 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-transparent focus:border-[2px] rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
const textareaLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
const textareaFooterClasses = 'block py-2 px-3 border-gray-200 dark:border-gray-600'

export function useTextareaClasses (custom: boolean) {
  const textareaClasses = computed(() => simplifyTailwindClasses(
    textareaDefaultClasses,
    custom ? 'bg-white dark:bg-gray-800 border-none' : 'border',
  ))

  const labelClasses = computed(() => textareaLabelClasses)
  const wrapperClasses = computed(() => (custom) ? textareaWrapperClasses : '')
  const footerClasses = computed(() => textareaFooterClasses)

  return {
    textareaClasses,
    labelClasses,
    wrapperClasses,
    footerClasses,
  }
}