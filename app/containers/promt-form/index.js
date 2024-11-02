"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useHomePage } from "../useHomepage";
const PromtForm = () => {
  const {prompt, setPrompt,generateImage} = useHomePage();
  const handlePromptChange=(event)=>{
    setPrompt(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    generateImage();
  };
  return (
    <div className={styles.PromtForm}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <textarea
          className={styles.promptTextarea}
          rows={2}
          type="text"
          placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
          required
          value={prompt}
          onChange={handlePromptChange}
          
        ></textarea>
        <button className={styles.generateButton} type="submit">
          Generate
        </button>
      </form>
    </div>
  );
};

export default PromtForm;
