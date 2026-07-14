import './App.css'
import Lottery from './Lottery';
import Ticket from './Ticket';
import {sum} from "./helper";


function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
      <Lottery n= {3} winCondition ={winCondition}/>

      {/* <div className="ticket-row">
        <Ticket ticket ={[0,1,2]}/>
        <Ticket ticket ={[0,1,2,3,4,5]}/>

      </div> */}
    </>
  )
}

export default App;


