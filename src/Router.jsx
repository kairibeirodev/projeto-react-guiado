import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './Pages/Sobre'
import Portfolio from './Pages/Portfolio'
import Contato from './pages/Contato'
import Footer from './components/Footer'


const Router = () => {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contato" element={<Contato />}/>
    </Routes>
    <Footer content="Feito com ♡ por Kathleen Ribeiro."/>
    </BrowserRouter>
  )
}

export default Router