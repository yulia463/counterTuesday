import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css'
import {Button} from "./Button";

type UseStateType={
    maxValue: number
    startValue: number
    counterValue: number

}

export const SmallCounter = () => {

    const [value, setValue] = useState<UseStateType>({
        maxValue: Number(localStorage.getItem('maxValue')),
        startValue:  Number(localStorage.getItem('startValue')),
        counterValue: Number(localStorage.getItem('counterValue')),

    })

    const onIncHandler = () => {
        setValue({...value, counterValue: value.counterValue + 1})
        localStorage.setItem('counterValue',String(value.counterValue + 1))
    }

    const onResetHandler = () => {
        setValue({...value, counterValue: value.startValue})
    }

    const setButtonHandler = () => {
        setValue({...value, counterValue: value.startValue})
        localStorage.setItem('counterValue',String(value.startValue))
    }

    const maxValueonChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueMax = parseInt(e.currentTarget.value, 10);
        setValue({...value, maxValue: valueMax})
        localStorage.setItem('maxValue', e.currentTarget.value)

    }
    const startValueonChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueStart = parseInt(e.currentTarget.value, 10);
        setValue({...value, startValue: valueStart})
        localStorage.setItem('startValue', e.currentTarget.value)
    }
    const isDisabled = value.maxValue ===  value.counterValue



    return (
        <div className={s.app}>
            <div className={s.conteiner}>
                <div className={s.indecator}>
                    <span className={s.input} > max value <input
                        onChange={maxValueonChangeHandler}
                        value={value.maxValue}
                        type="number"/> </span>
                    <div className={s.input} >start value <input value={value.startValue}
                                                                 onChange={startValueonChangeHandler}
                                                                 type="number"/>
                    </div>
                    <Button name={"set"} callback={setButtonHandler}/>
                </div>
            </div>

            <div className={s.container}>
                <div className={s.indecator + (isDisabled ? " " + s.red : "")}>
                    <div className={s.input}> {value.counterValue}</div>
                    <div>

                        <Button name={'inc'} callback={onIncHandler} disabled={isDisabled}/>
                        <Button name={'reset'} callback={onResetHandler}/>

                    </div>
                </div>

            </div>

        </div>
    );
}