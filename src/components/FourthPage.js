import React,{useEffect, useState} from 'react'

export default function FourthPage() {

    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch('/Data.json')
        .then(response => response.json())
        .then(jsonData => setData(jsonData.Cocktailspage))
        .catch(error => console.error('Error fetching data:', error));
    },[])

    if (!data) {
        return <div>Loading........</div>;
      }
      
  return (
    <section className="text-gray-600 body-font bg-[#F7F7F7]">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-1/2 h-full bg-[#EDB654]"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 custom-font">Cocktails Recipes</h1>
            <p className="sm:w-3/5 leading-relaxed sm:pl-10 pl-0 text-[#EDB654]">
              Easy Cocktails to Make as Soon as It’s Five O’Clock Somewhere. When it’s happy hour, it’s time to leave the fuss behind.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {data.map((item, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt={item.title} className="object-cover object-center h-full w-full" src={item.image} />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.title}</h2>
              <p className="text-base leading-relaxed mt-2 mb-2">{item.content}</p>
              <button
                type="button"
                className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#734060] text-white hover:text-black hover:bg-[#EDB654] disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-scroll-inside-viewport-modal"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
