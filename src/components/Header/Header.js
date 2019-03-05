import React from 'react'
import classes from '../Header/Header.css'
const Header=(props)=>{

return ( <h2 className={classes.Header}> {props.headerValue} </h2>)


}
export default Header