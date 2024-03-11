import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Calculate() {
    // useEffect(() => {
    //     const map = L.map('map').setView([43.2389, 76.8897], 13);
    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     }).addTo(map);
    // }, []); // Передайте пустой массив зависимостей, чтобы хук useEffect вызывался только один раз при монтировании компонента

    return (
      <div>
      <div className='mt-32 flex flex-col items-center justify-between'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 ">Clean PRO</h1>
      </div>
        <div className="container w-1/2 mx-auto px-4 mt-24 py-8 bg-white rounded-lg shadow-2xl bg-gray-200">
            <p className="text-lg text-gray-700 mb-6">
                Мы - компания "CleanPro", предоставляемая услуги по уборке и клинингу.
                Наша команда профессиональных уборщиков готова обеспечить чистоту и порядок
                в вашем доме или офисе.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                Мы стремимся к качеству и предлагаем широкий спектр услуг, включая уборку помещений,
                химчистку ковров, чистку мебели и многое другое.
            </p>
            <p className="text-lg text-gray-700">
                Мы находимся по адресу: <strong>Almaty</strong>
            </p>
            <iframe className="w-full h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186085.4604139088!2d76.7877106781186!3d43.21818631808598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2sAlmaty!5e0!3m2!1sen!2skz!4v1710080080018!5m2!1sen!2skz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>
        </div>
    );
}
