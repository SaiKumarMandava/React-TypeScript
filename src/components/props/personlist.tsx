type personList ={
    name:{
        first:string
        last:string
    }[]
}

export const PersonList = (props:personList)=>{
    return(
        <div>
         {props.name.map((item)=>{
            return(
                <p key={item.first}>{item.first} {item.last}</p>
            )
         })

         }
        </div>
    )
}