import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h3>
        <Link href={'/conference/sessions'}>Sessions</Link>
      </h3>
      <h3>
        <Link href={'/conference/speakers'}>Speakers</Link>
      </h3>
    </section>
  );
}
