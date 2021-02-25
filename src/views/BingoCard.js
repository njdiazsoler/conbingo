import { useState } from "react";
// import image from "../assets/img/Supporter-Blizzard-Entertainment-Logo.png";
// import data from "./data.json";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import {
  Button,
  Image as BootstrapImage,
} from "react-bootstrap";
import BingoGrid from "../components/BingoGrid";
import parsingUtils from "../utils/parsing";

const BingoCard = props => {
  const defaultItems = new Array(25).fill(false);
  const [items, setItems] = useState(defaultItems);
  const { imagePath, options } = props.data;

  const handleGenerateClick = () => {
    // const newTable = new Array(25).fill().map(() => Math.floor(Math.random() * 10))
    const newTable = parsingUtils.shuffle(
      new Array(25)
        .fill()
        .map((el, ix) => options[ix])
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

  return (
    <div className="App">
      <div id="main-app">
        <header className="App-header" data-testid="page-header">
          <div className="flex">
            <BootstrapImage
              className="custom-img"
              fluid
              src={imagePath}
              role="header-image"
            />
          </div>
        </header>
        <div className="container" data-testid="card-container">
          <BingoGrid items={items} />
        </div>
      </div>
      <div>
        <Button
          role="generate-button"
          onClick={handleGenerateClick}
        >
          Generate!
        </Button>
        <Button
          disabled={items.every((item) => !item)}
          role="download-button"
          onClick={() => createDownloadFile()}
        >
          Download!
        </Button>
      </div>
    </div>
  );
};

export default BingoCard;