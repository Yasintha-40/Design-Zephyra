'use client';
import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', icon, onClick, type = 'button', disabled = false, style }) {
  const className = `${styles.btn} ${styles[variant] || styles.primary}`;

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled} style={style}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
