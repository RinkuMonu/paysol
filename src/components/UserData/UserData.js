import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../services/AxiosInstance";

// Context Create Karo
export const DataContext = createContext();

const UserData = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("id");

  // API Call Function
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/auth/view/${userId}`)
      setData(response.data); // Store API Data
      setLoading(false);
    } catch (error) {
      setError(error.message || "Something went wrong");
      setLoading(false);
    }
  };

  // Component mount hone pe API call karega
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

export default UserData;
