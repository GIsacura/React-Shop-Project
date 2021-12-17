import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext'

import addToCartImage from "@icons/bt_add_to_cart.svg"

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = (item) =>{
		addToCart(item); {/* Con esta funcion handleCLick al activarse dando click en la figura de agregar al carrito hacemos un llamado interno a la funcion addToCart del AppContext agrgando el producto que continen el button al que se le desencadeno el evento de click */}
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addToCartImage} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;