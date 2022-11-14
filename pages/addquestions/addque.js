import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TextField from '@mui/material/TextField';
import styles from '../../styles/Home.module.css'
import Quecards from './singlechoice';
import SingleChoice from './singlechoice';
import MultipleChoice from './multiplechoice';
import Free from './free';
import Video from './video';
import Coding from './coding';
export default function Addque()
{
  return(
    <>
      <div className='d-flex'>
      <div>
       <button className={styles.add}>
        + Add new question
        </button>
        </div>
        <div className={styles.or}>
          <p>OR</p>
          </div>
          <div >
          <button className={styles.review}>
          review others questions
        </button>
        </div>
        </div>
        <div className={styles.type}>
          <p>Select the type of the question</p>
        </div>
        <div>
        <SingleChoice/>
        <MultipleChoice/>
        <Coding/>
        <Free/>
        <Video/>
        </div>
        <footer className='w-100'>
          <button className={styles.back}>
            Back
          </button>
        </footer>

    </>
  )
}