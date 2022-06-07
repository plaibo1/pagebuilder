import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSaveSites } from "../../redux/user-reducer";

import cube from '../../img/rubickBig.png'
import { Link } from "react-router-dom";

import { GoPlus } from 'react-icons/go'
import { BsTrash } from 'react-icons/bs'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { GoLinkExternal } from 'react-icons/go'
import { BsClock } from 'react-icons/bs'

import { setSaveItemId, updateCurrentHtml } from "../../redux/elements-reducer";
import { deleteSite } from "../../http/userAPI";

const MySites = () => {

    const dispatch = useDispatch()
    const mySites = useSelector(state => state.userData.mySites)


    useEffect(() => {
        dispatch(getSaveSites())
    }, []);



    const setSaveToCurHTML = (index) => {
        dispatch(updateCurrentHtml(mySites[index].siteInfo))
        dispatch(setSaveItemId(mySites[index].id))
    }

    const onDeleteSite = (index) => {
        const siteId = mySites[index].id;
        console.log(siteId)

       deleteSite(siteId)
        .then(data => {
            console.log(data)
            dispatch(getSaveSites())
        });
    }

    const onCreateNew = () => {
        dispatch(updateCurrentHtml([]))
        dispatch(setSaveItemId(0))
    }
    
    const mySitesArr = mySites.map((item, index) => {
        return (
            <Col key={item.id} sm={6} md={4} lg={3} xl={2}>
                <div className='mySites__card'>

                    <button onClick={() => onDeleteSite(index)} className="mySites__card__del">{<BsTrash />}</button>

                    <div className="mySites__card__img" >
                        <img src={cube} alt="img" />
                    </div>

                    <Link to={'/app'} onClick={() => setSaveToCurHTML(index)} className="mySites__card__name">
                       {<GoLinkExternal />} Редактировать
                    </Link>

                    <div className="mySites__card__createdAt">{<AiTwotoneCalendar />}{item.createdAt.split('T')[0]}</div>
                    <div className="mySites__card__createdAt">{<BsClock />}{item.createdAt.split('T')[1].split('.')[0]}</div>
                </div>
            </Col>
        )
    })

    return (

        <>

            <div style={{ marginTop: 100 }}>

                <Container>
                    <Row>
                        {mySitesArr}

                        <Col sm={6} md={3} lg={2}>
                            <Link to={'/app'} onClick={onCreateNew} className='mySites__new' >{<GoPlus />} создать новый</Link>
                        </Col>
                    </Row>
                </Container>

                
            </div>
        </>
    )
}

export default MySites