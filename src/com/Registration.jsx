import React from 'react'
import { useState } from 'react';
import CleaningChat from './CleaningChat';
import axios from 'axios';

export default function Registration() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone,setPhone] = useState('');
  const [password, setPassword] = useState('');

  async function registration(event)
  {
    event.preventDefault();
    try
    {
      await axios.post("http://localhost:8081/api/v1/auth/register",
          {
            email: email,
            firstname: name,
            phone: phone,
            password: password
          });
      alert("Employee Registation Successfully");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      window.location.replace('/signIn');
    }
    catch(err)
    {
      alert("User Registation Failed");
    }
  }


  return (
    <div>
      <div className="mt-64 w-1/4 flex flex-col" style={{marginLeft:'37.5%'}}>  
      <div className="flex flex-row items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mr-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
      <h1 className="font-sans text-gray-500 font-bold text-5xl">Регистрация</h1>
      </div>
      <h1 className="text-start mt-8">Почта</h1>
      <input type="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shungus@iitu.edu.com" value={email} onChange={(event) =>
              {
                setEmail(event.target.value);
              }
              }/>
      <h1 className="text-start mt-4">Имя</h1>
      <input type="name" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shungus" value={name} onChange={(event) =>
              {
                setName(event.target.value);
              }
              }/>
      <h1 className="text-start mt-4">Номер</h1>
      <input type="phone" id="phone" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="87771234261" value={phone} onChange={(event) =>
              {
                setPhone(event.target.value);
              }
              }/>
      <h1 className="text-start mt-4">Пароль</h1>
      <input type="password" id="password" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" value={password} onChange={(event) =>
              {
                setPassword(event.target.value);
              }
              }/>
      <button type="submit" className="text-white bg-gray-800 hover:border mt-16 hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm mx-auto w-1/2 px-5 py-2.5 text-center" onClick={registration}>Зарегестрироваться</button>
      <div className="flex items-center mt-4">
      {/* <hr className="flex-grow border-t mt-4 border-gray-300"/>
      <span className="mx-4 text-gray-600 mt-4 ">Or Login With</span>
      <hr className="flex-grow border-t mt-4 border-gray-300"/> */}
      </div>

      </div>
     
    </div>
  )
}