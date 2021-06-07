import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Weather from './Weather';
import Pets from './Pets';
import Home from './Home';

 
class App extends React.Component {
render(){
return(
<Router >
<div>
<Route exact path="/" component={Home} />
<Route path="/Pets" component={Pets} />
<Route path="/Weather" component={Weather} />
</div>
</Router>
)
}
}
export default App;