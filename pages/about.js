import Head from "next/head";
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <>
      <Head>
        <title>Ninja List | About </title>
        <meta name="keywords" content="ninjas" />
      </Head> 
      <div>
          <h1 className={styles.title}>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque lorem nec nulla suscipit sagittis. Curabitur efficitur odio sit amet risus auctor, vel dictum odio lobortis. Maecenas urna ligula, ultrices at euismod et, consectetur vel sapien. Quisque porta massa laoreet tempor commodo. Quisque non consectetur est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eros nunc, consequat eget ligula vel, egestas pharetra massa.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque lorem nec nulla suscipit sagittis. Curabitur efficitur odio sit amet risus auctor, vel dictum odio lobortis. Maecenas urna ligula, ultrices at euismod et, consectetur vel sapien. Quisque porta massa laoreet tempor commodo. Quisque non consectetur est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eros nunc, consequat eget ligula vel, egestas pharetra massa.</p>
      </div>  
      </>
     );
}
 
export default About;