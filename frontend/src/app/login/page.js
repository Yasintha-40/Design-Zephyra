'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from '../page.module.css';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      alert('Login successful!');
      router.push('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const emailIcon = <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
  const passIcon = <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>;

  const googleIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#DB4437" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#4285F4" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#F4B400" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#0F9D58" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
  );

  const appleIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4 4.5c.8-1 1.3-2.3 1.1-3.6-1.1.1-2.5.7-3.4 1.7-.7.8-1.3 2.1-1.1 3.4 1.3 0 2.5-.6 3.4-1.5zm-5.8 11.5c-1.6 0-3.3-1.1-4.1-1.1-1 0-2.4 1.1-3.6 1.1C.2 16 .1 12.9 1.4 11s3.1-2.9 4.8-2.9c1.6 0 2.9 1 3.8 1s2.5-1 4.3-1c1.3.1 3 1.4 3.7 2.6-4.5 1.7-2.6 7 1.8 7.6-1 2.3-2.7 4.7-4.9 4.7-1.4 0-2.2-1-3.7-1-1.4 0-2.3.9-3.7 1-.9.1-1.8-1-2.9-2z"/></svg>
  );

  return (
    <div className={styles.card}>
      <h1 className={styles.title} style={{ marginBottom: '30px' }}>Login</h1>
      
      {error && <p style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{error}</p>}
      
      <form onSubmit={handleLogin} className={styles.form}>
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
        
        <span className={styles.forgotPassword}>Forgot Password?</span>
        
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>

      <div className={styles.divider}>
        <span className={styles.dividerText}>or</span>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="socialGoogle" icon={googleIcon} onClick={() => alert('Google Sign in Mock')}>Continue with Google</Button>
        <Button variant="socialApple" icon={appleIcon} onClick={() => alert('Apple Sign in Mock')}>Continue with Apple</Button>
      </div>

      <p className={styles.footerText}>
        Need an account? <span className={styles.footerLink} onClick={() => router.push('/signup')}>Sign up</span>
      </p>
    </div>
  );
}
