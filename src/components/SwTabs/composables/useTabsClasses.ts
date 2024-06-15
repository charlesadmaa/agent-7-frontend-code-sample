import { computed, type Ref } from 'vue'
import type { TabsVariant} from '../types'
import { twMerge } from 'tailwind-merge'




export type UseTabsClassesProps = {
  variant: TabsVariant,
}

export function useTabsClasses (props: UseTabsClassesProps): {
  divClasses: Ref<string>,
  ulClasses: Ref<string>,
} {
  const ulClasses = computed(() => {
    const baseClasses = 'flex flex-col space-y space-y-4 font-medium text-gray-800 dark:text-gray-400 text-sm'
    return twMerge(
      baseClasses,
      props.variant === 'underline' && '-mb-px',
      props.variant === 'default' && 'dark:border-gray-700',
    )
  })

  const divClasses = computed(() => {
    return  "md:flex dark:border-gray-700 font-medium text-gray-800 dark:text-gray-400 text-sm";
  })

  return {
    divClasses,
    ulClasses,
  }
}