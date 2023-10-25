import Person from "../image/person.svg"
import Horizon from "../image/horizon.svg"
import stuff1 from "../image/image7.jpg"
import stuff2 from "../image/image8.jpg"
import "./About.css";

function About() {
    return (
        <div className=" bg-white relative flex flex-col text-white h-screen">
            <div className="bg-black h-[380px] rounded-b-[300px] max-md:rounded-b-[200px] max-sm:rounded-b-[150px]">
                <p className="text-center text-base text-richblack-100 pt-20 px-36 max-md:px-10">
                    <span className="text-4xl text-white">Hey, there</span><br></br>
                    Welcome to The StudyNotion, where adventure and study come together to create a unique Learning experience. Our Courses are designed for Students in collaboration of well known Instructors around the nation seeking to explore a new way of study.
                </p>
            </div>
            <img src={Person} className="absolute top-64 sm:max-w-[70%] md:max-w-[60%] lg:max-w-[45%] bounce"></img>
            <img src={stuff1} className="absolute w-[80px] left-44 top-96 bouncenew max-sm:w-[60px]"></img>
            {/* <image src={stuff2} className="absolute w-[80px] left-44 top-96 bouncenew max-sm:w-[60px]"></image> */}
            {/* <img src={Horizon} className="w-[100%] h-[56] top-[-75%] absolute max-xl:top-[-50%] max-lg:top-[-25%] max-md:top-[-5%] max-sm:top-[15%]"></img> */}
        </div>
    );
}

export default About;