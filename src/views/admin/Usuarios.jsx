import React from 'react';
import TablaUsuarios from '../../components/Cards/TablaUsuarios';

const Usuarios = () => {
  return (
    <div className='flex flex-wrap mt4'>
      <div className='w-full mb-12 px-4'>
        <TablaUsuarios />
      </div>
    </div>
  );
};

export default Usuarios;
