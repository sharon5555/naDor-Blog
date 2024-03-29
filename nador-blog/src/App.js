import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
    

  return (
      <Router>
      <div className="App">
      <Navbar />
        <div className="content">
        <switch>
        <Route  exact path = "/">
        <Home />
        </Route>
        <Route path = "/Create">
        <Create />
        </Route>
        <Route path = "/blogs/:id">
        <BlogDetails />
        </Route>
        </switch>
        </div>
      </div>
      </Router>
    
  );
}

export default App;
