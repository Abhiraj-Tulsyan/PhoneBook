import React from 'react'
import PhoneItem from '../PhoneList/PhoneItem/PhoneItem.js'
import PhoneListHeader from './PhoneListHeader/PhoneListHeader.js'
class PhoneList extends React.Component{



render()
{
let phoneList= this.props.store.map(( item ) => {  return  <PhoneItem id={item.id} phoneNumber={item.phoneNumber} userName={item.userName} key={item.id} deleteUser={this.props.deleteUser}></PhoneItem>         })

return(  <div>  <PhoneListHeader length={this.props.store.length}> </PhoneListHeader>  {phoneList}  </div>)

}}

export default PhoneList