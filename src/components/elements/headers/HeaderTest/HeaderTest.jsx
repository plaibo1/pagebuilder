import React from 'react'
import s from './headerTest.module.sass'

const HeaderTest = () => {
  return (
    <div className={s.testHeader}>

        <h1>Hello iam Test Header</h1>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Est magnam amet quis aliquam tempora voluptate dicta ipsam? 
            Quibusdam, fuga provident asperiores laborum 
            modi dolore consequatur eveniet. Perferendis pariatur aperiam officia.
        </p>

        <button>Get Started</button>

    </div>
  )
}

export default HeaderTest