import { useContext } from 'react';
import FigureCardHand from '../FigureCardHand/FigureCardHand';
import MovCardHand from '../MovCardHand/MovCardHand';
import { PlayerContext } from '../../contexts/PlayerProvider';
import BackMovCardHand from '../BackMovCardHand/BackMovCardHand';
import useOpponentMovCards from '../../hooks/useOpponentMovCards';

const PlayerInfo = ({ playerName, playerId, index, isTurn }) => {
  const { playerID: currentPlayerID } = useContext(PlayerContext);
  const { getTotalMovCardsForOpponent } = useOpponentMovCards();

  const positionStyles = [
    'bottom-10 left-16', // corner bottom left
    'top-10 left-16', // corner top left
    'top-10 right-16', // corner top right
    'bottom-10 right-16', // corner bottom right
  ];

  return (
    <div className={`absolute ${positionStyles[index]} z-20 p-2`}>
      {currentPlayerID === playerId ? (
        <MovCardHand />
      ) : (
        <BackMovCardHand
          totalMovCards={getTotalMovCardsForOpponent(playerId)}
        />
      )}
      <FigureCardHand playerId={playerId} />
      <p className='lekton-bold text-white text-lg'>
        {playerName}{' '}
        <span className='text-gray-500'>{isTurn && '(En turno)'}</span>
      </p>
    </div>
  );
};

export default PlayerInfo;
