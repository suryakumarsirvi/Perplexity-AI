import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  loginService,
  registerService,
  logoutService,
  GoogleAuthURL,
} from "../services/auth.service";
import { setUser, clearUser } from "../slice/auth.slice";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const response = await registerService(data);
      dispatch(setUser(response.user || response));
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await loginService(data);
      dispatch(setUser(response.user || response));
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleGoogleAuth = () => {
    const popup = window.open(
      GoogleAuthURL(),
      'googleAuthPopup',
      'width=500,height=650'
    );

    if (!popup) {
      console.error('Unable to open Google login popup. Please allow popups.');
      return;
    }

    const checkLocalStorage = () => {
      const stored = localStorage.getItem('googleAuthSuccess');
      if (!stored) {
        if (!popup.closed) {
          window.setTimeout(checkLocalStorage, 500);
        }
        return;
      }

      try {
        const payload = JSON.parse(stored);
        dispatch(setUser(payload));
      } catch (err) {
        console.error('Failed to parse Google auth payload', err);
      }

      localStorage.removeItem('googleAuthSuccess');

      if (!popup.closed) {
        popup.close();
      }
      navigate('/home');
    };

    checkLocalStorage();
  };

  const handleLogout = async () => {
    try {
      await logoutService();
      dispatch(clearUser());
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return {
    handleRegister,
    handleLogin,
    handleLogout,
    handleGoogleAuth,
    loginService,
  };
};

export default useAuth;
