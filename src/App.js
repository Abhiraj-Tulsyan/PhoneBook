import React, { Component } from 'react';
import {HashRouter as Router, Switch, Link, Route} from 'react-router-dom'

import Application from './components/Application/Application.js'
import UserAddition from './components/UserAddition/UserAddition.js'
class App extends Component {


state=
{ store: [{
    id:1,
    userName:'Abhiraj Tulsyan',
    phoneNumber:123456879
}] }

addUser=(name, phone)=>
{
  let lastId;
  if(this.state.store.length===0)
  {
lastId=0;
  }
  else{
 lastId=this.state.store[this.state.store.length-1].id;
  }
let newItem={ id: lastId+1, userName: name, phoneNumber: phone}
let currentState={ ...this.state}
currentState.store.push(newItem)
this.setState({state: currentState})


}


deleteUser=(id)=>
{

let currentState={...this.state}
let tobeDeleted=currentState.store.findIndex(function( item ) {  return id===item.id   }) 
console.log(tobeDeleted)
currentState.store.splice(tobeDeleted,1);
this.setState({state:currentState})

}



  render() {
    return (
   <Router>
     <div>
           <Link to='/'>    </Link> 
                <Switch>
                       <Route path='/' exact render={()=> <Application store={this.state.store} deleteUser={this.deleteUser.bind(this)}></Application>}></Route>
                        <Route path='/add' exact render={()=> <UserAddition addUser={this.addUser.bind(this)}></UserAddition>}></Route>
               </Switch>
        </div>

   </Router>

     );
  }
}

export default App;
