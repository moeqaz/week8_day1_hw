import Form from "./components/Form";
import Navbar from "./components/Navbar";
import ToDoCard from "./components/ToDoCard";


function App() {
    let firstName = 'Usama';
    let lastName = 'Qazi';
    return (
      <>
        <Navbar fName={firstName} lName={lastName}/>
        <div className="container">
              <h1 className="text-center text-dark mt-3">Welcome to your To-Do List</h1>
              <h4 className="text-center text-danger">Add things to do on your to-do list!</h4>
              <ToDoCard/>
        </div>
      </>
    )
}

export default App;
