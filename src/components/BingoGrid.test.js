import { render, screen } from "@testing-library/react";
import BingoCard from "./BingoCard";
import data from '../data.json';
import parsingUtils from '../utils/parsing';

test("Card items are present and empty", async () => {
  let items = new Array(25).fill(false);
  render(<BingoCard  items={items}/>);
  const cardElements = screen.getAllByRole(/bingo-card/i);
  expect(cardElements[0]).toBeInTheDocument();
  expect(cardElements[0]).not.toHaveTextContent("content");
});

test("Card items exist and contain text", async () => {
  const items = parsingUtils.shuffle(
    new Array(25)
      .fill()
      .map((el, ix) => data.blizzard[ix])
  );
  // get random number between 0 and 9
  const randItem = Math.floor(Math.random() * 10);
  render(<BingoCard items={items}/>);
  const cardElements = screen.getAllByRole(/bingo-card/i);
  expect(cardElements[randItem]).toHaveTextContent(items[randItem]);

});
