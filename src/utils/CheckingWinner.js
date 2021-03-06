import { useSelector } from "react-redux";

//possible arrays can be win
export const CheckWinner = (selectedBoxArray, player) => {
  const winnerArray = [
    [1, 5, 9],
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const checkedArray = [];
  let winnerLine = [];
  let result = "playing";
  winnerArray.map((item) =>
    checkedArray.push(item.map((element) => selectedBoxArray.includes(element)))
  );
  const myIndex = checkedArray.findIndex((item) => !item.includes(false));

  if (myIndex !== -1) {
   winnerLine = winnerArray[myIndex];
    result = player
  } else if (myIndex === -1 && selectedBoxArray.length === 5) {
    console.log("draw!");
     result = "Draw"
  }
  //console.log(winnerLine, myIndex);
  return [result, winnerLine];
};
