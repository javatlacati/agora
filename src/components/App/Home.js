// Dependencies
import React from 'react'

const image = require('./images/Discurso_funebre_pericles.png')

// Home Component
class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <h1 className='center'>Welcome to Agora!</h1>
        <br />

        <div className='col s12 m12 l6 push-l6 image-container'>
          <img src={image} className='' alt='agora' />
        </div>
        <div className='col s12 m12 l6 pull-l6'>
          <p className=''>
            The agora (/ˈæɡərə/; Ancient Greek: ἀγορά agorá) was a central public space in ancient Greek
             city-states. The literal meaning of the word is "gathering place" or "assembly". The agora
             was the center of the athletic, artistic, spiritual and political life of the city. The
             Ancient Agora of Athens was the best-known example.
          </p>
          <p>
            Agora is a free social media platform, dedicated to fostering a free conversation without
             censorship or filtering. The platform currently supports <a href='/forums'>forums</a>
             , <a href='/chat'>chat</a>, and <a href='/announcements'>announcements</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default Home
