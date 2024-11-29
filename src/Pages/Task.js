import TextFieldComponent from "../Components/TextFieldComponent"
import ButtonComponent from "../Components/ButtonComponent"
import React, { useState } from 'react';
import { FormControl, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

const Task = () => {
    const [inputText, setInputText] = useState(" ")
    const [displayText, setDisplayText] = useState(" ")

    const handleInputChange = (e) => {
        setInputText(e.target.value)

    }
    const handleButtonClick = () => {
        setDisplayText(inputText)
        setInputText(" ")
    }

    //To do list

    const [toDoTask, setToDoTask] = useState('')
    const [taskList, setTaskList] = useState([])
    const handleToDoInputChange = (e) => {
        setToDoTask(e.target.value)
    }
    const handleAddTask = (e) => {
        e.prevent.default()
        if (toDoTask !== '') {
            setTaskList([...toDoTask, taskList])
            setToDoTask("")
            console.log("list1")

        }


    }
    const handleDeleteTask = (deleteTask) => {
        const updatedTaskLists = taskList.filter((_, index) => index !== deleteTask);
        setTaskList(updatedTaskLists);
        console.log("list2", updatedTaskLists)

        // const updatedTaskLists = []
        // for (let i = 0; i < taskList.length; i++) {
        //     if (i !== deleteTask) {
        //         updatedTaskLists.push(taskList[i])
        //     }
        // }

    }
    return (
        <>
            <Stack direction={"column"} mt={5} gap={5} width={200} alignItems={"center"} mx={5}>
                <TextFieldComponent required
                    label={"Enter Text"}
                    type={"text"}
                    value={inputText}
                    onChange={handleInputChange}
                    fullWidth={false} />
                <ButtonComponent children={"Display Text"} variant={"contained"} onClick={handleButtonClick} />
                {{ displayText } && <Typography component={"p"}>{"Entered Text:"}{displayText}</Typography>}
            </Stack>
            <FormControl onSubmit={handleAddTask}>
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

                    {/* <List>
                    <ListItem>
                        <ListItemText
                            primary="Single-line item"
                        />

                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Single-line item"
                        />

                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Single-line item"
                        />

                    </ListItem>
                </List> */}
                </Box>

            </FormControl>

            <ul>
                {taskList.map((toDoTask, index) => {
                    <>
                        <li key={index}>{toDoTask}</li><ButtonComponent children={"Close"} variant={"outlined"} onClick={() => handleDeleteTask(index)} />
                    </>
                }

                )}
            </ul>
        </>
    )
}
export default Task