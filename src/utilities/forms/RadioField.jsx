const RadioField = ({ id, value, label, name, onClick, register }) => {
  return (
    <div className="flex justify-start">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="mr-2 h-4"
        onClick={onClick}
        {...register(name, { required: true })}
      />
      <label htmlFor={id} className="text-sm text-gray">
        {label}
      </label>
    </div>
  )
}

export default RadioField