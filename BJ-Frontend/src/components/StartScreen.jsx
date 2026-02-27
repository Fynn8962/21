import { UseState } from 'react';
import { socket } from '../socket';

export default function StartScreen(props) {
    const [playerName, setPlayerName] = useState('');
    const [lobbyId, setLobbyId] = useState('');

    function handlePlayerNameChange(event) {
        setPlayerName(event.target.value);
    }

    function handleLobbyIdChange(event) {
        setLobbyId(event.target.value);
    }

    function handleJoin() {
        if (playername !== '' && lobbyId !== '') {
            const data = {
                lobbyId: lobbyId,
                playerName: playerName
            };

            socket.emit('join_lobby', data);
            props.onJoin(data);
        }
    }

    return (
        <div>
            <h1>Blackjack</h1>
            <input
                placehlder="Dein Name"
                onChange={handlePlayerNameChange}
            />
            <input
            placeholder="Lobby ID"
            onChange={handleLobbyIdChange}
            />
            <button onClick={handleJoin}>Beitreten / Erstellen</button>
        </div>
    )
}