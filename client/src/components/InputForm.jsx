import React from 'react'

const InputForm = ({ name, label, type, placeholder }) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="input input-bordered w-full"
      />
    </label>
  )
}

export default InputForm
