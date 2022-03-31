import { MouseEventHandler, useState } from "react";
import { IFaq } from "../interfaces";
import styles from "../styles/Faq.module.css";

interface Props {
  faq: IFaq;
}

const openIcon = "bi bi-plus-circle";
const closeIcon = "bi bi-dash-circle";

const FaqItem = ({ faq }: Props) => {
  const [icon, setIcon] = useState<string>(openIcon);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const button: HTMLButtonElement = e.currentTarget;
    const content = e.currentTarget.nextElementSibling as HTMLDivElement;

    button.classList.toggle(styles.active);

    if (content.style.maxHeight) {
      content.style.maxHeight = "";
      setIcon(openIcon);
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      setIcon(closeIcon);
    }
  };

  return (
    <div className={styles.faq}>
      <button onClick={handleClick} className={styles.question}>
        {faq.attributes.question}
        <i className={icon}></i>
      </button>
      <div className={styles.content}>
        {faq.attributes.answer.split("\n").map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FaqItem;
