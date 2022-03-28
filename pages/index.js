import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'rsuite/dist/rsuite.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link"
import LoginPage from './page/LoginPage'
import MainPage from './page/MainPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebPreScreening</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* <main className={styles.main}> */}
      <main>
        {/* <h1 className={styles.title}>
          <Link href="/user/Users">Welcome to</Link>
          <Link href="/page/LoginPage">LoginPage</Link>
        </h1> */}
        <LoginPage />
        {/* <MainPage /> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
