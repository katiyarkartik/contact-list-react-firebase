import "./App.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { BrowserRouter } from "react-router-dom";
function App() {
  // Taking input values from the users
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newImg, setNewImg] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newBd, setNewBd] = useState("");
  //Creating and Adding a User CREATE/CRUD C
  const CreateUser = async () => {
    await addDoc(usersRef, {
      Name: newName,
      Age: Number(newAge),
      Contact: newContact,
      Avatar: newImg,
      Tag: newTag,
      Birthday: newBd,
    });
    window.location.reload(false);
  };

  //Database User Array READ/CRUD R
  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };

    getUsers();
  }, []);

  //Update User  UPDATE/CRUD

  const updateUser = async (id, Age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { Age: Age + 1 };
    await updateDoc(userDoc, newFields);
    window.location.reload(false);
  };

  //Delete User DELETE/CRUD
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload(false);
  };
  //Return
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className="main">
        <div className="AddContact split">
          <p>Add Contact</p>
          <input
            onChange={(e) => {
              setNewName(e.target.value);
            }}
            placeholder="name"
          />
          <input
            type="text"
            onChange={(e) => {
              setNewAge(e.target.value);
            }}
            placeholder="age"
          />
          <input
            type="text"
            onChange={(e) => {
              setNewContact(e.target.value);
            }}
            placeholder="Contact"
          />
          <input
            type="text"
            onChange={(e) => {
              setNewImg(e.target.value);
            }}
            placeholder="Image"
          />
          <input
            type="text"
            onChange={(e) => {
              setNewTag(e.target.value);
            }}
            placeholder="tag"
          />
          <input
            type="text"
            onChange={(e) => {
              setNewBd(e.target.value);
            }}
            placeholder="Birthday"
          />

          <button onClick={CreateUser} className="addbtn">
            ADD
          </button>
        </div>
        <div className="list">
          <div>
            <p className="contact-no">{users.length} Contacts</p>
          </div>

          <div className="search-bar">
            <input className="search-box" type="text" placeholder="Search" />
            <button className="search">
              <SearchIcon />
            </button>
          </div>
          {users.map((user) => {
            return (
              <div className="container">
                <div className="left">
                  <img className="img" src={user.Avatar} alt="" />
                </div>
                <div className="right">
                  <p>{user.Name}</p>
                  <p>{user.Age}</p>
                  <p>{user.Birthday}</p>
                  <p>{user.Contact}</p>
                  <p>{user.Tag}</p>
                  <button
                    onClick={() => {
                      updateUser(user.id, user.Age);
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    <p>Delete</p> <DeleteIcon />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
