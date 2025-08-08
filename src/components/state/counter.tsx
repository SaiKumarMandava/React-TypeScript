import { useReducer } from "react"

type CounterState={
    count:number
}
type UpdateAction ={
    type:"increment" | "decrement"
    payload:number
}
type ResetAction ={
    type:"reset"
}

type ActionState = UpdateAction | ResetAction

const intialState = {count:10}

function reducer(state:CounterState,action:ActionState){
    switch(action.type){
        case "increment":
            if(state.count >= 10){
            return {count:state.count + action.payload}
            }
            return state
        case "decrement":
             if(state.count > 10){
            return {count:state.count - action.payload}
            }
            return state
        case "reset":
            return intialState
        default:
            return state
    }
}
export const Counter =()=>{
    const [state,dispatch] = useReducer(reducer,intialState)
    return(
        <>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:"increment",payload:10})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement",payload:10})}>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>


        </>
    )
}