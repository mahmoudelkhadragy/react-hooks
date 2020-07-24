import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCount] = useState(0);
  const [title, setTitle] = useState("");

  const handleCounter = () => {
    setCount((c) => c + 1);
  };
  const handleTitle = () => {
    document.title = setTitle("mahmoud");
  };

  useEffect(() => {
    console.log("inside useEffect 1");
    document.title = title;
    return () => {
      setTimeout(function () {
        setTitle("mahmoud");
      }, 500);
      console.log("cleanup");
    };
  }, [title]);
  useEffect(() => {
    console.log("inside useEffect 2");
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  return (
    <div className="container mt-4">
      <button
        onClick={handleCounter}
        className="btn btn-primary d-block m-auto"
      >
        Increament
      </button>
      <button onClick={handleTitle} className="btn btn-secondary mx-2">
        change Title
      </button>
      <h1 className="text-center mt-3">{counter}</h1>
    </div>
  );
}

export default App;
