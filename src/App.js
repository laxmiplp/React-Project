import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin';
import Ecommerce from './Pages/Ecommerce';
function App() {
  // const add = () => {
  //   const obj = [{ name: 'Guava', price: 10 }, { name: 'mango', price: 15 }, { name: 'banana', price: 20 }, { name: 'apple', price: 5 }]
  //   let outsideResult = 0
  //   const fruitPrice = obj.map(item => {
  //     let insideResult = 0
  //     insideResult = item.price
  //     outsideResult = item.price

  //     return item.price



  //   })
  //   console.log(fruitPrice)

  // }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}
      {/* <button onClick={add}>click</button> */}
      {/* <Signin /> */}
      <Ecommerce />
    </div>
  );
}

export default App;
