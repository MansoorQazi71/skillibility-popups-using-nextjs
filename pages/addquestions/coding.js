import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Coding()
{
  return(
  <>
<button className={styles.cbutton}>
            <div className="d-flex">
              <div className={styles.vc} >
            <Image
            src="/coding.png"
            height={50}
            width={50}
            />
            </div>
            <p className={styles.vcp}>
            Coding
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