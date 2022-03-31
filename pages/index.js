import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import React from 'react'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  if (!session) return <Login />
  return (
    <div>
      <Head>
        <title>Alt Facebook</title>
      </Head>

     <Header />
     <main>
       {/* Sidbar */}
       {/* Feed */}
       {/* Widgets */}
     </main>
    </div>
  )
}
