import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function NewGoodsItem() {
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
                />
                <TextField
                    required
                    label="Описание"
                />
                <TextField
                    required
                    type="number"
                    label="Цена"
                />
                <FormControlLabel style={{ margin: "6px"}}
                    control={<Checkbox defaultChecked />} 
                    label="Доступность" 
                />
                <Button 
                    variant="contained"
                >
                    Добавить
                </Button>

            </div>
        </Box>
    );
}

export default NewGoodsItem;