import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/43206830?s=460&u=9ceba8dfaa12b0f04f67ddcf21b94400d620e4d3&v=4"
            alt="Tábata Baesso"
          />
          <div>
            <strong>tabaesso/nodejs-paypal</strong>
            <p>
              A simple e-commerce project that integrates NodeJS/Paypal REST API
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/43206830?s=460&u=9ceba8dfaa12b0f04f67ddcf21b94400d620e4d3&v=4"
            alt="Tábata Baesso"
          />
          <div>
            <strong>tabaesso/nodejs-paypal</strong>
            <p>
              A simple e-commerce project that integrates NodeJS/Paypal REST API
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/43206830?s=460&u=9ceba8dfaa12b0f04f67ddcf21b94400d620e4d3&v=4"
            alt="Tábata Baesso"
          />
          <div>
            <strong>tabaesso/nodejs-paypal</strong>
            <p>
              A simple e-commerce project that integrates NodeJS/Paypal REST API
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
