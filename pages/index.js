import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession() 

  return (
    <div className={styles.container}>
      <Head>
        <title>Authenticationsior</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {
          session && (
            <>
              Sign In as {session.user.email} <br />
              <div>Super Dark Secrets are now available to you</div>
              <button onClick={signOut}>Sign Out</button>
            </>
          )
        }
      </main>
    </div>
  )
}
