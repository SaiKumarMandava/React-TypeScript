type StatusProps={
    status:'loading' | "success" |"error"
}
export const Status = (props:StatusProps)=>{
    return(
        <div>
           {props.status ==="loading"?(<h2>Loading...</h2>): 
           props.status==="success"?(<h2>Data fetched successfully...</h2>):
           
           props.status==="error"?(<h2>Error in fetching data...</h2>):
           <p>Props Not Valid</p>

           }
           
           
            
          

        </div>
    )
}