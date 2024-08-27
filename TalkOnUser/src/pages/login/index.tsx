import { useState, FormEvent } from 'react'
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // dados mockados

  function onHandleLogin(e: FormEvent) {
    e.preventDefault();
    if(email == 'teste' && password == '123') {
      navigate("/chat", {replace: true})
    }  else alert("Dados incorretos")
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>TalkOn</h1>
        <h2 className={styles.subtitle}>Management</h2>

      <form onSubmit={onHandleLogin} className={styles.form}>
        <Input
        label='E-mail' 
        placeholder='usuario@gmail.com'
        value={email}
        onChange={ (e) => setEmail(e.target.value) }
        />
        <Input 
        label='Senha'
        placeholder='suasenha123'
        value={password}
        onChange={ (e) => setPassword(e.target.value) }
        />

        <button type='submit'>Login</button>
      </form>
      </div>
    </div>
  )
}
