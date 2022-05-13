import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentHtml } from '../../redux/elements-reducer'
import '../../sass/page.sass'
import amd from '../../img/test.png'

const Elements = () => {

    const dispatch = useDispatch()
  
    const elements = useSelector(state => state.elementsList.elements)


    const queryElementCategory = (e, category) => {

        let nameOfElement;

        if (e.target.src) {
            nameOfElement = e.target.parentNode.parentNode.innerText;
        }else {
            nameOfElement = e.target.innerText;
        }

        const element = elements[category][`${nameOfElement}`];

        const pattern = Object.keys(element.images);

        let regExp;
        let result;


        pattern.forEach(item => {
            regExp = new RegExp(item, 'g');

            if (!result) result = element.html.replace(regExp, `<img src='${element.images[item]}'>`);
            else {
               result = result.replace(regExp, `<img src='${element.images[item]}' alt='img'>`);
            }
        })

        dispatch(setCurrentHtml(result));
    }


    const listOfElements = Object.keys(elements).map((category, index) => {

        return (
            <div key={index}>

                <ul className='elementsContainer__list'>

                    <span className="elementsContainer__heading">{category}</span>

                    <span className='elementsContainer__list__elements'>
                        <div className="elementsContainer__list__elements-bg">
                            {Object.keys(elements[category]).map((item, i) => {
                                return <li key={i} onClick={(e) => queryElementCategory(e, category)}>
                                    <span className='elementsContainer__list__elementName'>
                                        {item}
                                    </span>
                                    {
                                        elements[category][item]['headingImg'] ?
                                            <div className='elementsContainer__list__img'>
                                                <img src={elements[category][item]['headingImg']} alt='img' />
                                            </div>
                                            :
                                            null
                                    }
                                </li>
                            })}
                        </div>
                    </span>

                </ul>

            </div>
        )
    })


    return (
        <div>
            
            <div className='elementsContainer'>

                <span className='elementsContainer__title'><h3>Elements</h3> <img src={amd} alt="img" /></span>

                {listOfElements}

            </div>
        </div>
    )
}

export default Elements;
