import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/18abhishekk");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: abhishekgaikwad1403@gmail.com</h2>
      </div>
    );
  }
}
export default UserClass;
