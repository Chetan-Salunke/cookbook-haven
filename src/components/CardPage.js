import React, { useEffect, useState } from 'react';


export default function CardPage() {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleModal = (item) => {
        setSelectedItem(item);
        setShowModal(!showModal);
    };

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/Data.json')
            .then(response => response.json())
            .then(jsonData => setData(jsonData.RecipePage))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Loading..</div>;
    }

    return (
        <div className="flex flex-wrap items-center justify-center bg-gray-100 p-4">
            {data.map((item, index) => (
                <div key={index} className="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white p-6">
                    <img className="w-full" src={item.image} alt={item.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 text-base">
                            This is a simple card component. Click the button below to learn more.
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <button
                            className="bg-[#734060] hover:bg-[#EDB654] text-white hover:text-black font-bold py-2 px-4 rounded"
                            onClick={() => toggleModal(item)}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            ))}

            {showModal && selectedItem && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            {selectedItem.title}
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                This is a simple modal. You can put any content here.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => toggleModal(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
