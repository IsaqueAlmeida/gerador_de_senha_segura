import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

// Primeiro: criar um botão para gerar a senha;
// Segundo: criar uma tag HTML que receberá a senha;
// Terceiro: utilizar o nanoid para gerar senhas aleatórias;
// Quarto: utilizar o botão para o evento de click;
// Quinto: mostrar as senhas na tela.
// Sexto: implementar o 'copiar senha';

// const copyButtonPassword = document.querySelector('button');
const buttonPassword = document.querySelector('button');
const tagH2Password = document.querySelector('h2');

buttonPassword.addEventListener('click', () => {
  const randomPassword = nanoid();
  tagH2Password.innerHTML = randomPassword;
  // copy(randomPassword);
  // alert('Senha copiada!');
});

/* Implementado o cliboard-copy para copiar a senha ao clicar na mesma */
tagH2Password.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  // eslint-disable-next-line no-alert
  alert('Senha copiada!');
});

/* SERÁ IMPLEMENTADO UM OUTRO BOTÃO DE COPIAR SENHA DEPOIS */
// copyButtonPassword.addEventListener('click', (event) => {
//   const passwordRandom = nanoid();
//   displayPassword.innerHTML = passwordRandom;
//   copy(event.target.innerHTML);
//   alert('Senha copiada!');
// });
