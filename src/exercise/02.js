// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

// 🐨 initialize the state to the value from localStorage
// 💰 window.localStorage.getItem('name') ?? initialName

// 🐨 Here's where you'll use `React.useEffect`.
// The callback should set the `name` in localStorage.
// 💰 window.localStorage.setItem('name', name)

import React, {useEffect, useState} from 'react'

function useLocalStorageState (key, defaultValue ='') {
  const [state, setState] = useState(
      () => window.localStorage.getItem(key) ?? defaultValue,
  )

  useEffect(() => {
    window.localStorage.setItem('key', state)
  },[key, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useState(useLocalStorageState('name', initialName))
  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Nathan"/>
}

export default App
