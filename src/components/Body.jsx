import { useState } from "react"
import "./Body.css"
const Body = () => {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])

  function addTask() {
    const trimmed = input.trim()
    if (!trimmed) return
    setTasks((prev) => [...prev, trimmed])
    setInput("")
  }
  function deleteTask(index) {
    setTasks((prev) => prev.filter((_, i) => i !== index))
  }

  return (

    <div className='container'>
      <div className='bodyContainer'>
        <h2>To do List</h2>
        <div className="input">
          <input
            type="text"
            placeholder='Add task'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>add</button>
        </div>
        <ul>
          {tasks.map((t, i) => (
            <li key={i}>
              <p>{t}</p><button onClick={() => deleteTask(i)} className="delete">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Body
