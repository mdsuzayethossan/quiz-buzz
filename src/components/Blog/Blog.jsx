import React from "react";

const Blog = () => {
  return (
    <div className="container mt-10 grid grid-cols-3 gap-10">
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            what is the purpose of react router?
          </div>
          <div className="collapse-content">
            <p>
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does react context api work?
          </div>
          <div className="collapse-content">
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          tabIndex={3}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the useRef hook?
          </div>
          <div className="collapse-content">
            <p>
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
            <p>
              useRef returns a mutable ref object whose .current property is
              initialized to the passed argument ( initialValue ). The returned
              object will persist for the full lifetime of the component.
              Essentially, useRef is like a “box” that can hold a mutable value
              in its .current property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
