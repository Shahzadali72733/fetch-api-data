import React, { useState } from "react";
import '../index.css';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];



const Split = () => {
  const [showFriend, setShowFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  const handleShowFriend = () => {
    setShowFriend((prev) => !prev);
  };

  const handleSelectFriend = (friend) => {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
  };

  const handleSplitBill = (friendId, userExpense, friendExpense, whoIsPaying) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === friendId
          ? {
              ...friend,
              balance:
                whoIsPaying === "user"
                  ? friend.balance + userExpense
                  : friend.balance - friendExpense,
            }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showFriend && <FormAddFriend onAddFriend={setFriends} />}
        <Button onClick={handleShowFriend}>
          {showFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          friend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

const FriendsList = ({ friends, onSelectFriend, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          isSelected={selectedFriend?.id === friend.id}
        />
      ))}
    </ul>
  );
};

const Friend = ({ friend, onSelectFriend, isSelected }) => {
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;

    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image: `${image}?u=${crypto.randomUUID()}`,
      balance: 0,
    };

    onAddFriend((friends) => [...friends, newFriend]);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🙍‍♂️ Add Friend</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🤳 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

const FormSplitBill = ({ friend, onSplitBill }) => {
  const [billValue, setBillValue] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = billValue ? billValue - paidByUser : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billValue || !paidByUser) return;

    onSplitBill(friend.id, paidByUser, paidByFriend, whoIsPaying);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {friend.name}</h2>
      <label>Bill Value</label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
      <label>Your Expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > billValue ? paidByUser : Number(e.target.value))}  />

      <label>{friend.name}'s Expense</label>
      <input type="text" value={paidByFriend} readOnly />
      <label>Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Split;