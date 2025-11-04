import Image from 'next/image';
import HomeImage1 from '../../images/home-image-1.jpg';
import styles from './home.module.css';
export default function Page() {
  return (
    <section>
      <div className={styles.bgWrap}>
        <Image
          src={HomeImage1}
          alt="Home Image 1"
          quality={100}
          placeholder="blur"
          sizes={'100vw'}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
      <p className={styles.bgText}>
        How we became the farmers of the future, tilling the technology of
        tomorrow today.
      </p>
    </section>
  );
}
