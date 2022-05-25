import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Typescript Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">My Portfolio</a>
        </h1>

        <p className={styles.description}>
          Checkout my{' '}
          <Link href="/">
            <code className={styles.code}>Blog</code>
          </Link>
        </p>

        <div className={styles.grid}>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{' Voxel '}
        </a>
      </footer>
    </div>
  )
}

export default Home
