import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <navigation>
          <div id="navigation-logo-section" class="navigation-section">
            <FontAwesomeIcon className="audio-icon" icon={faSliders} size="2x"/>
          </div>
          <div id="navigation-author-section" class="navigation-section">
            <label>ELIAS SYYRILÄ</label>
          </div>
        </navigation>
      </header>
      <body>
        <main>
          <player>
            <div class="player-sources-section player-section"></div>
            <div class="player-search-section player-section"></div>
            <div class="player-title-section player-section">
              <h1 class="title-text">NOISE ZONE</h1>
            </div>
          </player>
        </main>
      </body>
    </div>
  );
}

export default App;
