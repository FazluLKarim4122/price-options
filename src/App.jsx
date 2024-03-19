
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <DaisyNav></DaisyNav>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones></Phones>

    </>
  )
}

export default App
