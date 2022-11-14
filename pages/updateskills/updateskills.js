import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import styles from '../updateskills/updateskills.module.css'
import Box from '@mui/material/Box';
export default function UpdateProfile()
{
  return(
    <>
    <Box className={styles.model3}>
      <div className={styles.frame1042}>
          <Image
          src="/Frame 1042.png"
          height={24}
          width={24}
          />
      </div>  
      <p className={styles.model3p1}>Sure you want to update skills?</p>
      <p className={styles.model3p2}>Are you sure you want to accept this?</p> 
      <div className='d-flex'>
      <button className={styles.model3btn1}>
      No, cancel
      </button>
      <button className={styles.model3btn2}>
      Yes, Confirm
      </button>
      </div>
    </Box>
    </>
  )
}