import { NextPage } from 'next';
import dynamic from 'next/dynamic'
import React, { useState } from 'react';
import Button from '../../components/Button';

const Sidebar = dynamic(() => import('../../components/Sidebar'), { loading: () => <p>loading</p> });

const LazyComponent: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}  text="Carregar pokemon" />
      {isOpen && <Sidebar isOpen={isOpen}/>}
    </div>
  );
}

export default LazyComponent;