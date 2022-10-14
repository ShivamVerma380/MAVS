import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Button} from 'reactstrap';
import Trial from './Trial.js';
import Home from './components/Home';
import Example from './Example';
import Aboutus from './aboutus/Aboutus';

function App() {
  const navigate = useNavigate()
  const[products, setProducts] = useState([])
  const[isProductFetched , setIsProductFetched] = useState(false) 
  useEffect(()=>{
    if(!isProductFetched)
    {
      axios.get("http://localhost:8080/get-products").then(function(response){
        if(response.status == 200){
          setProducts(response.data)
          setIsProductFetched(true)
          console.log(response.data)
          console.log("products" , products)
        }
      }).catch(function(error){
        console.log("error",error)
      })
      // axios({
      //   method:"get",
      //   url : "http://localhost:8080/get-products"
      // }).then(function(response){
      //   if(response.status == 200){
      //     setProducts(response.data)
      //     setIsProductFetched(true)
      //   }
      // }).catch(function(error){
      //   console.log("error" , error)
      // })
    }
  }) 
  
  const handleClick = () =>{
    navigate('/trial')
  }
  return (
    // <div className="App">
    //   {
    //     products.map(index=>{
    //       return(
    //         <>
    //         <h1>{index.productName}</h1>
    //         <Button onClick = {handleClick}>Click Me</Button>
    //         </>
    //       )
    //     })
    //   }
    // </div>
    <Aboutus/>
  );
}

export default App;
