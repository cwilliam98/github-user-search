import React from 'react';
import { Button } from '../../core/components/Button';
import './styles.scss';

export const Search = () => (
  <>
    <div className="card-base card-search-container">
      <form>
        <div className="row">
          <div className="col-8 search-content">
            <h1 className="search-title">Encontre um perfil no Github</h1>
            <input
              type="text"
              className="form-control"
              placeholder="Usuário Github"
            />
          </div>
        </div>
        <div className="btn-card-content">
          <Button text="Encontrar" />
        </div>
      </form>
    </div>
    <div className="card-base-result card-result-container">
      <div className="row">
        <div className="col-8 search-content">
          <h1 className="search-title">Encontre um perfil no Github</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Usuário Github"
          />
        </div>
      </div>
      <div className="btn-card-content">
        <Button text="Encontrar" />
      </div>
    </div>
  </>
);
