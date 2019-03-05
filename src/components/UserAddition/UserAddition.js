import React from 'react'
import {Link} from 'react-router-dom'
import classes from './UserAddition.css'
import Header from '../Header/Header.js'

class UserAddition extends React.Component{
constructor(props)
{
    super(props)
    this.name=React.createRef();
this.phone=React.createRef();
this.nameshow=React.createRef();
this.phoneshow=React.createRef();
}

addUser(event)
{
   
   
   if(this.phone.current.value===""||this.name.current.value==="")
 
 {

     alert('username or phone cant be empty')

 }

 else
 {
var isnum = /^\d+$/.test(this.phone.current.value);

if(isnum)
{
this.props.addUser(this.name.current.value, this.phone.current.value)
}
else
{
    alert('not valid number')
}
 }

}

nameChange()
{
this.nameshow.current.innerText=this.name.current.value;

}
phoneChange()
{
this.phoneshow.current.innerText=this.phone.current.value;

}



render() { 
    return (
<React.Fragment>
    <Header headerValue="Add User"></Header>
<Link to='/'> <div className={classes.Back}> Back </div></Link>
<form className={classes.Form}>
   <span className={classes.Label}> Name: </span> <br></br><input className={classes.Input}  onChange={this.nameChange.bind(this)} type='text' ref={this.name} ></input><br></br>
    <span className={classes.Label}> Phone Number: </span><br></br> <input className={classes.Input} onChange={this.phoneChange.bind(this)} type='text'   ref={this.phone}></input><br></br>
<Link to='/'>    <div className={classes.Addcontact} onClick={this.addUser.bind(this)}> Add contact</div></Link>
</form>

<h3 className={classes.Subs}>Subscriber to be added:</h3>
<div style={{ marginTop: '10px' }}>
    <div className={classes.Show}> Name:  <span ref={this.nameshow}> </span></div>
<div className={classes.Show}> Phone:  <span ref={this.phoneshow}> </span></div>
</div>


</React.Fragment>

    )
}}
export default UserAddition