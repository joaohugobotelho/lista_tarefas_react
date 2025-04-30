import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]) // guardas as tarefas criadas
  const [text, setText] = useState('') // pegar o text digitado pelo usuário

  function handleCreateTask(e) {
    e.preventDefault()

    const newTask = {
      id: Date.now(),
      title: text,
    }

    setTasks([newTask, ...tasks])
  }

  function handleDeleteTask(id) {
    const updateTask = tasks.filter((item) => item.id !== id)

    setTasks(updateTask)
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <form>
        <input
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder='Digite uma tarefa'
        />

        <button className='btn' onClick={handleCreateTask}>Adicionar</button>
      </form>

      <div className='container'>
        {tasks.map((item) => (
          <section key={item.id}>
            <span>{item.title}</span>

            <button onClick={() => handleDeleteTask(item.id)}>Apagar</button>
          </section>
        ))}
      </div>
    </div>
  )
}

export default App