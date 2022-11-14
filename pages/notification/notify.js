import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import styles from '../notification/notification.module.css'
import Box from '@mui/material/Box';
import { typographyClasses } from '@mui/material';
export default function Notification()
{
  return(
    <>
    <Box className={styles.container}>
      <div className={styles.image}>
        <Image
        src="/flag.png"
        width={42}
        height={42}
        /> <div className='d-flex flex-column justify-content-center'>
        <p className={styles.p1}>Flag</p>
        <p className={styles.p2}>Your question in Figma assessment has been flagged. Revise your question and improve your score. </p>
        </div>
        <h5 className={styles.time}>1m ago.</h5>
        </div>
              <div>
              <div className={styles.image}>
              <Image
              src="/flag.png"
              width={42}
              height={42}
              />
              <p className={styles.p1}>Flag</p>
              </div>
                    <div className='d-flex'>
              <p className={styles.p2}>Your question in Figma assessment has been flagged. Revise your question and improve your score. </p>
              <h5 className={styles.time}>1m ago.</h5>
                    </div>
              </div>
              <div>
                    <div className={styles.image}>
                    <Image
                    src="/review.png"
                    width={42}
                    height={42}
                    />
                    <p>Flag</p>
                    </div>
                          <div className='d-flex'>
                    <p>Your question in Figma assessment has been flagged. Revise your question and improve your score. </p>
                    <h5 className={styles.time}>1m ago.</h5>
                          </div>
                    </div>
                    <div>
                          <div className={styles.image}>
                            <Image
                            src="/review2.png"
                            width={42}
                            height={42}
                            />
                            <p>Flag</p>
                            </div>
                                  <div className='d-flex'>
                            <p>Your question in Figma assessment has been flagged. Revise your question and improve your score. </p>
                            <h5 className={styles.time}>1m ago.</h5>
                                  </div>
                            </div>
                                  <div>
                                  <div className={styles.image}>
                                    <Image
                                    src="/credit.png"
                                    width={42}
                                    height={42}
                                    />
                                    <p>Flag</p>
                                    </div>
                                          <div className='d-flex'>
                                    <p>Your question in Figma assessment has been flagged. Revise your question and improve your score. </p>
                                    <h5 className={styles.time}>1m ago.</h5>
                                          </div>
                                    </div>
                                          <div className={styles.image}>
                                            <Image
                                            src="/revied.png"
                                            width={42}
                                            height={42}
                                            />
                                            <p>Flag</p>
                                            </div>
                                                  <div className='d-flex'>
                                            <p>Your question in Figma assessment has been flagged. Revise your question and improve your score. </p>
                                            <h5 className={styles.time}>1m ago.</h5>
                                                  </div>
    </Box>
    </>
  )
}