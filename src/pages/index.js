import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import SecondNav from "@/components/second-nav";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ableton - About us</title>
      </Head>
      <SecondNav />
      <main className={styles.container}>
        <section>
          <div className={styles.heroImg}>
            <Image src="hero-logo.svg" width={430} height={104} />
          </div>
          <div className={styles.sectionText}>
            <h1>
              We make{" "}
              <a href="#" className={styles.blueLink}>
                Live
              </a>
              ,{" "}
              <a href="#" className={styles.blueLink}>
                Push
              </a>{" "}
              and{" "}
              <a href="#" className={styles.blueLink}>
                Link
              </a>{" "}
              — unique software and hardware for music creation and performance.
              With these products, our community of users creates amazing
              things.
            </h1>
            <p>
              Ableton was founded in 1999 and released the first version of Live
              in 2001. Our products are used by a community of dedicated
              musicians, sound designers, and artists from across the world.
            </p>
          </div>
        </section>
        <section>
          <div className={styles.firstCollage}>
            <div className={styles.imgLeft}></div>
            <div className={styles.imgRight}></div>
            <div className={styles.yellowBg}></div>
          </div>
          <div className={styles.sectionText}>
            <h2>
              Making music isn’t easy. It takes time, effort, and learning. But
              when you’re in the flow, it’s incredibly rewarding.
            </h2>
            <p>
              We feel the same way about making Ableton products. The driving
              force behind Ableton is our passion for what we make, and the
              people we make it for.
            </p>
          </div>
        </section>
        <section className={styles.sectionText}>
          <a href="#">
            <div className={styles.thumbnail}>
              <Image src={"play.svg"} width={100} height={100} />
            </div>
          </a>
          <p className={styles.thumbnailCaption}>
            Why Ableton - Juanpe Bolivar
          </p>
        </section>
        <section className={styles.sectionText}>
          <h2>
            We are more than 350 people from 30 different countries divided
            between our headquarters in Berlin and our offices in Los Angeles
            and Tokyo.
          </h2>
          <p>
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day. We come from a wide range of cultural
            and professional backgrounds. Some of us have PhDs, some are
            self-taught, and most of us are somewhere in between. What connects
            us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music
            culture.
          </p>
        </section>
        <section>
          <div className={styles.secondCollage}>
            <div className={styles.imgLeftGroup}>
              <div className={styles.imgLeftFirst}></div>
              <div className={styles.imgLeftSecond}></div>
            </div>
            <div className={styles.imgRight}></div>
            <div className={styles.greenBg}></div>
          </div>
          <div className={styles.sectionText}>
            <h2>
              We believe it takes focus to create truly outstanding instruments.
              We only work on a few products and we strive to make them great.
            </h2>
            <p>
              Rather than having a one-size-fits-all process, we try to give our
              people what they need to work their magic and grow. We’ve learned
              that achieving the best results comes from building teams that are
              richly diverse, and thus able to explore problems from a wider set
              of perspectives. We don’t always agree with each other, but
              opinion and debate are valued and openly encouraged.
            </p>
          </div>
        </section>
        <section className={styles.posterSection}>
          <div className={styles.posterCenter}></div>
          <div className={styles.sectionText}>
            <h2>
              We’re passionate about what we do, but we’re equally passionate
              about improving who we are.
            </h2>
            <p>
              We work hard to foster an environment where people can grow both
              personally and professionally, and we strive to create a wealth of
              opportunities to learn from and with each other.
            </p>
            <p>
              Alongside an internal training program, employees are actively
              supported in acquiring new knowledge and skills, and coached on
              applying these in their daily work. In addition, staff-organized
              development and music salons are a chance to discuss new
              technologies, production techniques and best practices.
            </p>
          </div>
        </section>
        <section>
          <div className={styles.thirdCollage}>
            <div className={styles.imgLeft}></div>
            <div className={styles.imgRight}></div>
            <div className={styles.lilacBg}></div>
          </div>
          <div className={styles.sectionText}>
            <h2>
              We believe it takes focus to create truly outstanding instruments.
              We only work on a few products and we strive to make them great.
            </h2>
            <p>
              Rather than having a one-size-fits-all process, we try to give our
              people what they need to work their magic and grow. We’ve learned
              that achieving the best results comes from building teams that are
              richly diverse, and thus able to explore problems from a wider set
              of perspectives. We don’t always agree with each other, but
              opinion and debate are valued and openly encouraged.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
