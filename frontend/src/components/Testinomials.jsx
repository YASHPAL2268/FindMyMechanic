import React, { useState, useEffect } from "react";
import img from "../assets/Mechbg.jpg";

const initialTestimonials = [
  {
    name: "John Doe",
    title: "UI Designer",
    avatar: "",
    feedback:
      "The platform's ability to connect users with nearby service providers like mechanics, towing services, and fuel suppliers in real-time is outstanding. It eliminates the stress of finding help during vehicle breakdowns, making it a must-have app for drivers.",
  },
  {
    name: "Jane Smith",
    title: "Software Engineer",
    avatar: "",
    feedback:
      "The app's intuitive design and straightforward navigation make it accessible even for users who aren't tech-savvy. Features like real-time tracking and detailed mechanic profiles add an extra layer of transparency and trust.",
  },
  {
    name: "Michael Johnson",
    title: "Entrepreneur",
    avatar: "",
    feedback:
      "I appreciate how quickly the system matches users with service providers. The live tracking feature ensures I know exactly when help will arrive, which is especially crucial during emergencies.",
  },
];

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch placeholder images and update the testimonials array
    const fetchImages = async () => {
      try {
        const responses = await Promise.all(
          initialTestimonials.map(() =>
            fetch("https://picsum.photos/200/200").then((res) => res.url)
          )
        );
        const updatedTestimonials = initialTestimonials.map((testimonial, index) => ({
          ...testimonial,
          avatar: responses[index],
        }));
        setTestimonials(updatedTestimonials);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="m-0">
      <div className="max-w-7xl mx-auto px-1 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="space-y-4 max-w-2xl">
          <span className="rounded-lg bg-blue-100 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-800 dark:text-gray-100">
            Testimonials
          </span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            FeedBack
          </h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-2 md:gap-6 relative">
          <div className="absolute -left-10 md:left-0 inset-y-0 w-3/5 z-0">
            <img
              src={img}
              alt="background"
              width={1800}
              height={1800}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex col-span-1" />
          <div className="w-full col-span-1 overflow-hidden md:col-span-2 lg:col-span-1 relative flex flex-col gap-8 z-[5] py-10 md:py-14">
            <div className="h-auto rounded-2xl shadow-lg shadow-gray-200/40 dark:shadow-none bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800">
              <div className="h-full">
                <div className="flex gap-5 md:gap-6">
                  <div className="flex min-w-max my-3 mx-3">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      width={500}
                      height={500}
                      className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-2xl "
                    />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-5">
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                        {currentTestimonial.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {currentTestimonial.title}
                      </span>
                    </div>
                    <div>
                      <p className="line-clamp-5 text-gray-700 dark:text-gray-300">
                        {currentTestimonial.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end">
              <div className="flex items-center gap-4 w-max p-1.5 rounded-full bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/30 border border-gray-200/40 dark:shadow-none dark:border-gray-800">
                <button
                  aria-label="prev"
                  onClick={handlePrev}
                  className="outline-none text-gray-700 transition hover:text-blue-600 dark:text-gray-300 p-2 md:p-2.5 hover:bg-blue-100 dark:hover:bg-blue-100 dark:hover:text-blue-600 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                    aria-label="next"
                    onClick={handleNext}
                    className="outline-none text-gray-700 transition hover:text-blue-600 dark:text-gray-300 p-2 md:p-2.5 hover:bg-blue-100 dark:hover:bg-blue-100 dark:hover:text-blue-600 rounded-full"
                    >
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                >
                <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z
"
                clipRule="evenodd"
                 />
                </svg>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

