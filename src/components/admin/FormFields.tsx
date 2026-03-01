'use client'

// ─── Submit button ─────────────────────────────────────

export function SubmitButton({
  label = 'Guardar',
  pendingLabel = 'Guardando...',
  pending = false,
}: {
  label?: string
  pendingLabel?: string
  pending?: boolean
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? pendingLabel : label}
    </button>
  )
}

// ─── Text input ────────────────────────────────────────

interface InputProps {
  name: string
  label: string
  defaultValue?: string
  type?: string
  required?: boolean
  placeholder?: string
}

export function FormInput({ name, label, defaultValue = '', type = 'text', required, placeholder }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-slate-300 rounded-sm text-sm focus:outline-none focus:border-roiba-dorado transition-colors"
      />
    </div>
  )
}

// ─── Textarea ──────────────────────────────────────────

interface TextareaProps {
  name: string
  label: string
  defaultValue?: string
  rows?: number
  placeholder?: string
}

export function FormTextarea({ name, label, defaultValue = '', rows = 4, placeholder }: TextareaProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-slate-300 rounded-sm text-sm focus:outline-none focus:border-roiba-dorado transition-colors resize-y"
      />
    </div>
  )
}

// ─── Select ────────────────────────────────────────────

interface SelectProps {
  name: string
  label: string
  defaultValue?: string
  options: { value: string; label: string }[]
}

export function FormSelect({ name, label, defaultValue = '', options }: SelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="w-full px-3 py-2 border border-slate-300 rounded-sm text-sm focus:outline-none focus:border-roiba-dorado transition-colors bg-white"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

// ─── Checkbox ──────────────────────────────────────────

interface CheckboxProps {
  name: string
  label: string
  defaultChecked?: boolean
}

export function FormCheckbox({ name, label, defaultChecked }: CheckboxProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        value="true"
        className="w-4 h-4 text-roiba-dorado border-slate-300 rounded focus:ring-roiba-dorado"
      />
      <span className="text-sm text-slate-700">{label}</span>
    </label>
  )
}

// ─── Error display ─────────────────────────────────────

export function FormError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <div className="bg-red-50 border border-red-200 px-4 py-3 rounded-sm text-red-700 text-sm">
      {message}
    </div>
  )
}

// ─── Success display ───────────────────────────────────

export function FormSuccess({ message }: { message?: string }) {
  if (!message) return null
  return (
    <div className="bg-green-50 border border-green-200 px-4 py-3 rounded-sm text-green-700 text-sm">
      {message}
    </div>
  )
}
