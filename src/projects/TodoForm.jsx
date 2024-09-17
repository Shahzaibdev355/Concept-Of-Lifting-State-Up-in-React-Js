
import {
    MDBBtn,
    MDBCol,
    MDBInput,
  } from "mdb-react-ui-kit";

import { useState } from "react";

const TodoForm = ({onAddTodo,onDeleteTodo}) => {

    const [taskValue, settaskValue] = useState({});

    const [editIndex, setEditIndex] = useState(null);

    let handleTaskValue = (value) => {
        console.log(value);
        // settaskValue(value);
        settaskValue({id: value, content: value, checked: false});
      };


      const handleSubmitTask = (e)=>{
        e.preventDefault();
        onAddTodo(taskValue)
        settaskValue({id: "", content: "", checked: false});
      }


      const handleDeleteAllTask = () => {
        onDeleteTodo()
      };
     


  return (
    <form onSubmit={handleSubmitTask} className="row justify-content-center">
      <MDBCol size="6">
        <MDBInput
          label="Enter a task here"
          id="form1"
          type="text"
          value={taskValue.content}
          onChange={(e) => handleTaskValue(e.target.value)}
        />
      </MDBCol>

      <MDBCol size="2">
        <MDBBtn type="submit">{editIndex !== null ? "Update" : "Save"}</MDBBtn>
      </MDBCol>
      <MDBCol size="3">
        <MDBBtn type="submit" color="warning" onClick={handleDeleteAllTask}>
          Delete All
        </MDBBtn>
      </MDBCol>
    </form>
  );
};

export default TodoForm;
