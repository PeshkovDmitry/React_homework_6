import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../reducers/goodsSlice';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function GoodsItemsList() {
    
    const state = useSelector(state => state.goods);

    const dispatch = useDispatch();

    const onDeleteButtonClick = (e) => { 
        dispatch(remove(e.target.value));
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
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Имя</TableCell>
                        <TableCell>Описание</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Доступность</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.goods.map((item) => (
                        <TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{item.name}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                            <TableCell align="right">{item.available ? "доступно" : "не доступно"}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained">Сменить доступность</Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button variant="contained">Редактировать</Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button variant="contained" value={item.id} onClick={onDeleteButtonClick}>Удалить</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}

export default GoodsItemsList;