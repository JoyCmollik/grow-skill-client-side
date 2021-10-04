import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';

function App() {
	return (
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
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
