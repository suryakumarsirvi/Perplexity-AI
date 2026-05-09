import React from 'react'
import { useDispatch } from 'react-redux'
import { loginService, registerService } from '../services/auth.service';
import { setUser } from '../slice/auth.slice';

const useAuth = () => {
  const dispatch = useDispatch();

  const handleRegister = async(data)=>{
    const response = await registerService(data);
    dispatch(setUser(data));
  }

  const handleLogin = async(data)=>{
    const response = await loginService(data);
    dispatch(setUser(data));
  }

  return {handleRegister, handleLogin}
}

export default useAuth