import logo from './logo.svg';
import './App.css';


import Login from "./component/login"

function App() {
  const data = [
    {
     name: "Toms" ,
     price: "$150",
     decrip:"imported brand",
     url:"https://image.shutterstock.com/image-photo/cricket-bat-isolated-on-white-260nw-1338243737.jpg"
    },
    {
      name: "Toms" ,
      price: "$150",
      decrip:"imported brand",
      url:"https://image.shutterstock.com/image-photo/cricket-bat-isolated-on-white-260nw-1338243737.jpg"
     },
     {
      name: "Toms" ,
      price: "$150",
      decrip:"imported brand",
      url:"https://image.shutterstock.com/image-photo/cricket-bat-isolated-on-white-260nw-1338243737.jpg"
     },    {
      name: "Toms" ,
      price: "$150",
      decrip:"imported brand",
      url:"https://image.shutterstock.com/image-photo/cricket-bat-isolated-on-white-260nw-1338243737.jpg"
     }
  ]
  return (

    <div className="App d-flex ">

{data.map(item => <Login name ={item.name} price = {item.price} decrip = {item.decrip} url = {item.url}/>)}
     

    </div>
  );


}

export default App;
