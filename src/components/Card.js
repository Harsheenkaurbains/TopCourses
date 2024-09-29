import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";

const Card = ({ course,likedCourses,setLikedCourses}) => {

    function clickHandler(){
// logic
if(likedCourses.includes(course.id)){
    // then it is already liked 
    setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
    toast.warning("like removed");

}
else{
    // not liked from before 
    // insert this course into liked courses
 if(likedCourses.length ===0){
setLikedCourses([course.id]);
 }  
 else{
// non empty pehle se
 setLikedCourses((prev) => [...prev, course.id]);
 } 
 toast.success("liked");
}
    }
    return (
        <div className="w-[300px] bg-slate-900  rounded-md overflow-hidden bg-opacity-70">
            <div className="relative">
                <img src={course.image.url}></img>


            <div className='w-[40px] h-[40px] bg-white right-2 bottom-[-12px] rounded-full absolute grid  place-content-center'>
                <button onClick={clickHandler}>
                    {
                        !likedCourses.includes(course.id) ? 
                        (<FcLikePlaceholder fontSize="1.75rem" />) : 
                        ( <FcLike fontSize="1.75rem" />
                        )
                    }
                   
                </button>
            </div>
</div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2 ">{
                course.description.length > 100 ? 
                (course.description.substr(0,100)) +"..." : 
                (course.description)
            }</p>

            </div>
        </div>
    )
}

export default Card;
