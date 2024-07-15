import ToDoItem from './ToDoItem'
import { ToDoItemType } from '../App'


const ToDoList = ( 
{
    toDoItemList, 
    updateIsCompleted 
} 
:
{
    toDoItemList : ToDoItemType[],
    updateIsCompleted : (id: string) => void
}) => {
  return (
    <>
     <div>
        {
        toDoItemList.map((toDoItem) => {
            return  <ToDoItem 
                    key={toDoItem.id} 
                    toDoId={toDoItem.id}
                    name={toDoItem.name} 
                    isCompleted={toDoItem.isCompleted} 
                    updateIsCompleted={() => updateIsCompleted(toDoItem.id)}
            />
        })
        }
    </div>
    </>
   
  )
}

export default ToDoList