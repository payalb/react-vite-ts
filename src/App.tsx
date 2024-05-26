import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

export function App() {
  
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "*" element = {<NotFound/>}></Route> 
      </Routes>
    </>
  )
}

export function WrappedApp(){
  return <HashRouter><App/></HashRouter>
}


