import { computed, type Ref } from "vue";
import { twMerge } from "tailwind-merge";
import { TranslationPositionMap, TranslatorPositionType } from "../types";

// Classes
const defaultTranslatorClasses = "z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700";
const sidebarTranslatorClasses = "flex flex-col group/item  text-center items-center p-2 text-gray-400 rounded-lg transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-whit dark:hover:bg-gray-700";

export type UseTranslatorClassesProps = {
    position: Ref<TranslatorPositionType | undefined>
  }

export function useTranslatorClasses(props: UseTranslatorClassesProps): {
  translatorClasses: Ref<string>;
} {
  const translatorClasses = computed(() => {
    const vs = props.position.value;

    const classByPosition =
      vs === TranslationPositionMap.default
        ? defaultTranslatorClasses
        : vs === TranslationPositionMap.sidebar
        ? sidebarTranslatorClasses
        : "";

    return twMerge(
        classByPosition,
    );
  });

  return {
    translatorClasses,
  }
}
