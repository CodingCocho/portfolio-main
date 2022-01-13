const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h4>My name is Raul Uriostegui Jr. I am a Front End Web Developer looking to help other companies build user friendly applications. I am always looking for opportunities to perfect my skills and I continue to work on my craft on a daily basis. I am also interested in blockchain and would like to transition from a frontend developer to a blockchain developer. </h4>
    
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
