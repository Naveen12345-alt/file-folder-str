import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const obj = {
  directory: {
    name: "medusa-service",
    directory: {
      name: "microapps2",
      file: "abcd.html"
    },
    file: "abcd2.css"
  }
};

const Folder = ({ folderName, directoryDepth }) => {
  const margin_Left = `${directoryDepth * 10}px`;
  return (
    <div
      style={{
        marginLeft: `${margin_Left}`,
        fontWeight: 600,
        textAlign: "left"
      }}
    >
      {folderName}
    </div>
  );
};

const File = ({ fileName, fileDepth }) => {
  const margin_Left = `${fileDepth * 10}px`;
  return (
    <div style={{ marginLeft: margin_Left, textAlign: "left" }}>{fileName}</div>
  );
};

const Sayhi = () => {
  const [directoryObj, setDirectoryObj] = useState(null);
  const [directoryStructure, setDirectoryStructure] = useState(null);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await fetch(FETCH_URL)
    //   const data = await response.json()
    // }
    setDirectoryObj(obj);

    // fetchData()
  }, []);

  useEffect(() => {
    const res = [];
    function xyz(obj, depth = 0) {
      for (let key in obj) {
        if (obj[key] !== null && typeof obj[key] === "object") {
          const FolderDiv = (
            <Folder
              key={uuidv4()}
              folderName={obj[key].name}
              directoryDepth={depth + 1}
            ></Folder>
          );
          res.push(FolderDiv);
          xyz(obj[key], depth + 1);
        } else if (key !== "name") {
          const fileDiv = (
            <File
              key={uuidv4()}
              fileName={obj[key]}
              fileDepth={depth + 1}
            ></File>
          );

          res.push(fileDiv);
        }
      }
    }
    xyz(directoryObj);

    setDirectoryStructure(res);
  }, [directoryObj]);

  return <>{directoryStructure}</>;
};

export default Sayhi;
