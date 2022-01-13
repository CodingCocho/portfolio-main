import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Raul Uriostegui is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="raul, raul uriostegui, uriostegui, web developer, raul web developer, raul developer, mern stack, raul portfolio"
      />
      <meta property="og:title" content="Raul Uriostegui's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/HKF1hg9.png" />
      <meta property="og:url" content="https://portfolio-main-mu.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Raul Uriostegui',
};
