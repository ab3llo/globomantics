import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to Globomantics</h1>
      <ul>
        <li>
          <Link href="settings">Settings</Link>
        </li>
        <li>
          <Link href="conference">Conference</Link>
        </li>
      </ul>
    </div>
  );
}
