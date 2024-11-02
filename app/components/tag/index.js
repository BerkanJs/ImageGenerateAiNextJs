"use client"

import React from 'react'
import styles from './styles.module.scss'
const Tag = ({title ,onClick}) => {
    const handleClick=()=>{
        if(onClick){
            onClick(title)
        }
    }
  return (
    <button onClick={handleClick} className={styles.tag}>
        {title}
    </button>
  )
}

export default Tag