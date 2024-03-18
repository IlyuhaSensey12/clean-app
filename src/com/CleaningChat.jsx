import {useEffect, useState} from 'react';
import axios from 'axios';

function CleaningChat() {
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [userData, setUserData] = useState(null);

    const [currentStep, setCurrentStep] = useState(0);
    const [chatMessages, setChatMessages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/getUser', config)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);


    const steps = [
        { question: 'Здравствуйте. Для быстрой заявки, напишите ваш адрес:' },
        { question: 'Введите ваш номер телефона:' },
        { question: 'Введите дату или время:' }
    ];

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        const question = steps[currentStep].question;
        const userResponse = currentStep === 0 ? address : currentStep === 1 ? phone : date;

        const updatedChatMessages = [...chatMessages, { question, userResponse }];
        setChatMessages(updatedChatMessages);

        // if (currentStep === 2) {
        //     axios.post('http://localhost:8081/api/v1/offerReg', { address, phone, date })
        //         .then(response => {
        //             alert('Запись успешно добавлена в базу данных!');
        //             setAddress('');
        //             setPhone('');
        //             setDate('');
        //             setCurrentStep(0);
        //             setChatMessages([]);
        //         })
        //         .catch(error => {
        //             console.error('Ошибка при отправке запроса:', error);
        //         });
        // } else {
        //     setCurrentStep(currentStep + 1);
        // }

        if (currentStep === 2) {
            try {
            axios.post('http://localhost:8081/api/v1/offerReg', { address, phone, date }, config);
            alert('Запись успешно добавлена в базу данных!');
            setAddress('');
            setPhone('');
            setCurrentStep(0);
            setChatMessages([]);
            if (userData) {
                const userName = userData.firstname;
                const thankYouMessage = `Спасибо что оставили заявку, ${userName}`;
                setChatMessages(prevMessages => [...prevMessages, { message: thankYouMessage }]);
            }
        } catch (error) {
            alert('Ошибка при добавлении записи в базу данных');
        }
        } else {
            setCurrentStep(currentStep + 1);
        }
    };



    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const closeChat = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {!isOpen && (
                <button onClick={toggleChat} className="fixed bottom-0 right-0 m-8 mb-12 rounded-lg bg-gray-700 text-white px-4 py-2">
                    <svg className="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M3.6 4.5c.3-.3.8-.5 1.3-.5H19a1.9 1.9 0 0 1 2 1.9V15a1.9 1.9 0 0 1-1.9 1.9h-3.6l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.9A1.9 1.9 0 0 1 3 15.1V6c0-.5.2-1 .6-1.4Zm4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.6Z" clipRule="evenodd"/>
                    </svg>
                </button>
            )}
            {isOpen && (

                <div className="fixed bottom-0 right-0 m-8 rounded-lg bg-white shadow-2xl">
                    <button onClick={closeChat} className="absolute top-0 right-0 mt-2 mr-2 mb-8 bg-gray-700 text-white text-bold px-2 py-1 rounded-lg">
                        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"/>
                        </svg>
                    </button>
                    <div className="max-w-400 mx-auto p-12 border border-gray-300 rounded-lg overflow-hidden">
                        <div className="mb-4 max-h-300 overflow-auto">
                            {chatMessages.map((message, index) => (
                                <div key={index} className="mb-4">
                                    <div className="bg-gray-200 p-4 rounded-lg max-w-70 self-start">
                                        {message.question}
                                    </div>
                                    {message.userResponse && (
                                        <div className="bg-gray-500 text-white p-4 rounded-lg max-w-70 self-end">
                                            {message.userResponse}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {currentStep < 3 && (
                                <div className="mb-4">
                                    <div className="bg-gray-200 p-4 rounded-lg max-w-70 self-start">
                                        {steps[currentStep].question}
                                    </div>
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleMessageSubmit} className="flex">
                            {currentStep === 2 ? (
                                <input
                                    type="text"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    placeholder="Введите время или дату"
                                    className="flex-1 mr-4 p-4 border border-gray-300 rounded-lg"
                                />
                            ) : (
                                <input
                                    type="text"
                                    value={currentStep === 0 ? address : currentStep === 1 ? phone : date}
                                    onChange={(e) => currentStep === 0 ? setAddress(e.target.value) : currentStep === 1 ? setPhone(e.target.value) : setDate(e.target.value)}
                                    className="flex-1 mr-4 p-4 border border-gray-300 rounded-lg"
                                />
                            )}
                            <button
                                type="submit"
                                className="bg-gray-500 text-white border-none px-8 py-4 rounded-lg cursor-pointer"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CleaningChat;
