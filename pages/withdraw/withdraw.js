import React from 'react'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import TextField from '@mui/material/TextField';
import styles from '../withdraw/withdraw.module.css'
import Box from '@mui/material/Box';
export default function Wallpaper()
{
  return(
    <>

    <Box className={styles.view}>
        <div className={styles.crossbutton}>
          <Image
          src="/Frame 1042.png"
          height={24}
          width={24}
          />
          </div>
         
        <p className={styles.accountinfo}>Account information</p>
        
    <Box className={styles.box2}>
      <div className='d-flex'>
    <p className={styles.bank}>
            BANK NAME
        </p>
        <p className={styles.bankname}>
            HBL
        </p>
        </div>
        <div className='d-flex'>
        <p className={styles.accountholder}>
              Account Holder Name
        </p>
        <p className={styles.holdername}>
              Lorimpsm 
        </p>
        </div>
        <div className='d-flex'>
        <p className={styles.accountnoo}>
              Account No
        </p>
        <p className={styles.accountno}>
              12349876554
        </p>
        </div>
        <div className='d-flex'>
        <p className={styles.status}>
             Status
        </p>
        <p className={styles.verified}>
            Verfied
        </p>
        </div>
    </Box>
    <button className={styles.changemethod}>
      change method
    </button>
    <p className={styles.dollars}>$150</p>
    <Box className={styles.box3}>
      <p className={styles.usd}>USD</p>
        <input type="text" placeholder='Enter amount' style={{border: 'none'}} className={styles.enteramount}/>
        <div>
          <Image
          
          />
        </div>
      <button className={styles.send} style={{border: 'none'}}>Send</button>
    </Box>
    <Box className={styles.box4}>
      <div className={styles.infoo}>
        <Image
        src="/infoo.png"
        width={20}
        height={20}
        />
      </div>
      <p className={styles.limit}>You can send more than 5$.Maximum limit for sending amount is 50$</p>
    </Box>

    </Box>
    </>


  )
}