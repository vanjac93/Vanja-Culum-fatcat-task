import { ListItem } from './ListItem';
import { useListItems } from './useListItems';
import {
    Table,
    TableBody,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '../table';

const COLUMNS = ['ID', 'Name', 'Username', 'Email', 'Phone'];

export const List = () => {
    const { data, error, isLoading } = useListItems();

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return (
            <>
                <span>Something went wrong.</span>
                {error.message && <span>{error.message}</span>}
            </>
        );
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {COLUMNS.map((column) => (
                        <TableHeaderCell key={column}>{column}</TableHeaderCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data?.map((user) => <ListItem key={user.id} item={user} />)}
            </TableBody>
        </Table>
    );
};
