import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import styles from '../filter/filter.module.css'
import Box from '@mui/material/Box';
export default function Filter()
{
  return(
    <>
    <Box className={styles.container}>
          <Box className={styles.menuwidget}>
              <Box className={styles.box1}>
                <div className={styles.searchicon}>
          <Image
            src="/search.png"
            width={20}
            height={20}
            />
                </div>
                <div>
            <input type="text" placeholder='Search' style={{border: 'none'}} className={styles.searchbox}/>
                </div>
               </Box>
          </Box>
                <div className='d-flex align-items-center'>
                    <div className={styles.group}>
                  <Image
                  src="/icn.png"
                  width={24}
                  height={24}
                  />
                    </div>
                          <div className={styles.icon}>
                        <Image
                        src="/Group.png"
                        width={21}
                        height={17}
                        />
                        </div>
                      </div>
<div className='d-flex'>
<Box className={styles.questiontype}>
        <h4 className={styles.questiontype1}>Question Type</h4>
        <div className='d-flex'>
        <input type="radio" className={styles.radio} />
        <p className={styles.choices}>Single Choice</p>
        <p className={styles.p2}>02</p>
            </div>
            <div className='d-flex'>
            <input type="radio" className={styles.radio} />
            <p className={styles.choices}>Multiple Choice</p>
            <p className={styles.p2}>02</p>
            </div>
                <div className='d-flex'>
                <input type="radio" className={styles.radio} />
                <p className={styles.choices}>Free questions</p>
                <p className={styles.p2}>02</p>
                </div>
                    <div className='d-flex'>
                    <input type="radio" className={styles.radio} />
                    <p className={styles.choices}>File Upload</p>
                    <p className={styles.p2}>02</p>
                    </div>
                          <div className='d-flex'>
                          <input type="radio" className={styles.radio} />
                          <p className={styles.choices}>Video</p>
                          <p className={styles.p2}>02</p>
                          </div>
                                <div className='d-flex'>
                                <input type="radio" className={styles.radio} />
                                <p className={styles.choices}>Code</p>
                                <p className={styles.p2}>02</p>
                                </div>
</Box>
        <Box className={styles.assesment}>
                <h4 className={styles.assesment1}>Assesment</h4>
                <div className='d-flex'>
                <input type="checkbox" className={styles.checkbox} />
                <p className={styles.asses}>Graphic</p>
                <p className={styles.p1}>02</p>
                    </div>
                    <div className='d-flex'>
                    <input type="checkbox" className={styles.checkbox} />
                    <p className={styles.asses}>Frontend</p>
                    <p className={styles.p1}>02</p>
                    </div>
                        <div className='d-flex'>
                        <input type="checkbox" className={styles.checkbox} />
                        <p className={styles.asses}>Javascript</p>
                        <p className={styles.p1}>02</p>
                        </div>
                            <div className='d-flex'>
                            <input type="checkbox" className={styles.checkbox} />
                            <p className={styles.asses}>SQL</p>
                            <p className={styles.p1}>02</p>
                            </div>
                                  <div className='d-flex'>
                                  <input type="checkbox" className={styles.checkbox} />
                                  <p className={styles.asses}>React</p>
                                  <p className={styles.p1}>02</p>
                                  </div>
                                        <div className='d-flex'>
                                        <input type="checkbox" className={styles.checkbox} />
                                        <p className={styles.asses}>Database</p>
                                        <p className={styles.p1}>02</p>
                                        </div>
        </Box>
</div>
</Box>
    </>
  )
}