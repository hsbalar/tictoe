import React, {useState} from 'react';
import Square from './Square/Sqaure';
import {View, Button, Text, SafeAreaView, ScrollView} from 'react-native';

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
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.board}>
            <View style={styles.tiles}>
              <View>
                <Square
                  text={board[0]}
                  id={0}
                  key="square-0"
                  handleClick={handleClick}
                />
                <Square
                  text={board[1]}
                  id={1}
                  key="square-1"
                  handleClick={handleClick}
                />
                <Square
                  text={board[2]}
                  id={2}
                  key="square-2"
                  handleClick={handleClick}
                />
              </View>
              <View>
                <Square
                  text={board[3]}
                  id={3}
                  key="square-3"
                  handleClick={handleClick}
                />
                <Square
                  text={board[4]}
                  id={4}
                  key="square-4"
                  handleClick={handleClick}
                />
                <Square
                  text={board[5]}
                  id={5}
                  key="square-5"
                  handleClick={handleClick}
                />
              </View>
              <View>
                <Square
                  text={board[6]}
                  id={6}
                  key="square-6"
                  handleClick={handleClick}
                />
                <Square
                  text={board[7]}
                  id={7}
                  key="square-7"
                  handleClick={handleClick}
                />
                <Square
                  text={board[8]}
                  id={8}
                  key="square-8"
                  handleClick={handleClick}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.title}>
              {(win === 'X' || win === 'O') && win + ' won the game'}
              {win === 'T' && 'Game Tie'}
            </Text>
            <Button title="Restart" onPress={reset} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = {
  tiles: {
    flexDirection: 'row',
  },
  board: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
};

export default Board;
