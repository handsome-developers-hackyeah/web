import styled from 'styled-components';
import { useEffect, useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (username.trim().length <= 0) {
      setErrorMessage('Nazwa uzytkownika nie moze być pusta!');
    } else if (password.trim().length <= 0) {
      setErrorMessage('Hasło nie moze być puste!');
    } else {
      setErrorMessage('');
      fetchHandler();
    }
  };

  const fetchHandler = async () => {
    const req = await fetch(
      `http://10.250.161.137:5011/auth/Login?login=${username}&password=${password}`
    );

    const res = await req.json();

    if (res.StatusCode === 404) {
      setErrorMessage('Podano złą nazwą nazwe uzytkownika lub hasło');
    } else if (res.StatusCode === 500) {
      setErrorMessage('Błąd serwera');
    } else if (res.StatusCode === 200) {
      setErrorMessage('');
    } else {
      setErrorMessage('Nieznany błąd');
    }
  };

  return (
    <LoginPagesStyled>
      <form>
        <h1>Witamy ponownie</h1>
        <input placeholder='login' onInput={usernameHandler} />
        <input placeholder='hasło' onInput={passwordHandler} />
        <button onClick={(e) => submitHandler(e)}>Dalej</button>
        <p>{errorMessage}</p>
      </form>
    </LoginPagesStyled>
  );
};

export default LoginPage;

const LoginPagesStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    margin: auto;

    h1 {
      font-size: 3rem;
    }

    input {
      margin-block: 10px;
      border: none;
      border-radius: 500px;
      padding: 10px 10px;
      margin-inline: auto;
      width: 75%;
      background: ${(props) => props.theme.grayLight};
      color: ${(props) => props.theme.gray};
    }

    button {
      background: ${(props) => props.theme.primaryColor};
      border: 0;
      padding: 10px 10px;
      border-radius: 500px;
      color: white;
      margin-top: 20px;
      margin-inline: auto;
      width: 75%;
    }
  }
`;
