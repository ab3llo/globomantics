import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h2>Speakers</h2>
      <h3>
        <Link href={'/conference/'}>Back to conference</Link>
      </h3>
    </section>
  );
}
