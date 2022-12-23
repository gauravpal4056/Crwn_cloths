import Home from "./routes/home/Home.component"
import NavigationBar from "./routes/navigation/NavigationBar"
import {Routes, Route} from "react-router-dom"
import Signin from "./routes/signin/Signin"

function App() {
  return (
    <Routes>
      <Route path = '/' element ={<NavigationBar/>}>
        <Route index element = {<Home/>} />
        <Route path = '/signin' element = {<Signin />} />
      </Route>   
    </Routes>
  )
}

export default App;

