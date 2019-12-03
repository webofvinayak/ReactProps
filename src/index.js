import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image} alt="avatar_img" />
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Beyonc"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      contact="12345689"
      email="b@beyonce.com"
    />

    <Card
      name="Jack Bauer"
      image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      contact="987 654 321"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
