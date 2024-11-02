"use client"
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../../components/tag/index"
import styles from "./styles.module.scss";
import { useHomePage } from "../useHomepage";
import { Loading } from "@/app/components/loading";
const ResultImage = () => {
    const{isSubmitting,error,image,promt}=useHomePage();
    if(error) return <p className={styles.error}>{error}</p>
    if(!isSubmitting && !image) return null; 
  return (
    <div className={styles.resultImage}>
      <div className={styles.animation}>
        {isSubmitting ? (
          <div className={styles.resultImage}>
            <div className={styles.animation}>
              <Loading />
            </div>
          </div>
        ) : (
          <>
            <div className={styles.content}>
              <p>{resultPrompt}</p>
              <Tag
                className={styles.download}
                title={
                  <Link href={image} target="_blank" download>
                    Download
                  </Link>
                }
              />
            </div>
            <Image src={image} alt={resultPrompt} width={512} height={512} />
          </>
        )}
      </div>
    </div>
  )
}

export default ResultImage