import React from 'react'

const InputField = ({text, handleInput, handleSubmit}) => {
  return (
    <label className="App-form">
    <input 
      value={text}
      onChange={(e) => handleInput(e.target.value)}
    />
    <button
      type="button"
      onClick={handleSubmit}
    >
        Add Todo
    </button>
  </label>
  )
}

export default InputField