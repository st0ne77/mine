import { useState } from 'react';
import './App.css';


function Square({squares}) {
  return <button></button>;
}

function App() {
  const [squares, setSquares] = useState(Array(81).fill(0));
  const [started, setStarted] = useState(false);

  function handleClick(index) {
    const nextSquares = squares.slice();
    if (!started) {
      setStarted(true);
      for (var i = 0; i < 10; ++i) {
        var randomNumber = -1;
        do {
          randomNumber = Math.floor(Math.random() * 81);
        } while (randomNumber === index);
        nextSquares[randomNumber] = 1;
      }
    }

    if ((nextSquares[index] & 1) === 0) {
      OpenCell(nextSquares, index % 9, Math.floor(index / 9))
    }
    setSquares(nextSquares);
  }

  const gridGame = squares.map((suq, index) => {
    if ((suq & 0x10) === 0) {
      return (
        <div key={index} className='square' id='close' onClick={() => handleClick(index)}>
          <div className='triangle_tl' />
          <div className='triangle_br' />
          <div className='internal_square'/>
        </div>
      );
    } else {
      let count = calcMineCount(squares, index % 9, Math.floor(index / 9));
      return (
        <div key={index} className='square' id='open'  onClick={() => handleClick(index)}>
          {count}
        </div>
      );
    }
  });

  const gridDebug = squares.map((suq, index) => {
    let mark = (suq & 0x01) === 1 ? '※' : '';
    return (
      <button key={index} className='square'>{mark}</button>
    );
  });

  return (
    <div>
      <div className="game">
        <div className='game-grid'>
          {gridGame}
        </div>
      </div>
      <div className="debug">
        <div className='game-grid'>
          {gridDebug}
        </div>
      </div>
    </div>
  );
}

function calcMineCount(squares, x, y) {
  let count = 0;




  let start_index = y * 9 + x;
  x -= 1;
  y -= 1
  let width = 3;
  let height = 3;
  if (x < 0) {
    x = 0;
    width --;
  }
  if (y < 0) {
    y = 0;
    height --;
  }
  for (let row = 0; row < height && y < 9; ++row, ++y) {
    for (let col = 0; col < width && x < 9; ++col, ++ x) {
      let i = start_index + row * 9 + col;
      if (i < 0 || i > 80) {
        continue;
      }
      if (squares[i] & 0x01 !== 0) {
        ++count;
      }
    }
  }
  return count;
}

function OpenCell(squares, x, y) {
  console.log('open ' + x + "-" + y);
  if (x < 0 || x > 8 || y < 0 || y > 8) {
    return;
  }
  let index = y * 9 + x;
  if (squares[index] !== 0) {
    return;
  }
  squares[index] |= 0x10;
  if (calcMineCount(squares, x, y) !== 0) {
    return;
  }
  OpenCell(squares, x - 1, y - 1);
  OpenCell(squares, x, y - 1);
  OpenCell(squares, x + 1, y - 1);
  OpenCell(squares, x - 1, y);
  OpenCell(squares, x + 1, y);
  OpenCell(squares, x - 1, y + 1);
  OpenCell(squares, x, y + 1);
  OpenCell(squares, x + 1, y + 1);
}

export default App;
