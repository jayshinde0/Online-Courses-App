import React, { useState } from 'react';
import Card from './Card'
function Cards(props) {
    let courses = props.courses;
    const [likedcourses, setcourses] = useState([])
    let category = props.category;
    function getCourses() {
        if(category==="All"){
            let allcourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allcourses.push(courseData);
                })
            })
            return allcourses;
        }
        else{
            return courses[category];
        }
       
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} likedcourses={likedcourses} setcourses={setcourses}></Card>
                ))
            }
        </div>
    );
}

export default Cards;