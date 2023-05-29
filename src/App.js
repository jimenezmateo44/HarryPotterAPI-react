import './App.css';


// import Item from './MyItem';
import React from 'react';

class HarryPotter extends React.Component {
  render() {
    return (
      <h1>Harry Potter API</h1>
    )
  }
}

class HarryPotterBody extends React.Component {

  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      nickname: null,
      house: null,
      actor: null,
      image: null,
    }
  }

  getNewCharacter() {
    const randomNumber = Math.ceil(Math.random() * 23)
    const url = `https://harry-potter-api.onrender.com/personajes/${randomNumber}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.personaje,
          nickname: data.apodo,
          house: data.casaDeHogwarts,
          actor: data.interpretado_por,
          image: data.imagen,
          loadedCharacter: true,
        })
      })



  }
  render() {
    return (
      <div>
        {
          this.state.loadedCharacter &&
          <div>
            <h1>Harry Potter Character's</h1>
            <p>Name: {this.state.name}</p>
            <p>Nickname: {this.state.nickname}</p>
            <p>House: {this.state.house}</p>
            <p>Actor: {this.state.actor}</p>
            <p>Image: </p>
            <img src={this.state.image}></img>

          </div>
        }

        <button
          type='button'
          onClick={() => this.getNewCharacter()}
          className="btn">Generate character
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HarryPotter />
        <HarryPotterBody />
      </header>
    </div>
  );
}

export default App;
