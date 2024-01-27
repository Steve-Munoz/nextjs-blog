import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, My name is Steve Munoz and I am an aspiring software engineer and enthustiac learner of all things. You can contact me through LinkedIn</p>
        <p>
          I am passionate about learning and writing. Please see a few of my blogs.
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}