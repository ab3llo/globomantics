import styles from './conferernce.module.css';

export default function ConferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className={styles.header}>
        <h1>Globalmantics manically taking tech to the globe</h1>
      </header>
      {children}
    </>
  );
}
