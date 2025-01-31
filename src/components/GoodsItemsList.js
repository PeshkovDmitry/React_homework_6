import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { change, changeAvailable, remove } from '../reducers/goodsSlice';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

function GoodsItemsList() {

    const state = useSelector(state => state.goods);

    const dispatch = useDispatch();

    const onDeleteButtonClick = (e) => {
        dispatch(remove(e.target.value));
    };

    const onChangeAvailableButtonClick = (e) => {
        dispatch(changeAvailable(e.target.value));
    };

    const onChangeButtonClick = (e) => {
        const current = state.goods.filter((item) => item.id == e.target.value);
        dispatch(change(current));
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
                                <Button variant="contained"
                                    value={item.id}
                                    onClick={onChangeAvailableButtonClick}
                                >
                                    Сменить доступность
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button
                                    variant="contained"
                                    value={item.id}
                                    onClick={onChangeButtonClick}
                                >
                                    Редактировать
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button
                                    variant="contained"
                                    value={item.id}
                                    onClick={onDeleteButtonClick}
                                >
                                    Удалить
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}

export default GoodsItemsList;