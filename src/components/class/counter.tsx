import { Component } from "react";

type counterSate={
    count:number
}
type counterProps={
   message:string
}



export class CounterClass extends Component<counterProps,counterSate>{
    state={
      count:0
    }

    handleClick = ()=>{
        this.setState((prev)=>({count:prev.count+1}))
    }
    render(){
        return(
        <div>
            <button onClick={this.handleClick}>Increment</button>
            <p>{this.state.count} {this.props.message}</p>
        </div>
        )
    }
}