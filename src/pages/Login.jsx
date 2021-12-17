import React, {useRef} from 'react';
import '@styles/Login.scss';

import logo from "@logos/logo_yard_sale.svg"

const Login = () => {
	const form = useRef(null)

	const handleSubmit = (event) => {
		event.preventDefault(); {/* Con esto eliminamos los comportamientos por defecto de las etiquetas html al surgir un evento en una etiqueta */}
		const formData = new FormData(form.current); {/* Aca se usa FormData como una forma de tomar los cambios efectuados en el form y poder construir un conjunto de llaves/valor para representar los diferentes campos del form y sus valores de los cuales podemos obtener cada uno de manera individual o varios a la vez segun queramos, con metodos como get o getAll */}
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		}
		console.log(data)
	}
	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}> {/* Aca le colocamos el key ref para anclar el form con el useRef de manera que cuando haya un cambio en elguno de los input el useRef lo pueda capturar */}
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" onClick={handleSubmit}>Log in</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;