import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>Short<span>Any URL</span></h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>short it</button>
      </div>
    </div>
  )
}

export default InputShortener
