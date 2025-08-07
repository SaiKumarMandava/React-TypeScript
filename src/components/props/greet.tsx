type GreetProps = {
    name:string
    messageCount?:number
    isLoggedin:boolean
}
export const Greet = (props:GreetProps)=>{
    const { messageCount=0 } = props
    return (
        <div>
            <h1>
                
               {props.isLoggedin && `Welcome ${props.name} ! You have ${messageCount} unread messages` || `Welcome Guest`} 
                
                
            </h1>
        </div>
       
    )
}