import React from 'react'
import { useState } from 'react';
import CleaningChat from './CleaningChat';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MainPage() {

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');

    const handleZayava = async () => {
        try {
            // const response = await axios.post('http://localhost:8081/api/v1/auth/zayava', {
            //     name,
            //     phone
            // });
            console.log(name, ' ' ,phone)
            alert("Терпила!");
            setName('');
            setPhone('');
        } catch (error) {
            console.error('Login failed', error);
            alert("Пройзошла ошибка!");
        }
    };

    return (
        <>
        <nav className="bg-gray-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Clean PRO</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/" className="block py-2 px-3 text-gray-900 bg-gray-700 font-bold rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 md:hover:text-dark" aria-current="page">Главная</a>
          </li>
          <li>
            <a href="/Calculate" className="block py-2 px-3 text-gray-900 rounded-lg  md:p-0  dark:text-white md:dark:hover:bg-transparent hover:bg-gray-200 dark:border-gray-700">О нас</a>
          </li>
          <li>
            <a href="#service" className="block py-2 px-3 text-gray-900 rounded-lg  md:p-0  dark:text-white md:dark:hover:bg-transparent hover:bg-gray-200 dark:border-gray-700">Услуги</a>
          </li>
          <li>
            <a href="#cont" className="block py-2 px-3 text-gray-900 rounded-lg  md:p-0  dark:text-white md:dark:hover:bg-transparent hover:bg-gray-200 dark:border-gray-700">Контакты</a>
          </li>
        </ul>
        </div>
        </div>
        </nav>

        <div className="bg-no-repeat bg-center bg-cover bg-[url('src/assets/nonhome.jpg')] w-full start-0 mt-16 pr-80 pt-24 flex flex-col items-end" style={{height:'500px'}}>
           <span className="text-dark text-2xl font-bold whitespace-nowrap dark:text-white">Оформите заказ прямо сейчас</span>
             <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-5" placeholder="Имя" value={name} onChange={(event) =>
              {
                setName(event.target.value);
              }
              }></input>
             <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-5" placeholder="Ваш телефон" value={phone} onChange={(event) =>
              {
                setPhone(event.target.value);
              }
              }></input>
           <button type="button" className="text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleZayava}>Оформить</button>
        </div>

        <div id="service" className="bg-gray-100 w-full start-0 p-10 flex flex-col">
            <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mr-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
            </svg>
            <span className="text-black text-2xl font-bold whitespace-nowrap dark:text-white uppercase">Мы даем гарантию качественной уборки!</span>
            </div>
        </div>
        
        <div className="bg-white mt-9  w-full start-0  p-10 flex flex-row items-center justify-between" >
            <div className="flex flex-col items-center justify-between">
                <img src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-clean-a-vacuum-hero.jpg" alt="Image 2" className="w-56 h-56  rounded-full"/>
                <span className="text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">Уборка квартир</span>
            </div>

            <div className="flex flex-col items-center justify-between">
                <img src="https://hips.hearstapps.com/hmg-prod/images/lifestyle-1-dining-vax-glide-249-99-1582030546.jpg" alt="Image 2" className="w-56 h-56 rounded-full"/>
                <span className="text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">Уборка домов</span>
            </div>

            <div className="flex flex-col items-center justify-between">
                <img src="https://leifheit.sg/cdn/shop/products/L51030-7.jpg?v=1618462436&width=1445" alt="Image 2" className="w-56 h-56  rounded-full"/>
                <span className="text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">Уборка коттеджей</span>
            </div>

            <div className="flex flex-col items-center justify-between">
                <img src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/Office-Cleaning-Hero.jpg" alt="Image 2" className="w-56 h-56  rounded-full"/>
                <span className="text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">Уборка офиса</span>
            </div>

            <div className="flex flex-col items-center justify-between">
                <img src="https://aircraftvacuums.com/wp-content/uploads/2018/04/AirCraft-PG-spray-1000x1000-1.jpg" alt="Image 2" className="w-56 h-56  rounded-full"/>
                <span className="text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">Доп услуги</span>
            </div>
        </div>

        <div className="bg-gray-100 border-y-2 border-black mt-24 w-full justify-center start-0 p-10 flex flex-row">
            <div className="mr-40">
             <span className="text-black text-2xl font-bold whitespace-nowrap dark:text-white uppercase">Как часто убираем?</span>
               <div className="flex flex-row">
               <svg className="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                 <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z" clipRule="evenodd"/>
                </svg>
                 {/* <span className="text-black text-1xl font-bold whitespace-nowrap dark:text-white uppercase">Мы даем гарантию качественной уборки!</span> */}
                 <div className="flex flex-col ml-6">
                 <p className="text-left">Ежедневная</p>
                 <p className="text-left">Еженедельная</p>
                 <p className="text-left">Ежемесячная</p>
                 </div>
               </div>
            </div>

            <div>
             <span className="text-black text-2xl font-bold whitespace-nowrap dark:text-white uppercase">Какая уборка?</span>
               <div className="flex flex-row">        
               <svg className="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
               <path fillRule="evenodd" d="M8 3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Zm2 5c0-.6.4-1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd"/>
               </svg>
                 {/* <span className="text-black text-1xl font-bold whitespace-nowrap dark:text-white uppercase">Мы даем гарантию качественной уборки!</span> */}
                 <div className="flex flex-col ml-6">
                 <p className="text-left">Ежедневная</p>
                 <p className="text-left">Еженедельная</p>
                 <p className="text-left">Ежемесячная</p>
               </div>
               </div>
            </div>
        </div>
        <div className="bg-white mt-40  w-full start-0  p-10 flex flex-col items-center justify-between" >
        <div>
        <span className="text-black text-2xl font-bold whitespace-nowrap dark:text-white uppercase">Почему клиенты выбирают именно нас?</span>    
        </div>

        <div className="bg-white mt-9  w-full start-0 flex flex-row items-center justify-between">    
        <div className="flex flex-col items-center justify-between">
        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-3c0-.6.4-1 1-1Z" clipRule="evenodd"/>
        </svg>
            <span className="text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">TOP Безопасность</span>
            <p className="text-center">Тщательный отбор и комплекснаяпроверка всех сотрудников</p>
        </div>

        <div className="flex flex-col items-center justify-between">
        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 12 4.7 4.5 9.3-9"/>
        </svg>
            <span className="text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">TOP Качество</span>
            <p className="text-center">Передовые стандарты и профессиональная техника</p>
        </div>

        <div className="flex flex-col items-center justify-between">
        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
            <span className="text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">TOP Удобство</span>
            <p className="text-center">Простая заявка, оперативное подтверждение и выезд</p>
        </div>

        <div className="flex flex-col items-center justify-between">
        <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z"/>
        </svg>
            <span className="text-gray-500 text-2xl font-bold whitespace-nowrap dark:text-white">TOP Обслуживание</span>
            <p className="text-center">Вежливый сервис, заботливое отношение и профессионализм</p>
        </div>
        </div>
        </div>

        <div className="bg-gray-100 border-y-2 border-black mb-9 mt-40 w-full start-0 p-10 flex flex-col items-center justify-between">
            <svg className="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                 <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z" clipRule="evenodd"/>
            </svg>
        <span className="text-black text-2xl font-bold whitespace-nowrap dark:text-white uppercase">Закажите уборку за 60 секунд!</span>
        <button type="button" className="text-white mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Оформить</button>
        </div>

        <CleaningChat/>



        <footer id="cont" className="bg-gray-100 dark:bg-gray-900 mt-40">
            <div className="mx-auto w-full">
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Компания</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">О нас</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Карера</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Наш центер</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Помошь</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Дискорд канал</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Твитер</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Фейсбук</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Ватсап</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Юридическая</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Политика конфиденциальности</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Лицензирование</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Правила и условия</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Наше приложение</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">iOS</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Андройд</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Виндовс</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">МакОС</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-4 py-6 bg-gray-700 w-full dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-50 dark:text-gray-300 sm:text-center">© 2024 <a href="https://flowbite.com/">Almaty</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <a href="#" className="text-gray-100 hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                            </svg>
                          <span className="sr-only">Facebook page</span>
                      </a>
                      <a href="#" className="text-gray-50 hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                            </svg>
                          <span className="sr-only">Discord community</span>
                      </a>
                      <a href="#" className="text-gray-50 hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                            <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                        </svg>
                          <span className="sr-only">Twitter page</span>
                      </a>
                      <a href="#" className="text-gray-50 hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                          </svg>
                          <span className="sr-only">GitHub account</span>
                      </a>
                      <a href="#" className="text-gray-50 hover:text-gray-900 dark:hover:text-white">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd"/>
                        </svg>
                          <span className="sr-only">Dribbble account</span>
                      </a>
                </div>
              </div>
            </div>
        </footer>

        
        {/*https://www.youtube.com/watch?v=RaeXdPsSvfM*/}

      </>
      )
}
