import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import { useSelector, useDispatch } from "react-redux";
import background from "../images/backImg.jpeg";
import {URL} from "../helper"

export default function Home() {
  const params = useParams();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticate);
  const email_id = useSelector((state) => state.auth.email_id);
  const [hoveredImg, setHoveredImg] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${URL}/api/auth/login?email_id=${email_id}`
        );
        if (!response.ok) {
          throw new Error("Could not Fetch Events");
        }
        const resData = await response.json();
        setData(resData);
        console.log(resData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    if (isAuth) {
      fetchData();
    }
  }, [isAuth, email_id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to OSC 24</h1>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height:"1500px",
          minHeight: "380px", // Adjust as needed
          marginBottom: "50px",
        }}
      />
      {isAuth && (
        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-md hover:shadow-lg">
            <Link to="https://sites.google.com/view/osc-24/teacher-login/shloka-masters">
              <div
                className="image-container"
                onMouseEnter={() => setHoveredImg(1)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <img
                  src={img1}
                  className={`object-cover w-full h-full transition duration-300`}
                  alt="Image 1"
                />
                {hoveredImg === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <span className="text-white text-lg font-semibold">
                      Shloka Master
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-md hover:shadow-lg">
            <Link to="https://sites.google.com/view/osc-24/teacher-login/wisdom-tales">
              <div
                className="image-container"
                onMouseEnter={() => setHoveredImg(2)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <img
                  src={img2}
                  className={`object-cover w-full h-full transition duration-300`}
                  alt="Image 2"
                />
                {hoveredImg === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <span className="text-white text-lg font-semibold">
                      Wisdom Tales
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-md hover:shadow-lg">
            <Link to="https://sites.google.com/view/osc-24/teacher-login/tava-kath%C4%81m%E1%B9%9Bta%E1%B9%81">
              <div
                className="image-container"
                onMouseEnter={() => setHoveredImg(3)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <img
                  src={img3}
                  className={`object-cover w-full h-full transition duration-300`}
                  alt="Image 3"
                />
                {hoveredImg === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <span className="text-white text-lg font-semibold">
                      Tava kathamrtam
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-md hover:shadow-lg">
            <Link to="https://sites.google.com/view/osc-24/teacher-login/the-natures-way">
              <div
                className="image-container"
                onMouseEnter={() => setHoveredImg(4)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <img
                  src={img4}
                  className={`object-cover w-full h-full transition duration-300`}
                  alt="Image 4"
                />
                {hoveredImg === 4 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <span className="text-white text-lg font-semibold">
                      The Nature's Way
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
