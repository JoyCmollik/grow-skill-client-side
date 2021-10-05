const addToCart = (item) => {
	let cart = getCart();

	if (cart[item]) {
		cart[item] += 1;
	} else {
		cart[item] = 1;
	}
	setCart(cart);
};

const getCart = () => {
	const cart = localStorage.getItem('cart');
	if (cart) {
		return JSON.parse(cart);
	}
	return {};
};

const setCart = (cart) => {
	const dbStringified = JSON.stringify(cart);

	localStorage.setItem('cart', dbStringified);
};

const removeFromCart = (item) => {
	const cart = getCart('cart');
	if (cart && cart[item]) {
		delete cart[item];
		setCart(cart);
	}
};

const removeCart = () => {
	localStorage.removeItem('cart');
};

export { addToCart, getCart, removeFromCart, removeCart };
