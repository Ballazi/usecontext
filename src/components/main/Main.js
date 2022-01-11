import React, { useRef, useState, useContext } from "react";
import { Navigate, useNavigate, NavLink, Outlet } from "react-router-dom";
import { RootContext } from "../context/RootContext";
import "./Main.css";




const Makelist = (data) => {
    const context = useContext(RootContext);
    const delList = (val) => 
    {
        context.deleteList(val);
    }

  return (
    <div key={data.id} className="g-i">
      <span>{data.name}</span>
      <span>{data.email}</span>
      <span>{data.address}</span>
      <span>{data.state}</span>
      <span>{data.code}</span>
      <NavLink className="g-b" to={`/main/edit/${data.id}`}>
        <img className="img" src={data.edit} alt="any" />
      </NavLink>
      <button onClick={() => delList(data.id)} className="g-b">
        <img className="img" src={data.delete} alt="any" />
      </button>
    </div>
  );
};





const Main = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [code, setcode] = useState();
  const context = useContext(RootContext);
  const ref = useRef(localStorage.getItem("secret"));
  const navigate = useNavigate();

  const makeList = (e) => {
    e.preventDefault();
    context.addList(name, email, address, state, code);
    navigate("/main");
  };

  const dis =
    name === "" ||
    email === "" ||
    address === "" ||
    state === "" ||
    code === null;

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      {ref.current ? (
        <>
          <button className="btn btn-success" onClick={logOut}>
            Log Out
          </button>
          <hr />
          <h1>List</h1>
          <hr />
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="b-i"
            placeholder="Name"
            required
          />
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="b-i"
            placeholder="Email ID"
            required
          />
          <br />
          <input
            type="text"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            className="b-i"
            placeholder="Address"
            required
          />
          <br />
          <input
            type="text"
            value={state}
            onChange={(e) => setstate(e.target.value)}
            className="b-i"
            placeholder="State"
            required
          />
          <br />
          <input
            type="number"
            value={code}
            onChange={(e) => setcode(e.target.value)}
            className="b-i"
            placeholder="Post Code"
            required
          />
          <br />
          <button className="btn btn-success" onClick={makeList} disabled={dis}>
            Create List
          </button>
          <hr />
          {(context.listData).map(Makelist)}
          <Outlet />
        </>
      ) : (
        <Navigate replace to="/" />
      )}
    </div>
  );
};

export default Main;
