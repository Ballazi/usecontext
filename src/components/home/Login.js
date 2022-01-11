import React, {useContext,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RootContext } from '../context/RootContext';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const context = useContext(RootContext);
    const navigate = useNavigate();
    const loginUser = () =>
    {
        const obj = (context.usersData).find(val => val.email===email && val.password === password);
        if(obj === undefined)
        {
            alert("Invalid Email or Password...");
        }
        else
        {
            navigate("/main");
            localStorage.setItem("secret",true);
        }
    }
    const dis = email === "" || password === "";
    return (
        <div>
            <Link className='btn btn-success' to="/home/signup">SignUp</Link>
            <div>
                <h1>Login</h1>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email ID' required />
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' required />
                <button className='btn btn-success' onClick={loginUser} disabled={dis}>Login</button>
            </div>
            
        </div>
    )
}

export default Login
