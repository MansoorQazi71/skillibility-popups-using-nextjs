import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Free()
{
  return(
  <>
<button className={styles.fabutton}>
            <div className="d-flex">
              <div className={styles.sc} >
            <Image
            src="/freeanswers.png"
            height={50}
            width={50}
            />
            </div>
            <p className={styles.scp}>
            Free Answers
            </p>
            <div className={styles.info}>
            <Image
            src="/info.png"
            height={25}
            width={25}
            />
            </div>
            </div>
  </button>
  </>
        )
}