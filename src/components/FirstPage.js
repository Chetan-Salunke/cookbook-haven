import React, { useEffect, useState } from 'react';

function Imgcarousel() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/Data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData.Firstpage))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading..</div>;
  }

  return (
    <>
       <section className="text-gray-600 body-font bg-[#F7F7F7]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 custom-font">
            SIMPLE RECIPES MADE FOR REAL, ACTUAL, EVERYDAY LIFE.
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((item, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#EDB654] mb-1">
                    HEALTHY FOOD
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-[#734060]">{item.title}</h1>
                  <p className="leading-relaxed">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Imgcarousel
