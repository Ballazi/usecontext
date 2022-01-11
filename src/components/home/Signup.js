import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RootContext } from '../context/RootContext';



const Signup = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const context = useContext(RootContext);
    const navigate = useNavigate();
    const dis = email === "" || password === "";

    const addUser = () =>
    {
        context.newUser(email,password);
        localStorage.setItem("secret",true);
        navigate("/main");
    }

    return (
        <div>
            <Link className='btn btn-success' to="/home/login">Login</Link>
            <div>
                <h1>Sign Up</h1>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email ID' required />
                <input type="password" value={password} onChange={e => setpassword(e.target.value)} placeholder='Password' required />
                <button className='btn btn-success' onClick={addUser} disabled={dis}>Login</button>
            </div>
        </div>
    )
}

export default Signup
