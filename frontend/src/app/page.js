'use client';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const googleIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#DB4437" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#4285F4" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#F4B400" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#0F9D58" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
  );

  const appleIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.4 4.5c.8-1 1.3-2.3 1.1-3.6-1.1.1-2.5.7-3.4 1.7-.7.8-1.3 2.1-1.1 3.4 1.3 0 2.5-.6 3.4-1.5zm-5.8 11.5c-1.6 0-3.3-1.1-4.1-1.1-1 0-2.4 1.1-3.6 1.1C.2 16 .1 12.9 1.4 11s3.1-2.9 4.8-2.9c1.6 0 2.9 1 3.8 1s2.5-1 4.3-1c1.3.1 3 1.4 3.7 2.6-4.5 1.7-2.6 7 1.8 7.6-1 2.3-2.7 4.7-4.9 4.7-1.4 0-2.2-1-3.7-1-1.4 0-2.3.9-3.7 1-.9.1-1.8-1-2.9-2z"/></svg>
  );

  const guestIcon = (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
  );

  return (
    <div className={styles.card}>
      <img src="https://api.dicebear.com/7.x/notionists/svg?seed=coaching" alt="Illustration" className={styles.illustration} />
      
      <h1 className={styles.title}>Private Coaching</h1>
      <p className={styles.subtitle}>Add one-on-one, confidential sessions for only $35 per session</p>
      
      <div className={styles.indicator}>
        <div className={`${styles.dot} ${styles.dotActive}`}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>

      <div style={{ width: '100%' }}>
        <Button variant="socialGoogle" icon={googleIcon} onClick={() => alert('Google Sign in Mock')}>Continue with Google</Button>
        <Button variant="socialApple" icon={appleIcon} onClick={() => alert('Apple Sign in Mock')}>Continue with Apple</Button>
        <Button variant="socialGuest" icon={guestIcon} onClick={() => router.push('/signup')}>Continue As Guest</Button>
      </div>

      <p className={styles.footerText}>
        Already have an account? <span className={styles.footerLink} onClick={() => router.push('/login')}>Log in</span>
      </p>
    </div>
  );
}
