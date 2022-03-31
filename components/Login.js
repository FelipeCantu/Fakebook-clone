import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

function Login() {
    const { data: session } = useSession()
    return (
        <div className='grid place-items-center'>
            <header>
                <title>Authenticationsior</title>
                <link rel='icon' href='/favicon.ico' />
            </header>
            <Image
                src='https://links.papareact.com/t4i'
                height={400}
                width={400}
                objectFit='contain'
            />

            <main>
                {!session && (
                    <>
                        Not signed in <br />
                        <button onClick={() => signIn()}>Sign In</button>
                    </>
                )}
                {
                    session && (
                        <>
                            Sign In as {session.user.email} <br />
                            <div>Super Dark Secrets are now available to you</div>
                            <button onClick={() =>signOut()}>Sign Out</button>
                        </>
                    )
                }
            </main>
        </div>
    )
}

export default Login