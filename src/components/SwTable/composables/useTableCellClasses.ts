import { computed, inject, type Ref } from 'vue'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

const baseClasses = 'px-4 py-3'
const stripedCellClasses = 'even:bg-gray-white even:dark:bg-gray-900 odd:dark:bg-gray-800 odd:bg-gray-50'

export function useTableCellClasses (tableCellClassProp: string): { tableCellClasses: Ref<string> } {
  const isColumnsStriped = inject('stripedColumns')

  const tableCellClasses = computed(() => {
    return twMerge(
      classNames(
        baseClasses,
        { [stripedCellClasses]: isColumnsStriped },
      ),
      tableCellClassProp,
    )
  })

  return { tableCellClasses }
}