import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const CardInfo = ({ children }: Props) => (
  <>
    <div className="card config-info-card">{children}</div>
  </>
);
