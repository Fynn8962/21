import { useState } from 'react'
import StartScreen from './components/StartScreen';
import Lobby from './components/Lobby';
import './App.css'

export default function App() {
  const [LobbyData, setLobbyData] = useState(null);

  if (lobbyData == null) {
    return (
      <div>
        <StartScreen onJoin={setLobbyData} />
      </div>
    );
  }
  else {
    return (
      <div>
        <Lobby lobbyData={lobbyData} />
      </div>
    )
  }

}