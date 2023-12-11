'use client' 
import Link from "next/link";
import '../global.css';

export default function Description() {

  const nome = JSON.parse(localStorage.getItem('nome'))
  const cidade = JSON.parse(localStorage.getItem('cidade'))
  const tipo = JSON.parse(localStorage.getItem('tipo'))

  return <>
    <div className="container">
      <h1>Descrição da Vaga</h1>
      <table>
        <thead>
          <th>Nome</th>
          <th>Cidade</th>
          <th>Tipo</th>
          <th>Adicionar candidato</th>
        </thead>
        <tbody>
          <td>{nome}</td>
          <td>{cidade}</td>
          <td>{tipo}</td>
          <td><button>Adicionar</button></td>
        </tbody>
      </table>
      <Link href="/candidatos">Todos os candidatos dessa vaga</Link>
    </div>
  </>

}
