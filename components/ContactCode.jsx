import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="#" target="_blank" rel="noopener">
          
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:raulujr@gmail.com"
          target="_blank"
          rel="noopener"
        >
          raulujr@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/CodingCocho" target="_blank" rel="noopener">
          CodingCocho
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/raulu-cse/"
          target="_blank"
          rel="noopener"
        >
          raulu-cse
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://twitter.com/CodingCocho"
          target="_blank"
          rel="noopener"
        >
          CodingCocho
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{' '}
        <a
          href="https://www.instagram.com/coding_cocho/"
          target="_blank"
          rel="noopener"
        >
          Coding_Cocho
        </a>
        ;
      </p>
            <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
