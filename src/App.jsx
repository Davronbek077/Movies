import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Banner from './Components/Banner/Banner'
import Favorites from './Components/Favorites/Favorites'
import Horror from './Components/Horror/Horror'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Banner/>} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/horror' element={<Horror />} />
      </Routes>
      <Footer/>
    </div>
  )
}


export default App
