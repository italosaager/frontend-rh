'use client'
import { createContext, useContext, useState } from 'react';

const JobDataContext = createContext();

export function useJobData() {
  return useContext(JobDataContext);
}

export function JobDataProvider({ children }) {
  const [jobData, setJobData] = useState([]);
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [tipo, setTipo] = useState("");

  return (
    <JobDataContext.Provider value={{ jobData, setJobData, nome, setNome, cidade, setCidade, tipo, setTipo }}>
      {children}
    </JobDataContext.Provider>
  );
}
