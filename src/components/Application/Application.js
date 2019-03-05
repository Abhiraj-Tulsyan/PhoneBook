import React from 'react'
import Header from '../Header/Header.js'
import Add from '../Add/Add.js'
import {Link} from 'react-router-dom'
import PhoneList from '../PhoneList/PhoneList.js'
class Application extends React.Component{


render() 
{
console.log(this.state)    
return ( 
<React.Fragment>
<Header headerValue='PhoneApp'></Header>
<Link to='/add'><Add></Add></Link>
<PhoneList deleteUser={this.props.deleteUser}store={this.props.store}></PhoneList>
</React.Fragment>

)}}

export default Application