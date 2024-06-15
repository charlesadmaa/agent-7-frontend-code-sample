export type InputSize = 'sm' | 'md' | 'lg'

export interface OptionsType  {
  name: string|number,
  value: string,
}

export const validationStatusMap = {
  Success: 'success',
  Error: 'error',
} as const

export type ValidationStatus = typeof validationStatusMap[keyof typeof validationStatusMap]