import {Autocomplete, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {BASELINE_COMPONENTS, BASELINE_COMPONENT_ACTIONS} from '../MOCK_DATA';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useTheme} from '@emotion/react';

const ItemType = 'TABLE_ROW';

const DraggableRow = ({index, moveRow, children}) => {
    const [{isDragging}, ref] = useDrag({
        type: ItemType,
        item: {index},
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveRow(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <TableRow
            ref={(node) => ref(drop(node))}
            style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}
        >
            {children}
        </TableRow>
    );
};

const DraggableTable = () => {
    const [data, setData] = useState(BASELINE_COMPONENTS);

    const theme = useTheme()

    const moveRow = (fromIndex, toIndex) => {
        const updatedData = [...data];
        const [movedRow] = updatedData.splice(fromIndex, 1);
        updatedData.splice(toIndex, 0, movedRow);
        setData(updatedData);
    };

    return (
            <TableContainer component={Paper} sx={{background: 'transparent', color: theme.palette.text.primary}}>
                <Table sx={{padding: '1rem'}}>
                    <TableHead sx={{borderBottom: '0.07rem solid white'}}>
                        <Typography component='h3' style={{padding: '0.4rem'}}>Component Group 1</Typography>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <DraggableRow key={row.id} index={index} moveRow={moveRow}>
                                <TableCell sx={{color: theme.palette.text.primary}}>
                                    <ArrowForwardIosIcon sx={{position: 'relative', top: '0.4rem'}} />
                                    {row.column1}
                                </TableCell>
                                <TableCell sx={{color: theme.palette.text.primary}}>
                                    <Autocomplete
                                        options={BASELINE_COMPONENT_ACTIONS}
                                        renderInput={(params) => <TextField {...params} label="Select Action" InputLabelProps={{
                                            style: {color: theme.palette.text.primary},
                                        }} />}
                                        sx={{
                                            width: 250,
                                            input: {color: theme.palette.text.primary},
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.text.primary,
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: theme.palette.text.primary
                                            }
                                        }}
                                    />
                                </TableCell>

                                <TableCell sx={{color: theme.palette.text.primary, cursor: 'pointer'}}><CloseIcon /></TableCell>
                            </DraggableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
};


export default DraggableTable;
