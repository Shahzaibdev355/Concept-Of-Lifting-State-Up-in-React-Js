// import "mdb-ui-kit/css/mdb.min.css";

// Importing necessary components and CSS
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";



const Todo = () => {
  const [task, setTask] = useState([]);

  const handleSubmitTask = (taskValue) => {
    const { id, content, checked } = taskValue;

    // to check if content is empty or not
    if (!content) return;

    // if (task.includes(taskValue)) {return;}

    const ifCurrentTaskMatch = task.find(
      (currTask) => currTask.content === content
    );
    if (ifCurrentTaskMatch) return;

    // in ecmascript es5 version if the key& value same then you can write no need of writing it two times
    setTask((prevTask) => [...prevTask, { id: task.length, content, checked }]);

    console.log("submit");
  };

  const handleDeleteTask = (value) => {
    // console.log(value);

    const updatedTask = task.filter((currTask) => currTask.content !== value)
    .map((task, index) => ({
      ...task,
      id: index  // Reassign IDs to keep them sequential
    }));
    setTask(updatedTask);
  };

  const handleDeleteAllTask = () => {
    setTask([]);
  };

  const handleCheckTodo = (value) => {
    // console.log(task);
    console.log(value);

    const updatedTask = task.map((currTask) => {
      console.log(currTask.checked);

      if (currTask.content === value) {
        // Debugging the current task's checked status before toggling
        console.log("Before toggle, task checked status:", currTask.checked);

        return { ...currTask, checked: !currTask.checked }; // Toggle the checked status
      }
      return currTask;
      // else{
      //   return currTask
      // }
    });
    setTask(updatedTask);
    // console.log(updatedTask);
  };



  const handleEditTask = (newContent, id) => {
    console.log(newContent,id);
    
    const updatedTask = task.map((currTask) => {
      if (currTask.id === id) {
        // Update content while keeping the id the same
        return { ...currTask, content: newContent };
      }
      return currTask;
    });
  
    setTask(updatedTask);
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="d-flex justify-content-center align-items-center">
            <MDBCol lg="10" xl="10">
              <MDBCard className="rounded-3">
                <MDBCardBody className="p-4">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>
                  <MDBRow className="col-md-10 g-3 justify-content-center align-items-center mb-4 pb-2 m-auto">
                    <TodoForm
                      onAddTodo={handleSubmitTask}
                      onDeleteTodo={handleDeleteAllTask}
                    />
                  </MDBRow>

                  <MDBTable className="mb-4 ">
                    <MDBTableHead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {task.map((curTask) => (
                        <TodoList
                          key={curTask.id}
                          id={curTask.id}
                          data={curTask.content}
                          checked={curTask.checked}
                          onDeleteTask={handleDeleteTask}
                          onHandleCheckTodo={handleCheckTodo}
                          onEditTask={handleEditTask}
                        />
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Todo;
