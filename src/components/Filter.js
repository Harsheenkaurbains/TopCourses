import React from "react"


const Filter= ({filterData,category, setCategory}) => {

    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className="w-11/12 flex fle=-wrap max-w-max spce-x-4 gap-y-4 mx-auto py-4 justify-center">
{filterData.map((data) => {
    return (
    <button 
    key={data.id} 
    onClick={() => filterHandler(data.title)}
    className={`text-lg px-4 py-1 m-1 rounded-md font-medium text-white bg-black hover:bg-opacity-10 border-2 transition-all duration-300
    ${category === data.title ? "bg-opacity-80 border-white border-2" : 
    "bg-opacity-40 border-transparent"
    }`
    }>
        {data.title}
    </button> )
})}
            </div>
    )
}

export default Filter