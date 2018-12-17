import React, {useState}  from 'react';
export default function AppHook(props){
   const [name,setName] = useState('weiqiang');
   const [sex,setSex] = useState('male');
   function  handleName(e) {
     setName(e.target.value);
   }
   function  handleSex(e) {
     setSex(e.target.value);
  }
   return (
     <div>
       <label>name:</label>
       <input value={name} onChange={handleName} />
       <label>sex:</label>
       <input value={sex} onChange={handleSex} />
     </div>
   )
}