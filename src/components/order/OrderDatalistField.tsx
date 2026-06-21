import type { ReactNode } from 'react';

type OrderDatalistFieldProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  'aria-invalid'?: boolean;
  'data-node-id'?: string;
  chevron?: ReactNode;
};

export default function OrderDatalistField({
  id,
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  className = '',
  'aria-invalid': ariaInvalid,
  'data-node-id': dataNodeId,
  chevron,
}: OrderDatalistFieldProps) {
  const listId = `${id}-list`;

  return (
    <>
      <input
        id={id}
        type="text"
        list={listId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        aria-invalid={ariaInvalid}
        className={className}
        data-node-id={dataNodeId}
      />
      <datalist id={listId}>
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
      {chevron}
    </>
  );
}
