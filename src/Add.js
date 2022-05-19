import React from "react";

const Add = () => {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newImg, setNewImg] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newBd, setNewBd] = useState("");
  return (
    <div>
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
      
    </div>
  );
};

export default Add;
