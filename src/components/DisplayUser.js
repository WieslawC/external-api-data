import "../style/DisplayUser.css";

const DisplayUser = (props) => {
  const user = props.user.results[0];
  return (
    <div className="userBox">
      <p className="name">
        {user.name.first} {user.name.last}
      </p>
      <img src={user.picture.large} alt="userPicture" />
      <p className="address">
        {user.location.city} - {user.location.country}
      </p>
    </div>
  );
};

export default DisplayUser;
