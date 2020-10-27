import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../../core/components/Button';
import './styles.scss';
import ImageLoader from './Loaders/ImageLoader';
import InfoLoader from './Loaders/InfoLoader';
import { CardInfo } from './components/CardInfo';
import dayjs from 'dayjs';

type User = {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  company: string;
  blog: string;
  location: string;
  created_at: Date;
  html_url: string;
};

export const Search = () => {
  const [userName, setUserName] = useState('');
  const [userDetails, setUserDetails] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios(` https://api.github.com/users/${userName}`)
      .then((response) => setUserDetails(response.data))
      .finally(() => [setIsLoading(false)]);
  };
  return (
    <>
      <div className="card-base card-search-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8 search-content">
              <h1 className="search-title">Encontre um perfil no Github</h1>
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={handleOnChange}
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
          <div className="col-2 search-content">
            {isLoading ? (
              <ImageLoader />
            ) : (
              <img src={userDetails?.avatar_url} alt="" className="image" />
            )}
            <div className="py-3">
              <a
                href={`${userDetails?.html_url}`}
                rel="noreferrer"
                target="_blank"
              >
                <Button text="Ver perfil" />
              </a>
            </div>
          </div>

          <div className="col-6 offset-1 py-4">
            {isLoading ? (
              <InfoLoader />
            ) : (
              <>
                <div className="d-flex">
                  <div className="card config-total-card text-center">
                    Repositórios públicos: {userDetails?.public_repos}
                  </div>
                  <div className="card config-total-card text-center">
                    Seguidores: {userDetails?.followers}
                  </div>
                  <div className="card config-total-card text-center">
                    Seguindo: {userDetails?.following}
                  </div>
                </div>
                <div className="card config-card">
                  <div className="card-body">
                    <h1 className="title">Informações</h1>
                    <CardInfo>
                      <b>Empresa:</b>&nbsp; {userDetails?.company}
                    </CardInfo>
                    <CardInfo>
                      <b>WebSite/Blog:</b>&nbsp;
                      {userDetails?.blog}
                    </CardInfo>
                    <CardInfo>
                      <b>Localidade:</b>&nbsp;
                      {userDetails?.location}
                    </CardInfo>
                    <CardInfo>
                      <b>Membro desde:</b>&nbsp;
                      {dayjs(userDetails?.created_at).format('DD/MM/YYYY')}
                    </CardInfo>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
