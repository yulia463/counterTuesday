export interface AppState {
    maxValue: number;
    startValue: number;
    counterValue: number;
}

export type IncrementAT = ReturnType<typeof IncrementAC>;
export type resetAT = ReturnType<typeof resetAC>;
export type setCounterAT = ReturnType<typeof setButtonAC>;
export type maxValueAT = ReturnType<typeof maxValueAC>;
export type startValueAT = ReturnType<typeof startValueAC>;

const initialState: AppState = {
    maxValue: Number(localStorage.getItem('maxValue')),
    startValue: Number(localStorage.getItem('startValue')),
    counterValue: Number(localStorage.getItem('counterValue')),
};

export type ActionType =
    IncrementAT
    | resetAT
    | setCounterAT
    | maxValueAT
    | startValueAT

export const CounterReducer = (state = initialState, action: ActionType): AppState => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':

            return {
                ...state,
                counterValue: state.counterValue + 1,
            };
        case 'RESET_COUNTER':
            return {
                ...state,
                counterValue: state.startValue,
            };
        case 'SET_COUNTER':
            return {
                ...state,
                counterValue: state.startValue,
                maxValue: state.maxValue,
            };
        case 'SET_MAX_VALUE':
            return {
                ...state,
                maxValue: action.payload.valueMax,
            };
        case 'SET_START_VALUE':
            return {
                ...state,
                startValue: action.payload.valueStart,
            };
        default:
            return state;
    }
};

export const IncrementAC = () => {
    return {
        type: "INCREMENT_COUNTER",
    } as const
}
export const resetAC = () => {
    return {
        type: "RESET_COUNTER",
    } as const
}
export const setButtonAC = () => {
    return {
        type: "SET_COUNTER",
    } as const
}
export const maxValueAC = (valueMax: number) => {
    return {
        type: "SET_MAX_VALUE",
        payload: {
            valueMax
        }
    } as const
}
export const startValueAC = (valueStart: number) => {
    return {
        type: "SET_START_VALUE",
        payload: {
            valueStart
        }
    } as const
}