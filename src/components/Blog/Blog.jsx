import React from "react";
import blogPic2 from "./contextApi.png";
import blogPic1 from "./reactRouter.png";
import blogPic3 from "./useRef.png";
const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className=" sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded  mb-10 shadow-xl">
          <img className="w-full" src={blogPic1} alt="" />
          <div className="p-5 border border-t-0 ">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Published at
              </a>
              <span className="text-gray-600"> — 10/11/2022</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-8 transition-colors duration-200 hover:text-deep-purple-accent-700 "
            >
              What is The Purpose Of React Router ?
            </a>
            <p className="mb-2 text-gray-700">
              React Router is a standerd libraby for manage routing in React.
              React Router allows changing the browser URL without reloading the
              page , It change the UI part what we want to change but not
              changing everything.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl mb-10">
          <img src={blogPic2} alt="" />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Published at
              </a>
              <span className="text-gray-600"> — 10/11/2022</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              How does Context API Work ?
            </a>
            <p className="mb-2 text-gray-700">
              React Context Api are likes global variable , as we know we can
              share a global variable anywhere in our window , Context Api are
              somthing like that , that means we create a context api in the
              root and we will be able to sahre it in all components. Context
              Api is alternative of "Props Drilling ". Props drilling is a long
              rocess we have to pass props grandParent to father then father to
              clind and goes on , but context api are easier to use .
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl">
          <img src={blogPic3} alt="" />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Published at
              </a>
              <span className="text-gray-600"> — 10/11/2022</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Film It!"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              How does useRef() hook work ?
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
