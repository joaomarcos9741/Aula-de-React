import { List } from "./components/List"
import { useState } from "react"
function App() {

  const [projects, setProjects] = useState<string[]>([]);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }
  return(
    <>
      <header>Conteúdo da Home</header>
      <main>
        <ul>
          {projects.map(item => <List key={item}>{item}</List>)}
        </ul>
        <button onClick={handleAddProject}>Adicionar</button>
      </main>
    </>
  )
}

export default App
