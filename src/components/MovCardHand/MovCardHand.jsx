import MovementCard from '../MovementCard/MovementCard';
import { useContext } from 'react';
import { GameContext } from '../../contexts/GameProvider';
import { PlayMovementLogicContext } from '../../contexts/PlayMovementLogicProvider';

const MovCardHand = () => {
  const { movementCards } = useContext(GameContext);
  const { selectMovementCard, isSelectedMovementCard, canSelectMovementCard } =
    useContext(PlayMovementLogicContext);

  return (
    <div className='flex flex-row gap-6'>
      {movementCards.map((movementCard) => (
        <MovementCard
          key={movementCard.movementcardId}
          movement={movementCard.moveType}
          onClick={() => selectMovementCard(movementCard)}
          isSelected={isSelectedMovementCard(movementCard)}
          disabled={!canSelectMovementCard()}
        />
      ))}
    </div>
  );
};

export default MovCardHand;
