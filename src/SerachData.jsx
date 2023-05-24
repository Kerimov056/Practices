// import './App.css';
// import React,{useEffect,useState} from 'react';
// import axios from 'axios';


// function App() {

//   const [deyer, setDeyer] = useState("white")
//   const [id,setId] = useState(0)

//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res =>setDeyer(res.data[id].title && res.data[id].body))
//     .catch(err=>console.log(err))
//   })
//   return (
//     <div className="App">
//         <h2>{deyer}</h2>
//         <input type='text' value={id} onChange={e =>setId(e.target.value)}></input>
//     </div>
//   );
// }
// //ve belelikle burda biz neynemis olduq datamizda olan bir melumati tapa bilirik
// export default App;
