import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App() {
  
  const nayok= ['Razzak', 'Dipojol', 'Amit Hasan', 'Pritom Hasan', 'Elias Kanchon', 'Batabi Lebu']

  const products= [
    {name: 'Adobe Photoshop', price: '$40'},
    {name: 'Adobe premium pro', price: '$50'},
    {name: 'Adobe illustrator', price: '$20'},
    {name: 'Adobe PDF Reader', price: '$5'},
  ]

  // const productNames = products.map( (element) => element.price)
  // console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Person heroName="Bappa Raz" heroineName="Moyuri" ></Person>
        <Person heroName="Jashim" heroineName="Shabana"></Person>
        <Person heroName="Sakib Khan" heroineName="Bubli"></Person>
        <Person heroName="Arefin Shuvo" heroineName="Mahya Mahi"></Person> */}

        {/* <Product name={products[0].name} price={products[0].price}></Product> */}

        {/* <ul>
          <li>{nayok[0]}</li>
          <li>{nayok[1]}</li>
          <li>{nayok[2]}</li>
          <li>{nayok[3]}</li>
          <li>{nayok[4]}</li>
          <li>{nayok[5]}</li>
        </ul> */}

        <Counter></Counter>

        <Users></Users>
        

        <ol>
          {
            nayok.map(person => <li>{person}</li>)
          }

          {
            products.map(product => <li>{product.name}</li>)
          }
        </ol>


        

        <Product productItem={products[0]}></Product>
        <Product productItem={products[1]}></Product>
        <Product productItem={products[2]}></Product>
        <Product productItem={products[3]}></Product>
        

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

function Users(){
  const [user, setUser] = useState([]);
  
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUser(data);
    })
  })

  return (
    <div>
      <h1>Dynamic Users : {user.length}</h1>
      <ul>
          {
            user.map( element => <li>{element.name}'s Email: {element.email}</li>)
          }
        </ul>

    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const countMeterIn = (event) => setCount(count + 1);
  const countMeterDec = (event) => setCount(count - 1);
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={countMeterIn}>Increase</button>
      <button onClick={countMeterDec}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productsStyle={
    
    margin: '10px 10px',
    padding: '10px',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: '#A8A8A8',
    float: 'left',
  }
  console.log(props.productItem); 
  return (
    <div style={productsStyle}>
      <h4>Name: {props.productItem.name}</h4>
      <p>Price: {props.productItem.price}</p>
      <button>Buy now</button>
    </div>
  )
}


export default App;
