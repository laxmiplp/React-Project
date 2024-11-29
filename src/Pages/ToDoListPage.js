import TextFieldComponent from "../Components/TextFieldComponent"
import ButtonComponent from "../Components/ButtonComponent"
import React, { useState } from 'react';
import { FormControl, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ToDoListPage = () => {

    //To do list

    const [toDoTask, setToDoTask] = useState('')
    const [taskList, setTaskList] = useState([])
    const handleToDoInputChange = (e) => {
        setToDoTask(e.target.value)
    }
    const handleAddTask = (e) => {
        e.preventDefault();
        if (toDoTask !== '') {
            setTaskList([...taskList, toDoTask])
            setToDoTask("")
            console.log("list1")

        }


    }
    const handleDeleteTask = (deleteTask) => {
        const updatedTaskLists = taskList.filter((_, index) => index !== deleteTask);
        setTaskList(updatedTaskLists);
        console.log("list2", updatedTaskLists)



    }
    return (
        <>

            <form onSubmit={handleAddTask}>
                <Box mt={5} mx={5}>
                    <Typography variant={"h5"} mb={5}>To Do List</Typography>
                    <Stack direction={"row"} gap={5}>
                        <TextFieldComponent required
                            label={"Enter Task"}
                            type={"text"}
                            value={toDoTask}
                            onChange={handleToDoInputChange}
                            fullWidth={false} />
                        <ButtonComponent children={"Display Text"} variant={"contained"} type={"submit"} />
                    </Stack>


                </Box>

            </form>
            {/* 
            <ul>
                {taskList.map((listitem, index) => (
                    <>
                        <li key={index}>{listitem}</li><ButtonComponent children={"Close"} variant={"outlined"} onClick={() => handleDeleteTask(index)} />
                    </>
                )

                )}
            </ul> */}

            <List>


                {taskList.map((listitem, index) => (
                    <Stack direction={'row'}>
                        <span>
                            <ListItem>
                                <ListItemText
                                    primary={listitem}
                                />
                            </ListItem>
                        </span>
                        <ButtonComponent children={"X"} variant={"outlined"} onClick={() => handleDeleteTask(index)} />
                    </Stack>
                )

                )}
            </List>
        </>
    )
}
export default ToDoListPage