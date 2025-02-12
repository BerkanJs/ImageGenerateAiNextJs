"use client";
import Image from "next/image";
import { EXAMPLES } from "./constants";
import styles from "./styles.module.scss";
import Tag from "../../components/tag";
import { useHomePage } from "../useHomepage";

const Examples = () => {
  const {changePromt}=useHomePage();

  return (
    <div className={styles.examples}>
      {EXAMPLES.map((example) => (
        <div className={styles.example} key={example.id}>
          <h4>{example.prompt}</h4>
          <Tag
            className={styles.copyButton}
            title="Copy"
            onClick={()=>changePromt(example.prompt)}
          />
          <Image src={example.image} alt={example.prompt} fill />
        </div>
      ))}
    </div>
  );
};

export default Examples;
