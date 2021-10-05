import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { createContext, useEffect, useState } from 'react';
import useServices from './hooks/useServices/useServices';
import { getCart } from './utilities/localdb/localdb';
import SuccessPayment from './components/SuccessPayment/SuccessPayment';

export const CartContext = createContext('hi');

function App() {
	const [cart, setCart] = useState([]);
	const [services] = useServices();

	useEffect(() => {
		if (services.length) {
			const storedServices = getCart();
			let storedCart = [];
			for (const serviceId in storedServices) {
				const storedService = services.find(
					(service) => parseInt(serviceId) === service.id
				);
				storedCart.push(storedService);
			}
			setCart(storedCart);
		}
	}, [services]);

	return (
		<CartContext.Provider value={[cart, setCart]}>
			<div className='App'>
				<Router>
					<Header />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/home'>
							<Home />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/services'>
							<Services />
						</Route>
						<Route path='/blogs'>
							<Blogs />
						</Route>
						<Route path='/cart'>
							<Cart />
						</Route>
						<Route path='/success'>
							<SuccessPayment />
						</Route>
						<Route path='*'>
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</div>
		</CartContext.Provider>
	);
}

export default App;
