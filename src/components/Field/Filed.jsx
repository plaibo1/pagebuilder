import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEditingItem, updateCurrentHtml } from '../../redux/elements-reducer'
import Modal from '../Modal/Modal'
import s from '../Modal/modal.module.sass'

import { useForm } from "react-hook-form";
import { sendImg } from "../../http/userAPI";

import boyWithHat from '../../img/prebuildField.png'

import { BiArrowToTop } from "react-icons/bi";
import { BiArrowToBottom } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { GiSave } from "react-icons/gi";
import { ImBin } from "react-icons/im";


const Filed = () => {

  const [modalActive, setModalActive] = useState(false);
  const [chooseImgModalActive, setChooseImgModalActive] = useState(false);

  const [stringImgName, setStringImgName] = useState('');

  const [currentEditingElementIndex, setCurrentEditingElementIndex] = useState(0);


  const ref = useRef();

  const dispatch = useDispatch()
  
  const editingElement = useSelector(state => state.elementsList.editingItem)

  const elements = useSelector(state => state.elementsList.currentHtml)

  const getHTML = (item) => {
    return {__html: item};
  }
  
  // ======= delete item from building page
  const deleteItem = (itemIndex) => {
    const elementsArr = [...elements]
    elementsArr.splice(itemIndex, 1) // remove clicked element
   
    dispatch(updateCurrentHtml(elementsArr))
  }

  // ======= editing item from building page
  const editItem = (itemIndex) => {
    const elementsArr = [...elements]
    const editingItem = elementsArr.splice(itemIndex, 1); // only clicked element

    dispatch(setEditingItem(editingItem))
    setModalActive(true)
    setCurrentEditingElementIndex(itemIndex)
  }
  
  const startEditing = (e) => {
    e.preventDefault()
    const clickedItem = e.target;
    clickedItem.setAttribute('contenteditable', 'true');
    

    if (clickedItem.alt === 'img') {
      setStringImgName(clickedItem.outerHTML)
      setChooseImgModalActive(true)
    }
  }

  const saveEditedItem = () => {
    const elementsArr = [...elements]

    const txt = ref.current.innerHTML;
    const result = txt.replace(/ contenteditable="true"/g, '');

    elementsArr[currentEditingElementIndex] = result;

    dispatch(updateCurrentHtml(elementsArr))
    setModalActive(false)
  }

  const moveTop = (itemIndex) => {

    const elementsArr = [...elements];

    if (itemIndex !== 0) {
      const curItem = elementsArr[itemIndex];
      const prevItem = elementsArr[itemIndex - 1];

      elementsArr[itemIndex] = prevItem;
      elementsArr[itemIndex - 1] = curItem;

      dispatch(updateCurrentHtml(elementsArr))
    }
    
  }

  const moveBot = (itemIndex) => {

    const elementsArr = [...elements];

    if (itemIndex !== elementsArr.length - 1) {
      const curItem = elementsArr[itemIndex];
      const nextItem = elementsArr[itemIndex + 1];

      elementsArr[itemIndex] = nextItem;
      elementsArr[itemIndex + 1] = curItem;

      dispatch(updateCurrentHtml(elementsArr))
    }

  }

  // ======== sendImage ========
  const {register, handleSubmit} = useForm()

  const onImgAdd = (data) => {

      sendImg(data.img[0])
        .then(data => {
          const serverImgName = data.data.imgName;
          const fullPathToSeverImg = `${process.env.REACT_APP_API_URL}${serverImgName}`

          const elementsArr = [...elements]
          const editingItem = elementsArr.splice(currentEditingElementIndex, 1)

          const regExpStr = stringImgName.replace(/ contenteditable="true"/g, '');
          const regExp = new RegExp(regExpStr, 'g');

          const htmlWithoutQuots = editingItem[0].replace(/'/g, `"`);

          const result = htmlWithoutQuots.replace(regExp, `<img src='${fullPathToSeverImg}' alt='img'>`);

          
          // elementsArr[currentEditingElementIndex] = result;
          // dispatch(updateCurrentHtml(elementsArr))

          
          dispatch(setEditingItem([result]))

          setChooseImgModalActive(false)

        })
        .catch(err => alert(err))
      
  }
  
  // ======== elements in the build page
  const elemFormArr = elements.map((item, index) => {

    return (
      <div key={index} className='pageItem'>
        
        <div className="pageItem__buttons">
          <button className='removeBtn' onClick={() => deleteItem(index)}><ImBin/></button>
          <button className='editBtn' onClick={() => editItem(index)}><BiEdit/></button>
          <button className='moveItem' onClick={() => moveTop(index)}><BiArrowToTop/></button>
          <button className='moveItem' onClick={() => moveBot(index)}><BiArrowToBottom/></button>
        </div>

        <div dangerouslySetInnerHTML={getHTML(item)}></div>
      </div>
    )
  })

  return (
    <div className='Field'>

      {elemFormArr}

      {
        elements.length === 0 ? <div className='Field__prebuild'>
          <img src={boyWithHat} alt="img" />
          Let`s add some elements!
        </div> : null
      }

      <Modal modalStatus={modalActive} setModalStatus={setModalActive}>
        <div onClick={(e) => startEditing(e)} ref={ref} dangerouslySetInnerHTML={getHTML(editingElement)}></div>
      </Modal>

      <Modal modalStatus={chooseImgModalActive} setModalStatus={setChooseImgModalActive}>
        <form onSubmit={handleSubmit(onImgAdd)}>
                <input {
                        ...register('img',
                            {
                                required: "*Поле обязательно к заполнению"
                            })
                        } 
                        type='file'/>

                <button className='btn btn-primary' type="submit">Save image</button>
            </form>
      </Modal>


      

      {(!modalActive) || <button className={s.saveBtn} onClick={saveEditedItem}>Save Changes <GiSave/></button>}

    </div>
  )
}

export default Filed