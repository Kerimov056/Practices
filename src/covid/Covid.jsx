// import './App.css';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// function App() {

//   const [deyer, setDeyer] = useState("")
//   const [data, setData] = useState("1")


//   useEffect(() => {
//     axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
//       .then(res => setDeyer(res.data[data]))
//       .catch(err => console.error(err))
//   })
//   return (
//     <>
//       <div className='covid'>
//         <div className='covid_in'>
//           <div className='name'>
//             <h1>Turkiye COVID-19 Gunluk Mellumatalar</h1>
//           </div>
//           <div className='info'> 
//             <div className='input'>
//               <input type='text' value={data} onChange={(e) =>setData(e.target.value)}  placeholder=' GG/AA/YY'></input>
//             </div>
//             <div className='grid'>
//               <h3 className='key'>#</h3>
//               <h3 className='key'>Test Sayisi</h3>
//               <h3 className='key'>Xeste Sayisi</h3>
//               <h3 className='key'>Vefat Sayisi</h3>

//               <h3 className='value'>{data ===undefined ? "GG/AA/YY" : data}</h3>
//               <h3 className='value' style={{backgroundColor: deyer===undefined ? "red" : "green"}}>{deyer ===undefined ? "Time gozlenilir" : deyer.tests}</h3>
//               <h3 className='value' style={{backgroundColor: deyer===undefined ? "red" : "green"}}>{deyer ===undefined ? "Time gozlenilir" : deyer.patients}</h3>
//               <h3 className='value' style={{backgroundColor: deyer===undefined ? "red" : "green"}}>{deyer ===undefined ? "Time gozlenilir" : deyer.deaths}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// export default App;




// // API LINK:   https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json