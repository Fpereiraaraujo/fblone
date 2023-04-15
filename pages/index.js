
import Head from 'next/head'
import Header from '@/components/Header'
import { getSession } from 'next-auth/react';
import Login from '@/components/Login';
import Feed from '@/components/Feed';



export default function Home({session}) {
  if(!session) return <Login />;
  return (
    <div>
    <main>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <Feed/>

    </main>
    </div>
  )
}

export async function getServerSideProps(context){

  const session = await getSession(context);

  return{
    props:{
      session
    }
  }
}