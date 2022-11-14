import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function MultipleChoice()
{
  return(
  <>
<button className={styles.mcbutton}>
            <div className="d-flex">
              <div className={styles.mc} >
            <Image
            src="/mc.png"
            height={50}
            width={50}
            />
            </div>
            <p className={styles.mcp}>
            Multiple choice
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