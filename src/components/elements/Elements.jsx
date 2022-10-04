import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getElements, setCurrentHtml } from '../../redux/elements-reducer'
import '../../sass/page.sass'
import amd from '../../img/test.png'

const Elements = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getElements())
    }, [])
  
    const elements = useSelector(state => state.elementsList.elements)

    const queryElementCategory = (e, category, index) => {

        const element = elements[category][index]

        const pattern = Object.keys(element['info']['images']);

        let regExp;
        let result;

        pattern.forEach(item => {
            regExp = new RegExp(item, 'g');

            if (!result) result = 
                element.info.html
                .replace(regExp, `<img src='${process.env.REACT_APP_API_URL + element.info.images[item]
                    .split('/')[2]}' alt='img'>`);
            else {
               result = 
                result.replace(regExp, `<img src='${process.env.REACT_APP_API_URL + element.info.images[item]
                    .split('/')[2]}' alt='img'>`);
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

                                return <li key={i} onClick={(e) => queryElementCategory(e, category, i)}>
                                    <span className='elementsContainer__list__elementName'>
                                        {elements[category][item].name}
                                    </span>
                                    {
                                        elements[category][item]['info']['headingImg'] ?
                                            <div className='elementsContainer__list__img'>
                                                <img src={elements[category][item]['info']['headingImg']} alt='img' />
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
