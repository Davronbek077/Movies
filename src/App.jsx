import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Banner from './Components/Banner/Banner'
import Favorites from './Components/Favorites/Favorites'
import Horror from './Components/Horror/Horror'
import Footer from './Components/Footer/Footer'

const cardData = [
  {
  info1: "Real Steel (2011) is a futuristic film in which robots fight boxing in the future. Charlie Kenton, played by Hugh Jackman, controls his old robot in battles against new robots."
  },

  {
    info2: "Terminator 2: Judgment Day is a 1991 science fiction action film directed by James Cameron."
  },
  {
    info3: "In the film, John Wick continues to fight against a global high-level crime network in order to gain his freedom."
  },

  {
    info4: "Godzilla and Kong team up to fight a new threat. As the Titans' origins and the mysteries of Earth's history are revealed, the film offers an expanded adventure."
  }
];

function App() {

  return (

    <div>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Banner />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/horror' element={<Horror />} />
      </Routes>
      <Footer/>
    </div>
  )
}


export default App
