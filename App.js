import React from 'react';
import WeatherWidget from './WeatherWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Віджет Погоди</h1>
      </header>
      <main>
        <WeatherWidget />
      </main>
    </div>
  );
}

export default App;
