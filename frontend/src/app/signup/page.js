'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from '../page.module.css';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      localStorage.setItem('token', data.token);
      alert('Registration successful!');
      router.push('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const userIcon = <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>;
  const emailIcon = <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
  const passIcon = <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>;

  return (
    <div className={styles.card}>
      <h1 className={styles.title} style={{ marginBottom: '30px' }}>Sign Up</h1>
      
      {error && <p style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{error}</p>}
      
      <form onSubmit={handleRegister} className={styles.form}>
        <Input 
          type="text" 
          placeholder="Name" 
          icon={userIcon} 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          type="email" 
          placeholder="Email" 
          icon={emailIcon} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Password" 
          icon={passIcon} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Button variant="primary" type="submit" disabled={loading} style={{ marginTop: '10px' }}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </Button>
      </form>

      <p className={styles.footerText} style={{ marginTop: '30px' }}>
        Already have an account? <span className={styles.footerLink} onClick={() => router.push('/login')}>Log in</span>
      </p>
    </div>
  );
}
