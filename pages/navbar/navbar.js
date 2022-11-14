import React from 'react'
import Image from "next/image"
import styles from '../navbar/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

                export default function Profile() {
                return (
                   <>
                   <nav className='d-flex justify-content-between w-100 align-items-center' >
                     <div>
                        <div className={styles.sklogo}>
                     <Image
                     src="/skillibility_logo.png"
                     width={190}
                     height={55}
                     
                     />
                     </div>
                     </div>
                  <div className='d-flex'>
                     <div className={styles.margin}>
                        <div>
                           <div className={styles.notifyicon}>
                  <Image 
                        src="/notificationicon.png"
                        width={30}
                        height={30}

                     />
                     </div>
                 </div>
                 <div>
                  <div className={styles.settings}>
                   <Image 
                        src="/OIP.png"
                        width={30}
                        height={30}
                     />
                     </div>
                  </div>
                     <div className={styles.profile} >
                     <div style={{borderRadius: '11px', overflow: 'hidden'}}>
                     <Image 
                        src="/profile.png"
                        width={43.5}
                        height={43.5}
                     />
                     </div>
                      </div>
                       </div> 
                        <div>
                        <p className={styles.p1}>Welcome</p>
                        <p className={styles.p2}>Ahmad Al-zeqri</p>
                     </div>
                     </div>
                  </nav> </>
                )
                }