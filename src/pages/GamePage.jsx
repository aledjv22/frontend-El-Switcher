import DisplayPlayers from '../components/DisplayPlayers/DisplayPlayers';
import Board from '../components/Board/Board';
import WinnerMessage from '../components/WinnerMessage/WinnerMessage';
import BgOverlay from '../components/BgOverlay/BgOverlay';
import LeaveButton from '../components/LeaveButton/LeaveButton';
import EndTurnButton from '../components/EndTurnButton/EndTurnButton';
import { useContext } from 'react';
import { GameContext } from '../contexts/GameProvider';
import PlayMovementLogicProvider from '../contexts/PlayMovementLogicProvider';
import PlayMovementButton from '../components/PlayMovementButton/PlayMovementButton';
import CancelMovementButton from '../components/CancelMovementButton/CancelMovementButton';

const GamePage = () => {
  const { listOfPlayers, board, winnerInfo } = useContext(GameContext);

  return (
    <>
      <BgOverlay />
      <PlayMovementLogicProvider>
        <DisplayPlayers listOfPlayers={listOfPlayers} />
        <Board board={board} />
        <div className='absolute flex flex-col gap-3 top-96 left-24'>
          <EndTurnButton />
          <PlayMovementButton />
          <CancelMovementButton />
        </div>
      </PlayMovementLogicProvider>
      {winnerInfo !== null && (
        <WinnerMessage winnerName={winnerInfo.nameWinner} />
      )}
      <LeaveButton />
    </>
  );
};

export default GamePage;
