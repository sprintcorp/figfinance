import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {login} from "../redux/actions/UserAction";
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
    if(error){
      toast.error(error);
    }
  }, [navigate,userInfo,error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row mt-5 mb-5 d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-5">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"
                       className="form-control"
                       id="exampleInputEmail1"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password"
                       className="form-control"
                       id="exampleInputPassword1"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
              </div>
              {loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <button type="submit" className="btn btn-primary">Login</button>
              )}

              <p>
                <Link to="/register">
                  Don't have an account? <strong>Click here to register</strong>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen;
