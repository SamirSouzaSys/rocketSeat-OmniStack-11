// import React from 'react';
import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {

  const [ name, setName] = useState(''); //'' text
  const [ email, setEmail] = useState(''); //'' text
  const [ whatsapp, setWhatsapp] = useState(''); //'' text
  const [ city, setCity] = useState(''); //'' text
  const [ uf, setUf] = useState(''); //'' text

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try{
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');

    } catch( err ){
      alert('Erro no cadastro, tente novamente');
    }
  }


  // return <h1>Register</h1>
  return (
    <div className = "register-container">
      <div className= "content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </section>


        {/* <form> */}
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG" 
            value={name}
            onChange={e => setName(e.target.value)}

            />
          <input
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email" 
            />
          <input
            placeholder="Whatsapp" 
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            />

          <div className="input-group">
            <input
              placeholder="Cidade" 
              value={city}
              onChange={e => setCity(e.target.value)}
              />

            {/* width="80" */}
            <input
              placeholder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{ width: 80}}
              />

          </div>
            <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}