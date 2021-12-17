import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//BrowserRouter para identificar la navegacion que estamos teniendo, hacia adelante o hacia atras en nuestro pagina; Routes nos va a permitir tener una estructura de control para cada una de las rutas que vamos a tener; Route la ruta que estamos trabajando; todo para de esta manera crear el valor que nos permita saber donde estoy, hacia donde me voy a mover y donde quiere estar el usuario
//En el curso en vez de Routes el profesor usa Switch, pero en las ultimas versiones se cambio a Routes
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from "../context/AppContext";
import Header from '../components/Header';
import useInitialState from '../hooks/useInitialState'
import '@styles/global.css';


const App = () =>{
    const initialState = useInitialState()
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter> {/* Este elemento lo colacamos en la parte mas externa porque con el indicamos que parte de la aplicacion utliza el router */}
                <Layout>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Home />}/> {/*Route recibe unos parametros que le diran como comportarse internamente; exact le indica que buscara sobre es ruta exacta, path le dira que ruta es la buscara; element le dira que elemente mostrar*/}
                        <Route exact path="/login" element={<Login/>} />
                        <Route exact path="/password-recovery" element={<PasswordRecovery/>} />
                        <Route exact path="/send-email" element={<SendEmail/>} />
                        <Route exact path="/new-password" element={<NewPassword/>} />
                        <Route exact path="/account" element={<MyAccount/>} />
                        <Route exact path="/signup" element={<CreateAccount/>} />
                        <Route exact path="/checkout" element={<Checkout/>} />
                        <Route exact path="/orders" element={<Orders/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App