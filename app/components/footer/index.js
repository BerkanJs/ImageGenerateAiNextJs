import React from 'react'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
    <Link href="https://github.com/BerkanJs" target="_blank">
      <FaGithub />
    </Link>
    <Link href="https://github.com/BerkanJs" target="_blank">
      < FaTwitter />
    </Link>
    <p>
      Made by <b>Berkan Özçelik</b>
      <br />
      and, built with <b>Next.js</b>
    </p>
  </footer>
  )
}

export default Footer