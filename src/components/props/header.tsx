type headerProps = {
    children:string
}
export const Header = (props:headerProps)=>{
   return(
    <div>
        {props.children}
    </div>
   )
}