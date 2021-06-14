import React from 'react';
import { Link } from 'react-router-dom';
 
class Home extends React.Component{
render(){
return(
<div>
<div>This is Pactera project Main page!</div>
<div>
<Link to="/Pets/" style={{color:'black'}}>
<div>点击跳转到Pets页面</div>
</Link>
<Link to="/Weather/" style={{color:'black'}}>
<div>点击跳转到Weather页面</div>
</Link>

</div>
</div>
);
}
}
 
export default Home;