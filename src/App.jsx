import './App.css'
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { Sidebar } from './components/Sidebar/Sidebar';



function App() {
  return (
    
    <>
    <Header title="Creando y usando props" show={false}>
      <h2>Aqui estoy subtitulando el header mediante el prop</h2>
    </Header>

    <div style={{ display: 'flex', gap: '24px' }}>
      <Sidebar />
      <Section />
    </div>




    </>
  )
}

export default App;