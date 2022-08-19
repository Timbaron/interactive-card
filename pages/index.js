import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.left}>
        <Image
          src="/images/bg-main-desktop.png"
          width={500}
          height={1200}
          quality={100}
          alt="some image"
        />
      </div>
      <div className={styles.cardLogo}>
        <Image
          src="/images/card-logo.svg"
          width={110}
          height={60}
          quality={100}
          alt="some image"
        />
      </div>
      <div className={styles.cardFront}>
        <Image
          src="/images/bg-card-front.png"
          width={500}
          height={250}
          quality={100}
          alt="some image"
        />
      </div>
      <div className={styles.cardBack}>
        <Image
          src="/images/bg-card-back.png"
          width={500}
          height={250}
          quality={100}
          alt="some image"
        />
      </div>
      <div className={styles.cardNumber}>
        <h2>9534 3234 5342 2453</h2>
      </div>
      <div className={styles.cardName}>
        <h4>Akiode Timothy</h4>
      </div>
      <div className={styles.cardExpire}>
        <h4>10/23</h4>
      </div>
    </div>
  )
}
