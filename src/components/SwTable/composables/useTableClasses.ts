import { computed, type Ref } from 'vue'
import { twMerge } from 'tailwind-merge'

const baseClasses = 'w-full text-sm text-left text-gray-500 dark:text-gray-400'

export function useTableClasses (tableClassProp: string ): { tableClasses: Ref<string> } {

  const tableClasses = computed(() => {
    return twMerge(
      baseClasses,
      tableClassProp,
    )
  })

  return { tableClasses }
}