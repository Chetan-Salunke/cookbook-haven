import React, { useEffect, useState } from 'react'

export default function SecondPage() {

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
      .then(jsonData => setData(jsonData.Breakfastpage))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading....</div>;
  }

  return (
    <section className="text-gray-600 body-font bg-[#F7F7F7]">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-2/12 h-full bg-[#EDB654]"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 custom-font">Breakfast Recipes</h1>
            <p className="sm:w-3/5 leading-relaxed sm:pl-10 pl-0 text-[#EDB654] ">Best Breakfast Recipes for Days When You Need More Than a Bowl of Cereal</p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {data.map((item, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={item.image} />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.title}</h2>
              <p className="text-base leading-relaxed mt-2 mb-2">{item.content}</p>
              <button
                type="button"
                className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#734060] text-white hover:text-black hover:bg-[#EDB654] disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-scroll-inside-viewport-modal"
                onClick={() => toggleModal(item)}
              >
                Learn More
              </button>
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
                                                {selectedItem.steps}
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
      </div>
    </section>
  )
}
