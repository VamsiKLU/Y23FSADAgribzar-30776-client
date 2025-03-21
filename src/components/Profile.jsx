import React from "react";
import "./Profile.css";

const Profile = () => {
  const user = {
    name: "Farmers Market",
    bio: "Connecting Farmers with Buyers 🌾 | Fresh Produce Delivered 🍎",
    posts: [
      { id: 1, img: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg", caption: "Organic Tomatoes 🍅" },
      { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MQuoeOp95ilWUpl8A3usXvr2FRjf4Ujviw&s", caption: "Freshly Harvested Wheat 🌾" },
      { id: 3, img: "https://ichef.bbci.co.uk/images/ic/1200x675/p06hk0h6.jpg", caption: "Seasonal Mangoes 🥭" },
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
      <div className="profile-posts">
        {user.posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.img} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
