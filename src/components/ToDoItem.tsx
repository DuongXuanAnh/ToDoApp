import { Button } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Icon = ( { 
   toDoId,
   isCompleted,
   updateIsCompleted 
  } 
  : 
  { 
    toDoId: string,
    isCompleted : boolean, 
    updateIsCompleted : (id: string) => void
  } ) => {
  return (
    <div onClick={ () => updateIsCompleted(toDoId) }>
      {isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  )
}

const ToDoItem = ( {toDoId, name, isCompleted, updateIsCompleted} : {toDoId:string, name : string, isCompleted: boolean, updateIsCompleted : (id: string) => void} ) => {
  return (
    <Button 
     variant="text"
     fullWidth={true}
     style={{justifyContent: "space-between"}}
     endIcon={<Icon toDoId={toDoId} isCompleted = {isCompleted} updateIsCompleted={updateIsCompleted}/>}
     >
      {name}
    </Button>
  )
}

export default ToDoItem