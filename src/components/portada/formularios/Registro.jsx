import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Authentication/Auth';
import style from './Formularios.module.css';

export const Registro = () => {
  const { crearUsuario } = useAuth();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemsForm = e.target.elements;
    const regexEmail =
      /^[a-zA-Z][a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+$/;
    const regexRol = /(ESTUDIANTE|LIDER|ADMINISTRADOR)/;

    if (!/\d/.test(itemsForm.identification.value)) {
      alert('Identificación: Por favor solo ingresa el numero');
      return;
    }

    if (!regexEmail.test(itemsForm.email.value)) {
      alert('Correo no valido');
      return;
    }

    if (
      itemsForm.password.value !== itemsForm.rpassword.value ||
      itemsForm.password.value === ''
    ) {
      alert('Contraseñas no coinciden');
      return;
    }

    if (!regexRol.test(itemsForm.rol.value)) {
      console.log('no valido', itemsForm.rol.value);
      alert('Rol no coincide');
      return;
    }

    crearUsuario({
      variables: {
        identificacion: itemsForm.identification.value,
        nombre: itemsForm.name.value,
        apellido: itemsForm.surname.value,
        email: itemsForm.email.value,
        password: itemsForm.password.value,
        rol: itemsForm.rol.value,
      },
    });

    console.log('navegando...');
    navigate('/');
  };
  return (
    <div className={style.formBody}>
      <form className={style.formControl} onSubmit={(e) => handleSubmit(e)}>
        <i className='fas fa-user-plus'></i>
        <div className={style.itemsForm}>
          <label>Identificación</label>
          <input type='text' name='identification' placeholder='Ej: 123456' />
        </div>

        <div className={style.itemsForm}>
          <label>Nombre</label>
          <input type='text' name='name' placeholder="Por favor ingresa tus nombres" />
        </div>

        <div className={style.itemsForm}>
          <label>Apellido</label>
          <input type='text' name='surname' placeholder="Por favor ingresa tus apellidos" />
        </div>

        <div className={style.itemsForm}>
          <label>Correo</label>
          <input type='email' name='email' placeholder="Por favor ingresa tu correo" />
        </div>

        <div className={style.itemsForm}>
          <label>Contraseña</label>
          <input type='password' name='password' placeholder="Por favor ingresa una contraseña" />
        </div>

        <div className={style.itemsForm}>
          <label>Repetir Contraseña</label>
          <input type='password' name='rpassword' placeholder="Ingresa nuevamente la contraseña" />
        </div>

        <div className={style.itemsForm}>
          <label>Rol</label>
          <select name='rol'>
            <option value=''>...</option>
            <option value='ESTUDIANTE'>Estudiante</option>
            <option value='LIDER'>Lider</option>
            <option value='ADMINISTRADOR'>Administrador</option>
          </select>
        </div>

        <div className={style.itemsForm}>
          <button className={style.btnSumit}>Hacer Registro</button>
        </div>
      </form>
    </div>
  );
};
