import React, {useState, useContext} from 'react';
import { useParams,NavLink, useNavigate,  } from 'react-router-dom';
import "./Main.css";
import { RootContext } from '../context/RootContext';


const UpdateList = () => {
    const {id} = useParams();
    const context = useContext(RootContext);
    const navigate = useNavigate();
    const obj = (context.listData).find(val => val.id === parseInt(id));

    const [name, setname] = useState(obj.name);
    const [email, setemail] = useState(obj.email);
    const [address, setaddress] = useState(obj.address);
    const [state, setstate] = useState(obj.state);
    const [code, setcode] = useState(obj.code);


    const updateChange = () => 
    {
        const updatedlist = {id:parseInt(id),name,email,address,state,code,edit:"https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_58-512.png",delete:"https://cdn-icons-png.flaticon.com/512/1214/1214428.png"};

        context.updateList(parseInt(id),updatedlist);
        navigate("/main");
    }
    return (
        <div className='popup'>
            <NavLink className="btn btn-success" to="/main">close</NavLink>
            <hr />
            <input type="text" defaultValue={name} onChange={(e) => setname(e.target.value)} className="b-i" placeholder="Name" required />
          <br />
          <input type="email" defaultValue={email} onChange={(e) => setemail(e.target.value)} className="b-i" placeholder="Email ID" required />
          <br />
          <input type="text" defaultValue={address} onChange={(e) => setaddress(e.target.value)} className="b-i" placeholder="Address" required />
          <br />
          <input type="text" defaultValue={state} onChange={(e) => setstate(e.target.value)} className="b-i" placeholder="State" required />
          <br />
          <input
            type="number"
            defaultValue={code} onChange={(e) => setcode(e.target.value)}
            className="b-i"
            placeholder="Post Code"
            required
          />
          <br />
          <button onClick={updateChange}>Edit List</button>
        </div>
    )
}

export default UpdateList;
