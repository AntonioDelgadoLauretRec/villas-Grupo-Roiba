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
      className="inline-flex items-center gap-2 px-6 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-all duration-200 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending && (
        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
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
  helpText?: string
  prefix?: string
}

export function FormInput({ name, label, defaultValue = '', type = 'text', required, placeholder, helpText, prefix }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {prefix ? (
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-slate-300 bg-slate-50 text-slate-400 text-sm rounded-l-sm">
            {prefix}
          </span>
          <input
            id={name}
            name={name}
            type={type}
            defaultValue={defaultValue}
            required={required}
            placeholder={placeholder}
            className="flex-1 px-3 py-2.5 border border-slate-300 rounded-r-sm text-sm focus:outline-none focus:border-roiba-dorado focus:ring-1 focus:ring-roiba-dorado/20 transition-all"
          />
        </div>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
          className="w-full px-3 py-2.5 border border-slate-300 rounded-sm text-sm focus:outline-none focus:border-roiba-dorado focus:ring-1 focus:ring-roiba-dorado/20 transition-all"
        />
      )}
      {helpText && (
        <p className="mt-1 text-xs text-slate-400">{helpText}</p>
      )}
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
  helpText?: string
  maxLength?: number
}

export function FormTextarea({ name, label, defaultValue = '', rows = 4, placeholder, helpText, maxLength }: TextareaProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full px-3 py-2.5 border border-slate-300 rounded-sm text-sm focus:outline-none focus:border-roiba-dorado focus:ring-1 focus:ring-roiba-dorado/20 transition-all resize-y"
      />
      {helpText && (
        <p className="mt-1 text-xs text-slate-400">{helpText}</p>
      )}
    </div>
  )
}

// ─── Select ────────────────────────────────────────────

interface SelectProps {
  name: string
  label: string
  defaultValue?: string
  options: { value: string; label: string; description?: string }[]
  helpText?: string
}

export function FormSelect({ name, label, defaultValue = '', options, helpText }: SelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="w-full px-3 py-2.5 border border-slate-300 rounded-sm text-sm focus:outline-none focus:border-roiba-dorado focus:ring-1 focus:ring-roiba-dorado/20 transition-all bg-white appearance-none cursor-pointer"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {helpText && (
        <p className="mt-1 text-xs text-slate-400">{helpText}</p>
      )}
    </div>
  )
}

// ─── Checkbox ──────────────────────────────────────────

interface CheckboxProps {
  name: string
  label: string
  defaultChecked?: boolean
  helpText?: string
}

export function FormCheckbox({ name, label, defaultChecked, helpText }: CheckboxProps) {
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          value="true"
          className="mt-0.5 w-4 h-4 text-roiba-dorado border-slate-300 rounded focus:ring-roiba-dorado"
        />
        <div>
          <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{label}</span>
          {helpText && (
            <p className="text-xs text-slate-400 mt-0.5">{helpText}</p>
          )}
        </div>
      </label>
    </div>
  )
}

// ─── Section header inside forms ───────────────────────

export function FormSection({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
        {description && <p className="text-xs text-slate-400 mt-0.5">{description}</p>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

// ─── Error display ─────────────────────────────────────

export function FormError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <div className="flex items-start gap-3 bg-red-50 border border-red-200 px-4 py-3 rounded-sm text-red-700 text-sm">
      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
      <span>{message}</span>
    </div>
  )
}

// ─── Success display ───────────────────────────────────

export function FormSuccess({ message }: { message?: string }) {
  if (!message) return null
  return (
    <div className="flex items-start gap-3 bg-green-50 border border-green-200 px-4 py-3 rounded-sm text-green-700 text-sm">
      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <span>{message}</span>
    </div>
  )
}

// ─── Slug auto-generator ───────────────────────────────

export function SlugInput({
  name = 'slug',
  label = 'Slug (URL)',
  defaultValue = '',
  titleFieldId = 'title',
}: {
  name?: string
  label?: string
  defaultValue?: string
  titleFieldId?: string
}) {
  function generateSlug() {
    const titleInput = document.getElementById(titleFieldId) as HTMLInputElement
    const slugInput = document.getElementById(name) as HTMLInputElement
    if (!titleInput || !slugInput) return

    const slug = titleInput.value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    slugInput.value = slug
  }

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label} <span className="text-red-400">*</span>
      </label>
      <div className="flex gap-2">
        <div className="flex flex-1">
          <span className="inline-flex items-center px-3 border border-r-0 border-slate-300 bg-slate-50 text-slate-400 text-xs rounded-l-sm">
            /villas/
          </span>
          <input
            id={name}
            name={name}
            type="text"
            defaultValue={defaultValue}
            required
            placeholder="villa-excellence"
            pattern="^[a-z0-9-]+$"
            className="flex-1 px-3 py-2.5 border border-slate-300 rounded-r-sm text-sm focus:outline-none focus:border-roiba-dorado focus:ring-1 focus:ring-roiba-dorado/20 transition-all"
          />
        </div>
        <button
          type="button"
          onClick={generateSlug}
          className="px-3 py-2 border border-slate-300 rounded-sm text-xs text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors whitespace-nowrap"
          title="Generar automáticamente desde el título"
        >
          Auto-generar
        </button>
      </div>
      <p className="mt-1 text-xs text-slate-400">
        Identificador único para la URL. Solo minúsculas, números y guiones.
      </p>
    </div>
  )
}
