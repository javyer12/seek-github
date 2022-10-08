import React from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
const stack = {
        marginTop: '6%',
        width: '70%',
}
const textField = {
        width: '100%',
}

export default function Searcher({ inputUser, setInputUser }) {
        const [ valueInput, setValueInput ] = useState(" ")
        const onSearchValue = (e) => {
                const inputValue = e.target.value;
                setValueInput(inputValue);
        }
        const handleSubmit = () => {
                setInputUser(valueInput);
        }


        return (
                <Stack
                        direction='row'
                        sx={stack}>
                        <TextField
                                label="Github User"
                                variant='outlined'
                                placeholder='Search user'
                                size='medium'
                                sx={textField}
                                value={valueInput}
                                onChange={onSearchValue}
                                InputProps={{
                                        endAdornment: (
                                                <IconButton
                                                        onClick={handleSubmit}
                                                >
                                                        <SearchOutlinedIcon />
                                                </IconButton>
                                        )
                                }}
                        >hola</TextField>
                </Stack >
        )
}
// rfc
// rfce   
// rfcp 
