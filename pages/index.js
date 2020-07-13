import Link from 'next/link';
import Head from 'next/head';


const Index = ()=>(
    <div>
        <Head>
            next js learn 
        </Head>
        <h1>Home Page</h1>
        <Link href='/blog'>
            <a>Blog</a>
        </Link>
        <style jsx>{`
		  h1 {
            font-size: 3rem;
            color:red;
		  }
		`}</style>
    </div>
)

export default Index