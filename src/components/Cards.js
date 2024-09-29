import React, { useState } from "react";
import Card from "./Card";

const Cards=(props)=>{
let courses=props.courses;
let category=props.category;


const[likedCourses,setLikedCourses]=useState([]);

    // return you a list of all courses recieved frm the api response

function getCourses () {
    if(category === "All"){
    let allCourses= [];

    console.log("printing courses");

    Object.values(courses).forEach(array => {
        array.forEach(courseData => {allCourses.push(courseData);
        })
    })
    return allCourses;
}
else{
    // mea sirf specific category ka data array pass karunga 
    return courses[category];
}
}



return(
<div className="flex flex-wrap justify-center gap-4 mb-4">

{
getCourses().map((course) =>( 
<Card key={course.id}
 course={course}
 likedCourses={likedCourses}
 setLikedCourses={setLikedCourses}/>
))
}

</div>

    )
}
export default Cards;