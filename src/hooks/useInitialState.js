import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });{/* Con la primera linea  le indicamos que mantenga el estado que tiene ya que pudiera haber otra informacion importante que queremos mantener, en la segunda linea como se va a modificar el cart para agregar objetos, con el primer para metro indicamos que mantenga lo que ya estaba anteriormente en el carrito y con el segundo parametro estamos agregando algun producto */}
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id =! payload.id)
        })
    }

    return{
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState
