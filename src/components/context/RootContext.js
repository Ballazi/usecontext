import React, { createContext, useState } from "react";

export const RootContext = createContext();

const RootContextProvider = (props) => {
  const [Users, setUsers] = useState([
    { email: "test@gmail.com", password: "test" },
  ]);
  const [list, setlist] = useState([
    {
      id: 1,
      name: "Balram Kumar",
      email: "balram17dec1999@gmail.com",
      address: "Durgapatti",
      state: "Bihar",
      code: 847240,
      edit:"https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_58-512.png",
      delete:"https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
    }
  ]);

  const listData = list;
  const usersData = Users;
  const newUser = (email, password) => {
    const obj = { email, password };
    setUsers([...Users, obj]);
  };

  const addList = (name, email, address, state, code) => {
    const obj = {
      id: list.length + 1,
      name,
      email,
      address,
      state,
      code,
      edit: "https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_58-512.png",
      delete: "https://cdn-icons-png.flaticon.com/512/1214/1214428.png",
    };
    setlist([...list, obj]);
  };

  const deleteList = (id) => {
    setlist(list.filter((val) => val.id !== id));
  };

  const updateList = (id, updatedlist) => {
    setlist(list.map((list) => (list.id === id ? updatedlist : list)));
  };

  return (
    <RootContext.Provider
      value={{ usersData, listData, newUser, addList, deleteList, updateList }}
    >
      {props.children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
