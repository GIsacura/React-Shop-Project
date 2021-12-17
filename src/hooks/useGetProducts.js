import axios from "axios";
import { useEffect, useState } from "react";


const useGetProducts = (Api) =>{
    const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(Api);
		setProducts(response.data)
	}, []);
    return products
};

export default useGetProducts