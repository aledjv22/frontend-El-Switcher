import useWebsocketLobby from '../../hooks/useWebsocketLobby';
import LeaveButton from '../LeaveButton/LeaveButton';
import StartGameButton from '../StartGameButton/StartGameButton';
import { PlayerContext } from '../../contexts/PlayerProvider';
import { useContext } from 'react';
import useGetGame from '../../hooks/useGetGame';
import { useParams } from 'react-router-dom';

const LobbyCard = () => {
  const { gameId } = useParams();
  const { listOfPlayers, canStartGame } = useWebsocketLobby();
  const { isOwner } = useContext(PlayerContext);
  const { game } = useGetGame(gameId);

  return (
    <div className='bg-[#0c0c0c] rounded-xl text-[#f1f1f1] text-center flex flex-col gap-16 px-8 py-12 max-w-3xl m-auto'>
      <h2 className='lekton-bold text-6xl underline'>
        {game ? game.gameName : 'Nombre del juego'}
      </h2> 
      <div className='flex flex-col gap-0'>
        <p className='lekton-bold text-4xl'>
          Jugadores conectados: {listOfPlayers.length}
        </p>
        <p className='lekton-bold text-4xl'>
          Mín. jugadores: {' '}
          {game ? game.minPlayers : 'Número mínimo de jugadores'}
        </p>
        <p className='lekton-bold text-4xl'>
          Max. jugadores: {' '}
          {game ? game.maxPlayers : 'Número máximo de jugadores'}
        </p>
      </div>

      {isOwner ? (
        <div className='flex flex-row gap-5 justify-center'>
          <StartGameButton isDisabled={!canStartGame} />
          <LeaveButton type={'lobby'} />
        </div>
      ) : (
        <div className='flex flex-col gap-3'>
          <p className='lekton-bold text-2xl text-[#60d394]'>
            Esperando que el owner comience la partida...
          </p>
          <div className='flex justify-center'>
            <LeaveButton type={'lobby'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LobbyCard;