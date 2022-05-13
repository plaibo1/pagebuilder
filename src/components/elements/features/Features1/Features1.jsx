import React from 'react'
import s from './features1.module.sass'


const Features1 = () => {
  return (
    <div className={s.features1}>
        <h2>Our Features 1</h2>
        <div className={s.features1__boxWrapper}>
            <div className={s.features1__box}>1</div>
            <div className={s.features1__box}>2</div>
            <div className={s.features1__box}>3</div>
        </div>
    </div>
  )
}

export default Features1