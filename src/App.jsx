import './App.css'
import { Routes, Route } from "react-router-dom";
import { LandingPage, Login, SignUp } from './page'



const App = () => {
  return (
    <div className="h-screen" >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
