import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Video()
{
  return(
  <>
<button className={styles.videoque}>
            <div className="d-flex">
              <div className={styles.vc} >
            <Image
            src="/video.png"
            height={50}
            width={50}
            />
            </div>
            <p className={styles.vcp}>
           Video 
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