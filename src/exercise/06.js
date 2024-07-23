// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const inputRef = React.useRef()
  const [error, setError] = React.useState()

  function handleSubmit(event) {
    event.preventDefault()
    const { value } = inputRef.current
    onSubmitUsername(value)
  }

  function handleChange(event) {
    const { value } = event.target
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input ref={inputRef} id='username' type="text" onChange={handleChange} />
        {error ? <p role="alert">{error}</p> : null}
      </div>
      <button type="submit" disabled={!!error}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
