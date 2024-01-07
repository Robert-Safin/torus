import { getSession } from '@auth0/nextjs-auth0';
import ClientUser from '../components/ClientUser';
import Scene from '../components/Scene';
import Hero from '@/components/hero/Hero';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import WhyTorus from '@/components/why-torus/WhyTorus';


export default async function Home() {
  const user  = await getSession();



  return (
    <div>
      {/* <a href="/api/auth/login">Login</a>
      <br />
      <a href="/api/auth/logout">Logout</a> */}
      {/* <ClientUser /> */}
      {/* <Scene/> */}
      <Hero/>
      <div className='my-10'/>
      <HowItWorks/>
      <div className='my-10'/>
      <WhyTorus/>
    </div>
  )
}
