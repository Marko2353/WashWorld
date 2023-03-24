'use client';
import styles from './page.module.css'
import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './Features/counter/counterSlice';



export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispath = useDispatch();

  return (
    <main className={styles.main}>
      <button className={styles.button} onClick={()=>dispath(increment())}>increment</button>

      <button className={styles.button} onClick={()=>dispath(decrement())}>decrement</button>
    
    </main>
  )
}
