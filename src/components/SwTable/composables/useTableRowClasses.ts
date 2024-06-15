import { computed, inject, type Ref } from "vue";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

const baseClasses = "border-b dark:border-gray-700";
const stripedClasses =
  "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700";
const hoverableClasses = "hover:bg-gray-50 dark:hover:bg-gray-600";

export function useTableRowClasses(): { tableRowClasses: Ref<string> } {
  const isStriped = inject("striped");
  const isHoverable = inject("hoverable");


  const tableRowClasses = computed(() =>
  classNames(baseClasses, {
    [hoverableClasses]: isHoverable,
    [stripedClasses]: isStriped,
  })
  );
  return { tableRowClasses };
}
