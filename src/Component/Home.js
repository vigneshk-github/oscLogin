import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

export default function Home() {
  const [hoveredImg, setHoveredImg] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
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
    </div>
  );
}
