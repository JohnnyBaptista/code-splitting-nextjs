import { NextPage } from 'next';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar';


const NormalComponent: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <div>
      <Button onClick={() => setIsOpen(true)} text='Abrir SideNelson'/>
      <Sidebar isOpen={isOpen} />
    </div>
  );
}

export default NormalComponent;