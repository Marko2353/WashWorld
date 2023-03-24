'use client';
import styles from './page.module.css'
import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './Features/counter/counterSlice';
increment
useSelector


export default function Home() {
  return (
    <main className={styles.main}>
    
    </main>
  )
}
