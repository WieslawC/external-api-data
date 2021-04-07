import { Component } from "react";

class ShowUser extends Component {
  state = {
    userIndex: 1,
    currentUser: {},
  };
  componentDidMount() {
    // const url = `https://jsonplaceholder.typicode.com/users/${this.state.userIndex}`;
    // fetch(url)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw Error(response.statusText);
    //   })
    //   .then((response) => {
    //     this.setState({
    //       currentUser: response,
    //     });
    //   })
    //   .catch((error) => console.log(error, "Nie można pobrać danych"));
  }

  handleShowUserClick = () => {
    const url = `https://jsonplaceholder.typicode.com/users/${this.state.userIndex}`;
    const that = this;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .then((response) => {
        that.setState((prevState) => ({
          userIndex: prevState.userIndex + 1,
          currentUser: response,
        }));
      })
      .catch((error) => console.log(error, "Nie można pobrać danych"));
  };

  render() {
    return (
      <>
        <button onClick={this.handleShowUserClick}>ShowUser</button>
        <div>{this.state.currentUser.name}</div>
      </>
    );
  }
}

export default ShowUser;
