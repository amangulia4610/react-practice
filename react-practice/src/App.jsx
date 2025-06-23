import { useState } from 'react'
import Nav from './components/nav'
import Todo from './components/todo'
import Counter from './components/counter'
import './App.css'
import Debounce from './components/debounce'

function App() {
    const users = ['Alice', 'Bob', 'Charlie', 'David'];
 return(
  <>
  <Todo />
  <Counter />
      <Debounce users={users} />

  </>
 )
}

export default App
