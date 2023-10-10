import styles from './page.module.css'
import Button from "react-bootstrap/Button";
import connectMongo from '@/utils/connectMongo';
import Concert from '@/models/Concert';

export default function Home() {
  return (
    <main className={styles.main} >
      <div className={styles.description}>
        <p>
          AHHHHHHHHH!!!!!
        </p>
        <div className='Container'>
          <Button className="btn "variant="outline-danger" size="lg">HELP ME!</Button>
        </div>
        <div>
          <h2>HELLO</h2>
        </div>
      </div>

      <div className={styles.center}>
        <h1>Abracadabra!!! WOOOOOO!!</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            HELLO <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about ABRACADABRA features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            HOW <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            ARE <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            YOU? <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
