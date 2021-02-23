import { useState } from "react";
import "./App.css";
import image from "./assets/img/Supporter-Blizzard-Entertainment-Logo.png";
import data from "./data.json";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import {
  Button,
  Card,
  Image as BootstrapImage,
} from "react-bootstrap";

const App = () => {
  const defaultItems = new Array(25).fill(false);
  const [items, setItems] = useState(defaultItems);

  const handleGenerateClick = () => {
    // const newTable = new Array(25).fill().map(() => Math.floor(Math.random() * 10))
    const newTable = shuffle(
      new Array(25)
        .fill()
        .map((el, ix) => data.blizzard[ix])
    );
    setItems(newTable);
  };

  const createDownloadFile = async () => {
    const node = document.getElementById("main-app");

    try {
      const imgBlob = await htmlToImage.toBlob(node, {
        backgroundColor: "#282c34",
        pixelRatio: 1,
      });
      saveAs(imgBlob, "conbingo.png");
    } catch (error) {
      console.error("oops, something went wrong!", error);
    }
  };

  const shuffle = (list) => {
    let currentIndex = list.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(
        Math.random() * currentIndex
      );
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = list[currentIndex];
      list[currentIndex] = list[randomIndex];
      list[randomIndex] = temporaryValue;
    }

    return list;
  };

  return (
    <div className="App">
      <div id="main-app">
        <header className="App-header">
          <div className="flex">
            <BootstrapImage
              className="custom-img"
              fluid
              src={image}
              squared
            />
          </div>
        </header>
        <div className="container">
          <div
            className="align-content-center container d-flex flex-row flex-wrap justify-content-center"
            style={{
              height: "80vh",
            }}
          >
            {items.map((item, index) => {
              return (
                <Card
                  className="border-dark custom-card m-1 text-body"
                  key={index}
                >
                  <Card.Body style={{ padding: ".5rem" }}>
                    {item}
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Button
          role="generateButton"
          onClick={handleGenerateClick}
        >
          Generate!
        </Button>
        <Button
          disabled={items.every(item => !item)}
          role="saveImageButton"
          onClick={() => createDownloadFile()}
        >
          Download!
        </Button>
      </div>
    </div>
  );
};

export default App;
