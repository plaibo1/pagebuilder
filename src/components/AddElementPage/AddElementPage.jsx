import React, { Fragment, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";


const AddElementPage = () => {

    const elemsSelect = useRef()
    const [elemsData, setElemsData] = useState([]);

    const [valueInputStack, setValueInputStack] = useState([]);

    const {
        register,
        setValue,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset
    } = useForm({ mode: "onBlur" })

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}api/elements/allelements`)
            .then(res => res.json())
            .then(json => setElemsData(json))
    }, [])

    const onSubmit = (formData) => {

        const images = {}

        valueInputStack.forEach(item => {
            images[item.key] = item.value
        })

        const data = {info: {...formData, images: images}, name: formData.name}

        fetch(`${process.env.REACT_APP_API_URL}api/elements/${elemsSelect.current.value}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res.message) alert(res.message)
            })
    }

    const testQuery = () => {
        console.log(elemsSelect.current.value)
    }

    // const createImagesObject = (id, var1, var2) => {
    //     setValueInputStack(
    //         valueInputStack.map((input, index) => {
    //             return index === id ? { ...input, var1[var2] } : input
    //         })
    //     );
    // }

    const changeValue = (id, value) => {
        setValueInputStack(
            valueInputStack.map((input, index) => {
                return index === id ? { ...input, value: value } : input
            })
        );
    };

    const changeKey = (id, value) => {
        setValueInputStack(
            valueInputStack.map((input, index) => {
                return index === id ? { ...input, key: value } : input
            })
        );
    };

    const addToInputStack = () => {
        setValueInputStack([...valueInputStack, { id: valueInputStack.length, value: "", key: ""}]);
    };

    return (
        <div>
            <form className='baseForm' onSubmit={handleSubmit(onSubmit)}>

                <label>
                    <div>choose type of element</div>
                    <select ref={elemsSelect}  defaultValue="" onChange={testQuery}>
                        <option value="" disabled hidden>Choose here</option>
                        {
                            elemsData.map((item, index) => <option key={index} value={item.dbName}>{item.name}</option>)
                        }
                    </select>
                </label>

                <label>
                    <div>name: <span className="brackets">{'{'}</span></div>
                    <input
                        {...register('name',
                            {
                                required: "*Поле обязательно к заполнению",
                                maxLength: {
                                    value: 20,
                                    message: "Максимум 20 символов"
                                }
                            })
                        }
                    />
                    <span className="brackets">{'}'}</span>
                </label>

                <label>
                    <div>headingImg: <span className="brackets">{'{'}</span></div>
                    <input
                        {...register('headingImg',
                            {
                                required: "*Поле обязательно к заполнению"
                            })
                        }
                    />
                    <span className="brackets">{'}'}</span>
                </label>

                <label>
                    <div>images: <span className="brackets">{'{'}</span></div>
                    {valueInputStack.map((_, index) => (
                        <div key={index}>
                            <input
                                placeholder="key"
                                onChange={(e) => {
                                    changeKey(index, e.target.value);
                                }}
                            />
                            <input
                                placeholder="value"
                                onChange={(e) => {
                                    changeValue(index, e.target.value);
                                }}
                            />
                        </div>
                    ))}
                    <span className="brackets">{'}'}</span>
                    <button className="addImagesBtn" onClick={addToInputStack}>Add images path</button>
                </label>

                <label>
                    <div>html: <span className="brackets">{'{'}</span></div>
                    <textarea
                        {...register('html',
                            {
                                required: "*Поле обязательно к заполнению"
                            })
                        }
                    />
                    <span className="brackets">{'}'}</span>
                </label>



                <div className="baseForm-flexWrapper">
                    <button className='baseForm__btn' type='submit' disabled={!isValid}>Add Element</button>
                </div>

            </form>

        </div>
    )
}

export default AddElementPage;