import { nanoid } from 'nanoid';
import './style.css';

// Primeiro: criar um botão para gerar a senha;
// Segundo: criar uma tag HTML que receberá a senha;
// Terceiro: utilizar o nanoid para gerar senhas aleatórias;
// Quarto: utilizar o botão para o evento de click;
// Quinto: mostrar as senhas na tela.
const buttonPassword = document.querySelector('button');
const displayPassword = document.querySelector('h2');

buttonPassword.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPassword.innerHTML = randomPassword;
});
