import React from 'react'
import classes from '../PhoneItem/PhoneItem.css'
class PhoneItem extends React.Component{

deleteUser=()=>
{
this.props.deleteUser(this.props.id)
}

render(){
return (
<div style={{width:'100%', paddingTop:'20px', textAlign:'center'}}>
 <div className={classes.Name}>{ this.props.userName} </div>
<div className={classes.Number}>  { this.props.phoneNumber}  </div> 
<div className={classes.Buttonspace}> <div className={classes.Deletebutton} onClick={this.deleteUser}>Delete</div></div>
</div>
)



}}


export default PhoneItem