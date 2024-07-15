import { Button, TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'

type Props = {
    item: string,
    onNewToDoItemChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onAddItemClick: () => void
}

const CreateItem = ({item, onNewToDoItemChange, onAddItemClick} : Props) => {
  return (
    <>
     <TextField 
      id="outlined-basic" 
      label="Item" 
      variant="outlined"
      size="small"
      value={item}
      onChange={onNewToDoItemChange}
       />
      <Button variant="contained" onClick={onAddItemClick}>Add</Button>
    </>
  )
}

export default CreateItem