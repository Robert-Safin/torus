import { getSession } from '@auth0/nextjs-auth0';
import Image from 'next/image'
import ClientUser from './components/ClientUser';

export default async function Home() {
  const user  = await getSession();



  return (
    <>
      <a href="/api/auth/login">Login</a>
      <br />
      <a href="/api/auth/logout">Logout</a>
      <br />
      <br />
      <br />
      <p>server user obj : {JSON.stringify(user)}</p>
      <br />
      <br />
      <br />
      <ClientUser />
    </>
  )
}
