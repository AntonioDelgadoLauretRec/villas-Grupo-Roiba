'use client'

import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/* ===== INPUT ===== */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  variant?: 'light' | 'dark'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, variant = 'light', className, id, ...props }, ref) => {
    const inputId = id || props.name

    const baseStyles = `
      w-full px-4 py-3 rounded-sm text-base
      transition-all duration-200
      focus:outline-none focus:ring-1
    `

    const variants = {
      light: `
        bg-white border border-roiba-verde/20 text-roiba-verde
        placeholder:text-roiba-verde/50
        focus:border-roiba-dorado focus:ring-roiba-dorado
      `,
      dark: `
        bg-roiba-verde-light border border-roiba-arena/20 text-roiba-arena
        placeholder:text-roiba-arena/50
        focus:border-roiba-dorado focus:ring-roiba-dorado
      `,
    }

    const errorStyles = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : ''

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-2',
              variant === 'dark' ? 'text-roiba-arena' : 'text-roiba-verde'
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(baseStyles, variants[variant], errorStyles, className)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p
            id={`${inputId}-hint`}
            className={cn(
              'mt-1 text-sm',
              variant === 'dark' ? 'text-roiba-arena/60' : 'text-roiba-verde/60'
            )}
          >
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

/* ===== SELECT ===== */
export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
  variant?: 'light' | 'dark'
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, variant = 'light', className, id, ...props }, ref) => {
    const selectId = id || props.name

    const baseStyles = `
      w-full px-4 py-3 rounded-sm text-base appearance-none cursor-pointer
      transition-all duration-200
      focus:outline-none focus:ring-1
      bg-no-repeat bg-[right_1rem_center] bg-[length:1.25rem]
    `

    const variants = {
      light: `
        bg-white border border-roiba-verde/20 text-roiba-verde
        focus:border-roiba-dorado focus:ring-roiba-dorado
        bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23122620%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')]
      `,
      dark: `
        bg-roiba-verde-light border border-roiba-arena/20 text-roiba-arena
        focus:border-roiba-dorado focus:ring-roiba-dorado
        bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23F4EBD0%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')]
      `,
    }

    const errorStyles = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : ''

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              'block text-sm font-medium mb-2',
              variant === 'dark' ? 'text-roiba-arena' : 'text-roiba-verde'
            )}
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(baseStyles, variants[variant], errorStyles, className)}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

/* ===== CHECKBOX ===== */
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  error?: string
  variant?: 'light' | 'dark'
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, variant = 'light', className, id, ...props }, ref) => {
    const checkboxId = id || props.name

    return (
      <div className="w-full">
        <label htmlFor={checkboxId} className="flex items-start gap-3 cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              'mt-1 h-5 w-5 rounded border-2 cursor-pointer',
              'focus:ring-2 focus:ring-roiba-dorado focus:ring-offset-2',
              'checked:bg-roiba-dorado checked:border-roiba-dorado',
              variant === 'dark'
                ? 'border-roiba-arena/30 bg-transparent'
                : 'border-roiba-verde/30 bg-white',
              error && 'border-red-500',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            {...props}
          />
          <span
            className={cn(
              'text-sm leading-relaxed',
              variant === 'dark' ? 'text-roiba-arena/80' : 'text-roiba-verde/80'
            )}
          >
            {label}
          </span>
        </label>
        {error && (
          <p className="mt-1 text-sm text-red-500 ml-8" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

/* ===== TEXTAREA ===== */
export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
  variant?: 'light' | 'dark'
  rows?: number
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, variant = 'light', rows = 4, className, id, ...props }, ref) => {
    const textareaId = id || (props.name as string)

    const baseStyles = `
      w-full px-4 py-3 rounded-sm text-base resize-none
      transition-all duration-200
      focus:outline-none focus:ring-1
    `

    const variants = {
      light: `
        bg-white border border-roiba-verde/20 text-roiba-verde
        placeholder:text-roiba-verde/50
        focus:border-roiba-dorado focus:ring-roiba-dorado
      `,
      dark: `
        bg-roiba-verde-light border border-roiba-arena/20 text-roiba-arena
        placeholder:text-roiba-arena/50
        focus:border-roiba-dorado focus:ring-roiba-dorado
      `,
    }

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              'block text-sm font-medium mb-2',
              variant === 'dark' ? 'text-roiba-arena' : 'text-roiba-verde'
            )}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            baseStyles,
            variants[variant],
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...(props as any)}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p
            className={cn(
              'mt-1 text-sm',
              variant === 'dark' ? 'text-roiba-arena/60' : 'text-roiba-verde/60'
            )}
          >
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Input, Select, Checkbox, Textarea }
