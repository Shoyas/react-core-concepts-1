import React from 'react';
import logo from './logo.svg';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App() {

  const products= [
    {name: 'Adobe Photoshop', price: '$40'},
    {name: 'Adobe premium pro', price: '$50'},
    {name: 'Adobe illustrator', price: '$20'},
    {name: 'Adobe PDF Reader', price: '$5'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <Person heroName="Bappa Raz" heroineName="Moyuri" ></Person>
        <Person heroName="Jashim" heroineName="Shabana"></Person>
        <Person heroName="Sakib Khan" heroineName="Bubli"></Person>
        <Person heroName="Arefin Shuvo" heroineName="Mahya Mahi"></Person> */}

        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        <Product product={products[0]}></Product>
        <Product ></Product>
        <Product></Product>
        <Product></Product>
        

      </header>
    </div>
  );
}

// function Person(props){
//   const style={
//     width: '500px',
//     border: '5px double yellow',
//     margin: '10px',
//     padding: '10px',
//   }
//   return (
//     <div style={style}>
//       <h1>Hero: {props.heroName}</h1>
//       <p>Heroine: {props.heroineName}</p>
//     </div>
//   )
// }

function Product(props){
  const productsStyle={
    
    margin: '10px 10px',
    padding: '10px',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: '#A8A8A8',
    float: 'left',
  }
  console.log(props.product);
  return (
    <div style={productsStyle}>
      <h4>Name: {props.product.name}</h4>
      <p>Price: {props.product.price}</p>
      <button>Buy now</button>
    </div>
  )
}


export default App;
