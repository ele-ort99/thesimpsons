import { useState } from 'react'
import CardApp from './components/CardApp'
import data from './data/data'
import './App.css'

function App() {
  const [mostrarCards, setMostrarCards] = useState(false)
  const [cards, setCards] = useState(data.slice(0, 3))
  const [cardVista, setCardVista] = useState(0)

  const handleChange = () => {
    const nextCardVista = cardVista + 3;
    setMostrarCards(true)
    if(nextCardVista >= data.length){
      setCardVista(0);
      setCards(data.slice(0, 3))
    } else {
      setCardVista(nextCardVista)
      setCards(data.slice(nextCardVista, nextCardVista + 3))
    }
    }


  return (
    <>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Simpsons_Logo.svg/1200px-The_Simpsons_Logo.svg.png" />
    <h2>Descubre las mejores frases 
      <br/>
      de tus personajes favoritos</h2>

    {mostrarCards ? <div><CardApp 
    cards={cards}>
    </CardApp>
    <button 
    style={{cursor:'pointer'}}
    className='button' 
    onClick={handleChange}>
      SIGUIENTE
    </button>
    </div>
    : <button 
    style={{cursor:'pointer'}}
    className='button' 
    onClick={handleChange}>
      ACCIÓN
    </button>}
  
    </>
  )
}

export default App
