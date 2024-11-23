import React, {useState} from 'react'


function FunctionTasks() {
    const [tasks, setTasks] = useState({
      listTasks: [],
      response: "",
      remove:[],
      indexes: [],
    });
//  const [checked, setIsChecked] = useState(false)

    const handleTask = (e) => {
        if (e.key === "Enter") {
            setTasks((prevTasks) => ({
              ...prevTasks,
                listTasks: [...prevTasks.listTasks, prevTasks.response],
                remove: [...prevTasks.remove, false],
              response: "",
            }));
        }        
    }
     
    const removeTask = () => {
        const copyOfTasks = [...tasks.listTasks];
        tasks.remove.forEach((i, index) => {
            if(i){
                copyOfTasks.splice(index, 1)
            }
        })
        setTasks((prevTasks) => ({
                  ...prevTasks,
                  listTasks: [...copyOfTasks],
                }));
    }

   
    const addtask = (e) => {
           setTasks((prevTasks) => ({
             ...prevTasks,
             response: e.target.value,
           }));
    };

    // remove task from the listTasks
    const handleCheck = ((index) => {
        const curentremove = [...tasks.remove];
        curentremove[index] = !curentremove[index];
        setTasks((prevTasks) => ({
            ...prevTasks,
            indexes: curentremove[index] ?
                [...prevTasks.indexes, index] :
                prevTasks.indexes.filter(i => i !== index),
            remove: curentremove
            
        }))
        
    })

  return (
    <div>
      <h1>Tasks:</h1>
      <input
        type="text"
        value={tasks.response}
        onKeyUp={handleTask}
        onChange={addtask}
      />
      <h5>Your Now have: {tasks.listTasks.length} tasks</h5>

      <ul>
        {tasks.listTasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => handleCheck(index)} />

            {task}
          </li>
        ))}
      </ul>
      <button onClick={removeTask}>delete</button>
    </div>
  );
}

export default FunctionTasks
