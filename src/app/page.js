'use client'
import React, { useEffect, useState } from 'react';
import { getVagas } from '@/service';
import { useJobData } from '@/contexts/JobDataContext';
import { useRouter } from 'next/navigation';
import './global.css';

export default function Vagas() {
  const router = useRouter();
  const { jobData, setJobData } = useJobData();

  const description = (n, c, t) => {
    localStorage.setItem('nome', JSON.stringify(n))
    localStorage.setItem('cidade', JSON.stringify(c))
    localStorage.setItem('tipo', JSON.stringify(t))
    router.push('/descricao');
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getVagas();
        setJobData(result);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <div className='container'>
        <h1>Vagas</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cidade</th>
              <th>Tipo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.cidade}</td>
                <td>{item.tipo}</td>
                <td><button onClick={() => description(item.nome, item.cidade, item.tipo)}>Descrição</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  )
}
