import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify';
function Cards(props) {
    let course = props.course;
    let likedcourses = props.likedcourses;
    let setcourses = props.setcourses;
    function clickHandler() {
        if (likedcourses.includes(course.id)) {
            //liked course
            setcourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("liked remove")
        }
        else {
            //not liked course
            if (likedcourses.length === 0) {
                setcourses([course.id]);
            }
            else {
                setcourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked sucessfully")
        }
    }
    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedcourses.includes(course.id) ?
                                (<FcLike fontSize="1.75rem"></FcLike>) :
                                (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>)
                        }

                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>

                    {
                        course.description.length > 100 ? (course.description.substr(0, 100)) +"..." : (course.description)
                    }

                </p>
            </div>
        </div>
    );
}

export default Cards
