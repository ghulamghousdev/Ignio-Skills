import { useState } from "react";
import RegisteredCourse from "./RegisteredCourse";

const RegisteredCourses = () => {
  const [registeredCourses, setRegisteredCourses] = useState([
    {
      id: 0,
      title: "The Complete JavaScript Course 2021: From Zero to Expert!",
      author: "Jonas Schemedtmann",
      rating: 4.7,
      imgUrl:
        "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 1,
      title: "Node.js: The Complete Guide to Build RESTful APIs (2018)",
      author: "Mosh Hamedani",
      rating: 4.7,
      imgUrl:
        "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 2,
      title:
        "The Complete SQL Bootcamp 2021: Go from Zero to Hero - Become an expert at SQL!",
      author: "Jose Portilla",
      rating: 4.7,
      imgUrl:
        "https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 3,
      title: "Complete Linux Training Course to Get Your Dream IT Job 2021",
      author: "Imran Afzal",
      rating: 4.7,
      imgUrl:
        "https://i.picsum.photos/id/1031/5446/3063.jpg?hmac=Zg0Vd3Bb7byzpvy-vv-fCffBW9EDp1coIbBFdEjeQWE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ]);

  return (
    <div className="registered-courses">
      <div>
        {registeredCourses.map((course) => {
          return <RegisteredCourse key={course.id} data={course} />;
        })}
      </div>
    </div>
  );
};

export default RegisteredCourses;
