import "./App.css";
import {apiUrl, filterData} from "./data.js";
import Filter from "./components/Filter.js";
import Cards from "./components/Cards.js";
import NavBar from "./components/NavBar.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner.js";



function App() {

const[courses,setCourses]=useState([filterData[0].title]);
const[loading,setLoading]=useState(true);
const[category,setCategory]=useState(filterData[0].title);


async function fetchData(){
  setLoading(true);
  try{
let res=await fetch(apiUrl);
let output=await res.json();
// output
setCourses(output.data);
  }
  catch(error){
toast.error("Network  error");
  }
  setLoading(false);
}

useEffect(()=>{
fetchData();
},[]);




return (
    <div className="min-h-screen flex flex-col bg-slate-700 ">
      <div>
      <NavBar />
      </div>

<div >  

      <div >
        <Filter filterData={filterData}
        category={category}
        setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
       {
        loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
       }

      </div>
     </div>


    </div>
  );
}

export default App;
