import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from './components/Header';
import Erro from './pages/Erro';

function RoutesApp() {
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ <Home/> } >Home</Route>
            <Route path='/filme/:id' element={ <Filme/> } >Filme</Route>
            
            <Route path='*' element={ <Erro/>} ></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default RoutesApp;