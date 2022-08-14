import {React} from 'react';
import {TableRow,TableCell} from '@mui/material';

function Customer(props){
    return (
            <TableRow>
                <TableCell>{props.id}</TableCell>
                <TableCell><img src={props.image} alt='profile'/></TableCell>
                <TableCell>{props.name}</TableCell>
                <TableCell>{props.birthday}</TableCell>
                <TableCell>{props.gender}</TableCell>
                <TableCell>{props.job}</TableCell>
            </TableRow>
    );
}

export default Customer;