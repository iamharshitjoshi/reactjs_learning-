import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
 const [country, setCountry]=useState(0);
    
  const obj=[
    {
      Country:"India",
      City:["Lucknow","Punjab","Chandigarh"]
    },
    {
      Country:"Pakistan",
      City:["Islamabad","Lahore","Peshawar"]
    },
    {
      Country:"USA",
      City:["New York","DC","Texas"]
    }
  ]

  return (
    <div className="country-city-dropdown-container">
    <label htmlFor="countryDropdown">Select a country:</label>
    <select id="countryDropdown" onChange={(e)=>setCountry(e.target.value)}>
     {obj.map((country,index)=>{
        return <option value={index}>{country.Country}</option>
     })}
    </select>
    
    <select>
    {obj[country].City.map((city)=>{
        return  <option value={city}>{city}</option>
    })}
   
    </select>
    
    </div>
  );

};

export default App;



// import { useState } from 'react';

// function App() {
//   // const [name, setName] = useState("");
//   // const [value, setValue] = useState("");

//   const people = [
//     { name: "harshit", age: 21 },
//     { name: "abdullah", age: 22 },
//     { name: "divyansh", age: 23 },
//   ];

//   return (
//     <div>
//     <h1>people info</h1>
//     <ul>
//       {people.map((person, index) => (
//         <li key={index}>
//           {`${person.name} - ${person.age} yrs old`}
//         </li>
//       ))}
//     </ul>
//   </div>
//   );
// }


// function App(){
  
//   const[name, setName]=useState("");
//   const[value, setValue] = useState("");
  
  
//   return(
//     <>
//      <form>
//        <label>
//          enter your name:
//         <textarea onChange={(e)=>setName(e.target.value)} cols="30" rows="10" value={name}>
//         </textarea>
        
//         {/* uppercase */}
//         <button
//           type = "button"
//           onClick={(e)=>{
//           setName(name.toUpperCase())
//             console.log(name);
//           }
//           }>
//             uppercase!
//         </button>
        
//         {/* clear */}
//         <button
//           type = "button"
//           onClick={(e)=>{
//           setName("")
//             console.log(name);
//           }
//           }>
//          Clear
//         </button>
        
//         {/* letter count */}
//         <button
//           type = "button"
//           onClick={(e)=>{
            
//             let str=name.replace(/\s/g,'')
//             setName(str.length.toString());
//           }
//           }>
//           count
//         </button>
        
//         {/* word count */}
//         <button
//           type = "button"
//           onClick={(e)=>{
//             // let str=name.replace(/\s/g,'')
//             const str = name.trim().split(/\s+/); 
//             setName(str.length.toString());
//           }
//           }>
//           word
//         </button>

//         </label>
//      </form>
     
    // </>
  
  // );
  // }



// export default App;





