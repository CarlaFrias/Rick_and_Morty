import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import characters from './data.js'
import Nav from './components/Nav.jsx'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
        <Nav/>
      <hr/>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
    </div>
  )
}

export default App
