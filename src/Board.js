import React, { useState } from 'react';
import Square from './Square/Sqaure';
import { View, Button, Text } from 'react-native';

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const emptyBoard = ['', '', '', '', '', '', '', '', ''];

const Board = () => {
  const [turn, setTurn] = useState('X');
  const [win, setWin] = useState(null);
  const [board, setBoard] = useState([...emptyBoard]);

  const handleClick = (id) => {
    updateState(id);
  };

  const updateState = (id) => {
    let updateBoard = [...board];
    updateBoard[id] = turn;
    setBoard(updateBoard);
    setTurn(turn === 'X' ? 'O' : 'X');
    setWin(checkWin(updateBoard));
  };

  const reset = () => {
    setBoard([...emptyBoard]);
    setTurn('X');
    setWin(null);
  };

  const checkWin = (updateBoard) => {
    let winner = null;
    winningCombination.forEach((comb, index) => {
      if (
        updateBoard[comb[0]] &&
        updateBoard[comb[0]] === updateBoard[comb[1]] &&
        updateBoard[comb[0]] === updateBoard[comb[2]]
      )
        winner = updateBoard[comb[0]];
    });
    return winner ? winner : updateBoard.includes('') ? null : 'T';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TicToe</Text>
      <View style={styles.board}>
        {board.map((text, id) => (
          <Square
            text={text}
            id={id}
            key={'square' + id}
            handleClick={handleClick}
          />
        ))}
      </View>
      <Text style={styles.title}>
        {(win === 'X' || win === 'O') && win + ' won the game'}
        {win === 'T' && 'Game Tie'}
      </Text>
      <View style={styles.reset}>
        <Button title="Restart" onPress={reset} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    marginVertical: 40,
  },
  board: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 21,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 16,
  },
  reset: {
    marginLeft: 20,
    marginRight: 20,
  },
};

export default Board;
