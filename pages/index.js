import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-stripe React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home sweet home
    </div>
  );
}
