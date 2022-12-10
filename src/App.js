import Home from "./routes/home/Home.component"
import NavigationBar from "./routes/navigation/NavigationBar"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path = '/' element ={<NavigationBar/>}>
        <Route index element = {<Home/>} />
      </Route>   
    </Routes>
  )
}

export default App;

