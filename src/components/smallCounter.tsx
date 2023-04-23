import React, {ChangeEvent} from 'react';
import s from './App.module.css'
import {Button} from "./Button";
import {useDispatch} from "react-redux";

import {useAppSelector} from "../hooks/hooks";
import {IncrementAC, maxValueAC, resetAC, setButtonAC, startValueAC} from "./localStorage/reducer/reducer";


export const SmallCounter = () => {

    const value1 = useAppSelector(state => state)
    const dispatch = useDispatch()
    console.log('value:', value1)

    const onIncHandler = () => {
        dispatch(IncrementAC())
    }

    const onResetHandler = () => {
        // setValue({...value, counterValue: value.startValue})
        dispatch(resetAC())
    }

    const setButtonHandler = () => {
        //  setValue({...value, counterValue: value.startValue})
        //  localStorage.setItem('counterValue',String(value.startValue))
        dispatch(setButtonAC())
    }

    const maxValueonChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueMax = parseInt(e.currentTarget.value, 10);
        //  setValue({...value, maxValue: valueMax})
        // localStorage.setItem('maxValue', e.currentTarget.value)
        dispatch(maxValueAC(valueMax))
    }
    const startValueonChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueStart = parseInt(e.currentTarget.value, 10);
        //  setValue({...value, startValue: valueStart})
        // localStorage.setItem('startValue', e.currentTarget.value)
        dispatch(startValueAC(valueStart))
    }
    const isDisabled = value1.counter.maxValue === value1.counter.counterValue


    return (
        <div className={s.app}>
            <div className={s.conteiner}>
                <div className={s.indecator}>
                    <span className={s.input}> max value <input
                        onChange={maxValueonChangeHandler}
                        value={value1.counter.maxValue}
                        type="number"/> </span>
                    <div className={s.input}>start value <input value={value1.counter.startValue}
                                                                onChange={startValueonChangeHandler}
                                                                type="number"/>
                    </div>
                    <Button name={"set"} callback={setButtonHandler}/>
                </div>
            </div>

            <div className={s.container}>
                <div className={s.indecator + (isDisabled ? " " + s.red : "")}>
                    <div className={s.input}> {value1.counter.counterValue}</div>
                    <div>

                        <Button name={'inc'} callback={onIncHandler} disabled={isDisabled}/>
                        <Button name={'reset'} callback={onResetHandler}/>

                    </div>
                </div>

            </div>

        </div>
    );
}
