import React from 'react';
import './styles.scss';

type Props = {
  text: string;
};

export const Button = ({ text }: Props) => (
  <div className="d-flex">
    <button className="btn-primary btn-icon">
      <h5>{text}</h5>
    </button>
  </div>
);
