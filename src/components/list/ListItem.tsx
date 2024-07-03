import { UserType } from './types';
import { TableBodyCell, TableRow } from '../table';

export const ListItem = ({ item }: { item: UserType }) => {
    const { email, id, name, phone, username } = item;

    return (
        <TableRow>
            <TableBodyCell>{id}</TableBodyCell>
            <TableBodyCell>{name}</TableBodyCell>
            <TableBodyCell>{username}</TableBodyCell>
            <TableBodyCell>{email}</TableBodyCell>
            <TableBodyCell>{phone}</TableBodyCell>
        </TableRow>
    );
};
