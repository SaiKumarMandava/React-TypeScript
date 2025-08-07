
import './App.css';
import { Greet } from './components/props/greet';
import { Person } from './components/props/person';
import { PersonList } from './components/props/personlist';
import { Header } from './components/props/header';
import { Oscar } from './components/props/oscar';
import { Status } from './components/props/status';
import { Button } from './components/props/button';
import { Container } from './components/props/container';

function App() {
  const personName = {
    firstName:"Sai",
    lastName:"Kumar"
  }
  const nameList = [
  { first: "John", last: "Doe" },
  { first: "Emma", last: "Watson" },
  { first: "Michael", last: "Jordan" },
  { first: "Priya", last: "Reddy" },
  { first: "Aarav", last: "Sharma" }
];

  return (
    <div className="App">
    <Greet name="Sai"  isLoggedin={true}/>
    <Person name={personName}/>
    <PersonList name={nameList}/>
    <Header>Placeholder text</Header>
    <Oscar>
      <Header>oscar goes to rrr</Header>
    </Oscar>
    <Status status="loading"/>
    <Button handleClick={(event,id)=>console.log("Button Clicked",event,id)}/>
      <Container styles={{padding:"1rem", border:"1px solid black",margin:"6px 0px 0px 0px"}}/>
    </div>
  );
}

export default App;
