import React from 'react'
import classes from '../PhoneListHeader/PhoneListHeader.css'
const PhoneListHeader=(props)=>
{


if(props.length>=1)
{
return( 
  <div style={{width:'100%'}}>
  <div className={classes.Heading} >  Name </div>
   <div className={classes.Heading}> Phone </div>
  </div>
)
}
else{
    return <h3 className={classes.Nouser}>  No user to display </h3>;
}
}


export default PhoneListHeader