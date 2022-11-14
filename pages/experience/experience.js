import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import styles from '../experience/experience.module.css'
import Box from '@mui/material/Box';
export default function Experience()
{
  return(
    <>
    <Box className={styles.experiencebox}>
      <div>    
        <div className='d-flex'>
        <p className={styles.experiencelevel}>Experience level</p>
        </div>
        <div className='d-flex'>
        <input type="radio" className={styles.radio1} />
        <p className={styles.year1}>1 Year</p>
        </div>
        <div className='d-flex'>
        <input type="radio" className={styles.radio2} />
        <p className={styles.year2}>2 Year</p>
        </div>
        <div className='d-flex'>
        <input type="radio" className={styles.radio2}/>
        <p className={styles.year2}>3 Year</p>
        </div>
        <div className='d-flex'>
        <input type="radio" className={styles.radio2} />
        <p className={styles.year2}>4 Year</p>
        </div>
        <div className='d-flex'>
        <input type="radio" className={styles.radio2} />
        <p className={styles.year2}>5 Year</p>
        </div>
        <div className='d-flex'>
          <input type="radio" className={styles.radio2}/>
          <p className={styles.year2}>More than 5 Year</p>
        </div>
      </div>
      <div>
      <div className={styles.java}>
        <Image
            src="/experience.png"
            width={217}
            height={217}
            />
      </div>
       <div className={styles.nextarrow}>
        <Image
        src="/nextarrow.png"
        width={50}
        height={50}
        />
      </div> 
      </div>
      {/* </div> */}
    </Box>
    </>
  )
}