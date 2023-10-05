import React from 'react'
import './GamePage.css'
import gamecharacterImage from '../../assets/gamecharacter3.png'
const GamePage = () => {
  return (
    <div className='game-page-main'>
       <div className='game-character'>
        <img src={gamecharacterImage} className='gamecharacterImage'></img>
       </div>


       <div className='game-info'>
        <div className='game-name-info'>
            <h1 className='game-name'>SMASH CARDS</h1>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus eaque ipsa distinctio voluptates quisquam unde exercitationem velit incidunt nesciunt consequuntur maxime, delectus provident, eligendi quibusdam dolorem expedita illo suscipit!
        </div>
        <div className='game-buttons'>
            <button className='btn play-btn'>PLAY--</button>
            <button className='btn learn-btn'>Learn about dev</button>
        </div>

        <div className='sorce-code'>
            <button className='btn2 source-code1'><i class="fa-solid fa-code"></i>Souce code</button>
            <button className='btn2 source-code2'><i class="fa-solid fa-display-chart-up-circle-currency"></i>Contact Developer</button>
            <button className='btn2 source-code3'><i class="fa-solid fa-circle-dollar-to-slot"></i>DONATE</button>
        </div>
       </div>
    </div>
  )
}

export default GamePage
