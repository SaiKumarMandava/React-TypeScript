type personProps = {
    name:{
        firstName:string
        lastName:string
    }
}
export const Person = (props:personProps)=>{
    return(
        <div>
            <p>{props.name.firstName} {props.name.lastName}</p>
        </div>
    )
}