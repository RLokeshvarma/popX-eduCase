interface Props {
  label: string
  placeholder: string
  type?: string
  required?: boolean
}

const Input = ({
  label,
  placeholder,
  type="text",
  required=false
}: Props) => {

  return (

    <div className="input-field">

      <label className="input-label">

        {label}

        {required && (
          <span className="required">*</span>
        )}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
      />

    </div>

  )
}

export default Input