import React, { Component } from 'react';
import chihuahuas from "./cards.json";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

class App extends Component {

  state = {
    chihuahuas,
    randomNumber: 0,
    score: 0,
    tally: 0
  };

  componentDidMount() {
    this.setState({
      randomNumber: this.getRandomNumber(this.state.chihuahuas)
    });
  }

  getRandomNumber = arr => Math.floor(Math.random() * arr.length + 1);

  handleCardClick = id => {
    this.setState({ tally: this.state.tally + 1 })
    if (id === this.state.randomNumber) {
      this.setState({
        score: this.state.score + 1,
        randomNumber: this.getRandomNumber(this.state.chihuahuas)
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Header score={this.state.score} tally={this.state.tally} />
          <div className="row">
            {this.state.chihuahuas.map(chihuahua => (
              <Card
                key={chihuahua.id}
                id={chihuahua.id}
                name={chihuahua.name}
                image={chihuahua.image}
                handleCardClick={this.handleCardClick}
              />
            ))}
          </div>
          <Footer />
        </Container>
      </div>
    );
  }

}

export default App;
