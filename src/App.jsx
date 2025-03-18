import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Classification from './pages/Classification';

function App() {

  return (
	<Router>
		<Routes>
			<Route path="/" element={<Login/>} />
      		<Route path="/home" element={<Home />} />
			<Route path="/register" element={<Register />} />
			<Route path="/classification" element={<Classification />} />
		</Routes>
	</Router>
  )
}

export default App
