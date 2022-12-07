import React, { useState, useEffect } from "react";
import axios from "axios";

const breadcrumb = {
  backgroundColor: "white",
  border: "1px solid rgba(0, 0, 0, 0.125)",
  borderRadius: "0.37rem",
};

const setStyle = {
  margin: "20px auto 20px auto",
  textAlign: "center",
  display: "block",
};

function Breadcrumb(props) {
  const [paths, setPaths] = useState([]);
  const [directories, setDirectories] = useState([]);
  const [path, setPath] = useState("home");

  useEffect(() => {
    console.log("Data", path);
    axios.get(`http://localhost:5000/path/${path}`).then((result) => {
      if (result.data.dir) setDirectories(result.data.dir);
      else setDirectories(null);
      setPaths(result.data.paths);
    });
  }, [path]);

  function isLast(index) {
    return index === paths.length - 1;
  }

  const breadCrumpContent = (
    <nav className="row justify-content-center mt-4">
      <ol className="breadcrumb" style={breadcrumb}>
        {paths.map((crumb, ci) => {
          const disabled = isLast(ci) ? "disabled" : "";

          return (
            <li key={ci} className="breadcrumb-item align-items-center">
              <button
                className={`btn btn-link ${disabled}`}
                onClick={() => setPath(crumb)}
              >
                {crumb}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );

  const subDirectoriesContent = directories ? (
    directories.map((directory, index) => {
      return (
        <button
          style={{ margin: "auto" }}
          type="button"
          className="btn btn-info col-3"
          key={index}
          onClick={(e) => setPath(directory)}
        >
          {directory}
        </button>
      );
    })
  ) : (
    <h3>This is file: {path}</h3>
  );

  return (
    <div className="container">
      <div className="row">{breadCrumpContent}</div>
      <h4 className="row col-7" style={setStyle}>
        Welcome to {path} page
      </h4>
      <div className="row">
        {directories ? (
          <h3 className="row col-8" style={setStyle}>
            Subdirectories
          </h3>
        ) : (
          ""
        )}
        <div className="row justify-content-center">
          {subDirectoriesContent}
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
