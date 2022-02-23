import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();
  const enterPage = (page: string) => {
    router.push(page);
  }
  return (
    <div>
      <Head>
        <title>Code Splitting!</title>
      </Head>
      <h1 style={{textAlign: 'center'}}>Escolha o que deseja testar</h1>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <span 
          onClick={() => enterPage('/normal-component')} 
          style={{color: 'blue', textDecoration: 'underline', margin: 10, cursor: 'pointer'}}
        >
          Componente normal
        </span>
        <span  
          onClick={() => enterPage('/lazy-component')} 
          style={{color: 'blue', textDecoration: 'underline', margin: 10, cursor: 'pointer'}}
        >
          Componente preguiçoso
        </span>
      </div>
    </div>
  )
}

export default Home
