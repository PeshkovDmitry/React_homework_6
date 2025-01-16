import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { add } from '../reducers/goodsSlice';
import { useState } from 'react';

function NewGoodsItemForm() {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [available, setAvailable] = useState();

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const onPriceChange = (e) => {
        setPrice(e.target.value);
    };

    const onAvailableChange = (e) => {
        setAvailable(e.target.value);
    };
    
    const dispatch = useDispatch();
    const onAddButtonClick = () => {
        dispatch(add({
            id: Date.now(), 
            name: name, 
            description: description, 
            price: price, 
            available: available}));
    };


    return (
        <Box
        sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            margin: 2,
          }}
        >
            <div>
                <TextField
                    required
                    label="Имя"
                    onChange={onNameChange}
                />
                <TextField
                    required
                    label="Описание"
                    onChange={onDescriptionChange}
                />
                <TextField
                    required
                    type="number"
                    label="Цена"
                    onChange={onPriceChange}
                />
                <FormControlLabel style={{ margin: "6px"}}
                    control={<Checkbox onChange={onAvailableChange}/>} 
                    label="Доступность" 
                />
                <Button 
                    variant="contained"
                    onClick={onAddButtonClick}
                >
                    Добавить
                </Button>

            </div>
        </Box>
    );
}

export default NewGoodsItemForm;