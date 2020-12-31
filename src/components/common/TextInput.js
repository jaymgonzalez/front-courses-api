import React from "react"

function TextInput(props) {
  let wrapperClass = "bg-gray-50 appearance-none border-2 w-full rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white border-gray-200 focus:border-lightblue-800"

  if (props.error && props.error.length > 0) {
    wrapperClass += " border-red-500"
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
        />
      </div>
      {props.error && <div className="pt-2 text-red-500 text-xs italic">{props.error}</div>}
    </div>
  )
}


export default TextInput
