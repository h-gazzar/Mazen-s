import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import video from '../public/vecteezy_ocean-day-to-night-timelapse_23152644.mp4'
import VideoPlayer from './VideoPlayer.jsx'

function App() {
  return(
    <div className='main'>
          <Header></Header>
          <VideoPlayer />

    </div>
  );
}

export default App
