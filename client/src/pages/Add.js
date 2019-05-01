import React, { Component } from 'react';
import Footer from "./../components/Footer";
import Container from "./../components/Container";
import API from "./../utils/API";

class Add extends Component {

  state = {
    name: "",
    image: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    API
      .addChihuahua(this.state)
      .then(res => {
        alert(`Added a new chihuahua named ${res.data.name}`)
        this.setState({
          name: "",
          image: ""
        });
      });
  }

  render() {
    return (
      <div className="Add">
        <Container>
        <h1>Welcome to Add!</h1>
          <div className="row">
            
              <form>
                  <input
                    type="text"
                    name="name"
                    placeholder="Add a name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                <input
                  type="text"
                  name="image"
                  placeholder="Add an image"
                  value={this.state.image}
                  onChange={this.handleInputChange}
                />
                <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
              </form>
          </div>
          <Footer />
        </Container>
      </div>
    );
  }

}

export default Add;
