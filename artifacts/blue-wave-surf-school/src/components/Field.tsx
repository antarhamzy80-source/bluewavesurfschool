import type { InputHTMLAttributes, Ref } from 'react';

export type RegistrationFieldConfig = {
  name: string;
  label: string;
  type: string;
  required: boolean;
};

type FieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'type' | 'required' | 'aria-invalid'> & {
  field: RegistrationFieldConfig;
  invalid: boolean;
  inputRef?: Ref<HTMLInputElement>;
  onFieldChange?: (name: string) => void;
};

export default function Field({
  field,
  invalid,
  inputRef,
  onFieldChange,
  onChange,
  ...props
}: FieldProps) {
  const id = `registration-${field.name}`;

  return (
    <div className="field">
      <label htmlFor={id}>
        {field.label}
        {field.required
          ? <span aria-hidden="true"> *</span>
          : <em> (optional)</em>}
      </label>
      <input
        id={id}
        ref={inputRef}
        name={field.name}
        type={field.type}
        required={field.required}
        aria-invalid={invalid}
        className={invalid ? 'invalid' : ''}
        onChange={(event) => {
          event.currentTarget.classList.remove('invalid');
          onFieldChange?.(field.name);
          onChange?.(event);
        }}
        {...props}
      />
    </div>
  );
}