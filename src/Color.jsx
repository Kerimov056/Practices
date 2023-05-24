// import './App.css';
// import React,{useRef,useState} from 'react';

// function App() {

//   const [color, setColor] = useState("white")
//   const colorChange = useRef(null)

//   const deyisim = () =>{
//     document.body.style.backgroundColor=colorChange.current.value;
//     const timmer = setTimeout(() =>{
//       setColor(colorChange.current.value)
//     },1000)
//     return ()=>clearTimeout(timmer)
//   }
//   return (
//     <div className="App">
//         <p>Ingilizce reng gir</p>
//         <input type='text' ref={colorChange} onChange={deyisim}></input>
//         <h3>{color}</h3>
//     </div>  //Demeli biz burda neynedik useRefle backgrounColor'u deyisdik
//   );
// }

// export default App;
