import React, { Component } from 'react';
import Card from "./../components/Card";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Container from "./../components/Container";
import API from "./../utils/API";

class Game extends Component {

  state = {
    chihuahuas: [],
    randomNumber: 0,
    score: 0,
    tally: 0
  };

  componentDidMount() {
    API
      .getChihuahuas()
      .then(res => {
        this.setState({
          chihuahuas: res.data
        });
        this.getRandomId(this.state.chihuahuas);
      })
      .catch(err => console.log(err));
  }

  getRandomId = arr => {
    const chihuahua = arr[Math.floor(Math.random()*arr.length)]
    this.setState({
      randomNumber: chihuahua._id
    });
  };

  handleCardClick = id => {
    this.setState({ tally: this.state.tally + 1 })
    if (id === this.state.randomNumber) {
      this.setState({
        score: this.state.score + 1
      });
      this.getRandomId(this.state.chihuahuas);
    }
  }

  render() {
    return (
      <div className="Game">
        <Container>
          <Header score={this.state.score} tally={this.state.tally} />
          <div className="row">
            {this.state.chihuahuas.map(chihuahua => (
              <Card
                key={chihuahua._id}
                id={chihuahua._id}
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

export default Game;
