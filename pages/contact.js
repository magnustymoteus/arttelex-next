import Head from 'next/head'
import React from 'react'

import Header from '../components/Header';
import Contact from '../components/main/Contact';
import Footer from '../components/Footer';

const Contact_Index = () => {
  return (
    <React.Fragment>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <title>Art Telex - Contact Us</title>
        <meta name="description" content="A Space of Visual Art" />
        <link rel="icon" href="favicon.ico?v=2" />
      </Head>
    <Header page="contact"/>
    <main>
    <Contact/>
    </main>
    <Footer/>
    </React.Fragment>
  )
}
export default Contact_Index;