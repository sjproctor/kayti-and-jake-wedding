const FormField = ({
  id,
  type,
  name,
  label,
  required = false,
  autoComplete,
  className = "w-full",
  register,
  errors,
  ...props
}) => {
  return (
    <fieldset className="group">
      <input
        id={id}
        type={type}
        name={name}
        autoComplete={autoComplete}
        className={`bg-transparent focus:border-blue-600 peer block appearance-none border-0 border-b-2 border-r-0 px-0 py-2.5 text-sm text-gray focus:outline-none focus:ring-0 ${className}`}
        {...register(name, { required })}
        {...props}
      />
      <div className="text-left">
        <label htmlFor={id} className="text-sm text-gray">
          {label} {required && "*"}
        </label>
      </div>
      {errors[name] && errors[name].type === "required" && (
        <p className="text-left text-sm text-error">
          Please enter your {label.toLowerCase()}
        </p>
      )}
    </fieldset>
  )
}
export default FormField
