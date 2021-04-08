import { Component } from "react";
import DisplayUser from "./DisplayUser";

class GetUserData extends Component {
  state = {
    currentUser: {},
    buttonCliked: false,
  };

  handleNextUserClick = () => {
    const url = `https://randomuser.me/api/`;
    const that = this;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .then((response) => {
        that.setState({
          currentUser: response,
          buttonCliked: true,
        });
      })
      .catch((error) => console.log(error, "Nie można pobrać danych"));
  };

  render() {
    return (
      <>
        <button onClick={this.handleNextUserClick}>
          {this.state.buttonCliked ? "Next user" : "Show user"}
        </button>
        {this.state.buttonCliked ? (
          <DisplayUser user={this.state.currentUser} />
        ) : null}
      </>
    );
  }
}

export default GetUserData;
