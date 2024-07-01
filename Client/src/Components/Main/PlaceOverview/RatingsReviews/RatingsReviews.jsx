import { FaStar, FaCircle } from "react-icons/fa";
import ProgressBar from "../ProgressBar/ProgressBar";

const RatingsReviews = () => {
  return (
    <section
      id="rated"
      className="cover-grid mt-14 mb-14 yoo grid grid-cols-12 gap-10"
    >
      {/* Ratings Column (5 columns) */}
      <div className="ratings col-span-12 sm:col-span-5 gap-5">
        <h4>Rate / Reviews</h4>
        <div className="flex items-center gap-6 mt-3 mb-6">
          <ul className="flex items-center justify-center">
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
            <li>
              <FaStar />
            </li>
          </ul>
          <FaCircle />
          <div className="flex items-center gap-3">
            <p className="black-para">4.8</p>
            <div>
              <p className="font-semibold">Very good</p>
              <p>52 Reviews</p>
            </div>
          </div>
        </div>
        {/* bar start */}
        <div className="mb-7">
          <div className="flex justify-between items-center numbers-rate">
            <p>Location</p>
            <p>9.8</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-black h-1.5 rounded-full dark:bg-pink-500"
              style={{ width: "98%" }}
            ></div>
          </div>
        </div>

        <div className="mb-7">
          <div className="flex justify-between items-center numbers-rate">
            <p>Staff</p>
            <p>9.4</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-black h-1.5 rounded-full dark:bg-pink-500"
              style={{ width: "94%" }}
            ></div>
          </div>
        </div>

        <div className="mb-7">
          <div className="flex justify-between items-center numbers-rate">
            <p>Value for money</p>
            <p>6.9</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-black h-1.5 rounded-full dark:bg-pink-500"
              style={{ width: "69%" }}
            ></div>
          </div>
        </div>

        <div className="mb-7">
          <div className="flex justify-between items-center numbers-rate">
            <p>Cleanliness</p>
            <p>7.4</p>
          </div>
          {/* <ProgressBar title={"Cleanliness"} percentage={"7.4"} width={"74%"} /> */}
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-gray-200 h-1.5 rounded-full dark:bg-pink-500"
              style={{ width: "74%" }}
            ></div>
          </div>
        </div>

        <div className="mb-7">
          <div className="flex justify-between items-center numbers-rate">
            <p>Food</p>
            <p>9.9</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className=" h-1.5 rounded-full dark:bg-pink-500"
              style={{ width: "99%" }}
            ></div>
          </div>
        </div>

        <div className="mb-7">
          <div className="flex justify-between items-center numbers-rate">
            <p>Comfortability</p>
            <p>8.0</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-black h-1.5 rounded-full dark:bg-pink-500"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        {/* bar end */}
      </div>

      {/* Reviews Column (7 columns) */}
      <div className="reviews col-span-12 sm:col-span-7">
        {/* Content for reviews goes here */}
        <div className="review-card w-full">
          <div className="profile-card flex items-center mb-4 gap-4">
            <div className="profile">
              <img src="/Utility/test1.jpg" width="100%" alt="" />
            </div>
            <div className="flex flex-col numbers-rate">
              <p className="font-semibold">John Doe</p>
              <p className="small-para">United States</p>
              <p className="small-para">12 - Dec - 2023</p>
            </div>
          </div>
          <p className="number-rate mb-5">
            Lorem ipsum is a famous placeholder text used in graphic design,
            publishing, and web development. It's a scrambled version of Latin
            text that allows designers to focus on layout and visual elements
            without worrying about the meaning of the content itself.
          </p>
          <div className="flex items-center gap-3">
            <p className="black-para">4.8</p>
            <div>
              <p className="font-semibold">Very good</p>
              <p>52 Reviews</p>
            </div>
          </div>
        </div>

        {/* another card review */}
        <div className="review-card w-full mt-10">
          <div className="profile-card flex items-center mb-4 gap-4">
            <div className="profile">
              <img src="/Utility/test2.jpg" width="100%" alt="" />
            </div>
            <div className="flex flex-col numbers-rate">
              <p className="font-semibold">John Doe</p>
              <p className="small-para">United States</p>
              <p className="small-para">12 - Dec - 2023</p>
            </div>
          </div>
          <p className="number-rate mb-5">
            Lorem ipsum is a famous placeholder text used in graphic design,
            publishing, and web development. It's a scrambled version of Latin
            text that allows designers to focus on layout and visual elements
            without worrying about the meaning of the content itself.
          </p>
          <div className="flex items-center gap-3">
            <p className="black-para">4.8</p>
            <div>
              <p className="font-semibold">Very good</p>
              <p>52 Reviews</p>
            </div>
          </div>
          <p className="mt-5 mb-8 text-pink-500" style={{ color: "#ee408a" }}>
            View all 52 reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default RatingsReviews;
