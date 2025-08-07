type containerStyles ={
    styles:React.CSSProperties
}
export const Container = (props:containerStyles)=>{
    return(
        <div style={props.styles} >
            Text Goes Here
        </div>
    )
}