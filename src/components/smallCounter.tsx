import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css'
import {Button} from "./Button";


export const SmallCounter = () => {

    const [value, setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)

    const onIncHandler = () => {
        setValue(value + 1)

    }

    const onResetHandler = () => {
        setValue(0)
    }
    const setButtonHandler = () => {


    }
    const maxValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value, 10);
        setMaxValue(value);
    }
    const startValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value,10)
        setStartValue(value)

    }
    return (
        <div className={s.app}>

            <div className={s.container}>
                <div className={s.indecator}>
                    <span className={s.input}>max value <input onChange={maxValueOnChangeHandler}
                                                               type={"number"}/></span>
                    <div className={s.input}>start value <input onChange={startValueOnChangeHandler} type={"number"}/>
                    </div>
                    <Button name={"set"} callback={() => {
                        setButtonHandler()
                    }}/>
                </div>

            </div>
            <div className={s.container}>

                <div className={s.indecator + (value >= 5 ? " " + s.red : "")}>
                    <div className={s.input}> {value}</div>
                    <div>
                        <Button name={'inc'} callback={() => {
                            onIncHandler()
                        }} disabled={value >= 5}/>
                        <Button name={'reset'} callback={() => {
                            onResetHandler()
                        }}/>

                    </div>
                </div>

            </div>

        </div>
    );
}

