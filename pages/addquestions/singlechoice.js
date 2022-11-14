import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function SingleChoice()
{
  return(
  <>
<button className={styles.scbutton}>
            <div className="d-flex">
              <div className={styles.sc}>
            <Image
            src="/single.png"
            height={50}
            width={50}
            />
            </div>
            <p className={styles.scp}>
            Single choice
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