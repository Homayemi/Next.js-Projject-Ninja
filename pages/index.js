import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque lorem nec nulla suscipit sagittis. Curabitur efficitur odio sit amet risus auctor, vel dictum odio lobortis. Maecenas urna ligula, ultrices at euismod et, consectetur vel sapien. Quisque porta massa laoreet tempor commodo. Quisque non consectetur est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eros nunc, consequat eget ligula vel, egestas pharetra massa.</p>
        <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
          </Link>
        </div>
    </>
  )
}
