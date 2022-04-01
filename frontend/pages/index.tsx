import type { InferGetServerSidePropsType } from "next";
import { IResponse } from "../interfaces";
import Head from "../components/Head";
import FaqItem from "../components/FaqItem";
import styles from "../styles/Faq.module.css";

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:1337/api/faqs");
  const { data: faqs }: IResponse = await response.json();

  return {
    props: {
      faqs,
    },
  };
};

const FaqPage = ({
  faqs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head />
      <div className={styles.background}></div>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <div className={styles.faqs}>
            {faqs.map((faq) => (
              <FaqItem faq={faq} key={faq.id} />
            ))}
          </div>
          <p className={styles.paragraph}>
            If you have any further questions, please contact us at{" "}
            <a href="mailto:info@standfortrees.org">info@standfortrees.org</a>.
          </p>
        </main>
      </div>
    </div>
  );
};

export default FaqPage;
