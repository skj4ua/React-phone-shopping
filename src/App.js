import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Details from './components/Details'
import ProductList from './components/ProductList'
import Cart from './components/cart/Cart'
import Default from './components/Default'
import {Switch,Route} from "react-router-dom"
import Modal from './components/Modal'
class App extends Component{
  render(){
    return(
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path ="/" component={ProductList}></Route>
                    <Route path ="/details" component={Details}></Route>
                    <Route path ="/cart" component={Cart}></Route>
                    <Route  component={Default}></Route>
                </Switch>
                <Modal/>
            </React.Fragment>
        )
  }
}

export default App;
