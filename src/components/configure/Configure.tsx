import React from 'react';
import Menu from '../aside/menu/Menu';
import Support from '../aside/support/Support';
import Button from '../aside/button/Button';
import Title from '../main/title/Title';
import Filter from '../main/filter/Filter';

const Configure: React.FC = () => {
  return (
    <div className="configure">
      <div>
        <Menu />
        <Support />
        <Button />
      </div>
      <div>
        <Title />
        <Filter />
      </div>
    </div>
  );
};

export default Configure;
