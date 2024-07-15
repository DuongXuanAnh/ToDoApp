import { ChangeEvent, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import ToDoList from "./components/ToDoList"
import CreateItem from "./components/CreateItem"

export type ToDoItemType = { id:string, name:string, isCompleted:boolean }

function App() {

  const [toDoItemList, setToDoItemList] = useState<ToDoItemType[]>(
    JSON.parse(localStorage.getItem("toDoItemList") || "[]")
  );
  const [item, setItem] = useState<string>("");


  useEffect(() => {
    localStorage.setItem("toDoItemList", JSON.stringify(toDoItemList));
  },[toDoItemList])

  const onNewToDoItemChange = (e : ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  }

  const onAddItemClick = () => {

    if(item.trim() === "") {
      alert("Item cannot be empty");
      return;
    }

    const newToDoItem : ToDoItemType = {id: uuidv4(), name: item, isCompleted: false};

    setToDoItemList([newToDoItem, ...toDoItemList]);
    setItem("");
  }

  const updateIsCompleted = (id: string) => {
    const updatedToDoItemList = toDoItemList.map((toDoItem) => {
      if(toDoItem.id === id) {
        return {...toDoItem, isCompleted: !toDoItem.isCompleted}
      }
      return toDoItem;
    })

    setToDoItemList(updatedToDoItemList);
  }


  return (
    <>
      <h2>To Do List App</h2>
      <CreateItem 
      item={item} 
      onNewToDoItemChange={onNewToDoItemChange} 
      onAddItemClick={onAddItemClick} 
      />
      <ToDoList toDoItemList={toDoItemList} updateIsCompleted = {updateIsCompleted}/>
     
    </>
  )
}

export default App
