import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../core/components/Button';
import './styles.scss';

export const Home = () => (
  <div className="col-8">
    <h1 className="home-title">Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
    <p className="home-paragraph">
      Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. Favor
      observar as instruções passadas no capítulo sobre a elaboração deste
      projeto. Este design foi adaptado a partir de Ant Design System for Figma,
      de Mateusz Wierzbicki: antforfigma@gmail.com
    </p>
    <Link to="/search">
      <div className="btn-margin">
        <Button text="Começar" />
      </div>
    </Link>
  </div>
);
