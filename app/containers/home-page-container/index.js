import styles from "./styles.module.scss"
import PromtForm from "../promt-form/index"
import PromtSuggestions from "../promt-suggestions/index"
import Examples from "../examples"
import React from 'react'
import ResultImage from "../result-image"


const HomePageContainer = () => {
  return (
    <div className={styles.HomePageContainer}>
        <h1 className={styles.title}>You just imagine, <br/> we handle the rest</h1>
        <p className={styles.description}>Tell us a prompt we &apos;ll generate a story for you</p>
        <PromtForm/>
        <ResultImage/>
        <PromtSuggestions/>
        <Examples/>





    </div>
  )
}

export default HomePageContainer