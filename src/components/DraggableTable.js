import {Autocomplete, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {BASELINE_COMPONENTS, BASELINE_COMPONENT_ACTIONS} from '../MOCK_DATA';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

const DraggableTable = ({rows}) => {
    const [data, setData] = useState(BASELINE_COMPONENTS);

    const moveRow = (fromIndex, toIndex) => {
        const updatedData = [...data];
        const [movedRow] = updatedData.splice(fromIndex, 1);
        updatedData.splice(toIndex, 0, movedRow);
        setData(updatedData);
    };

    return (
        <DndProvider backend={HTML5Backend} sx={{background: 'transparent'}}>
            <TableContainer component={Paper} sx={{background: 'transparent', color: 'white'}}>
                <Table sx={{padding: '1rem'}}>
                    <TableHead sx={{borderBottom: '0.07rem solid white'}}>
                        <Typography component='h3' style={{padding: '0.4rem'}}>Component Group 1</Typography>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <DraggableRow key={index} index={index} moveRow={moveRow}>
                                <TableCell sx={{color: 'white'}}>
                                    <ArrowForwardIosIcon sx={{position:'relative', top: '0.4rem'}}/>
                                    {row.column1}
                                </TableCell>
                                <TableCell sx={{color: 'white'}}>
                                    <Autocomplete
                                        options={BASELINE_COMPONENT_ACTIONS}
                                        renderInput={(params) => <TextField {...params} label="Select Action" InputLabelProps={{
                                            style: {color: 'white'},
                                        }} />}
                                        sx={{
                                            width: 250,
                                            input: {color: 'white'},
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white',
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'white'
                                            }
                                        }}
                                    />
                                </TableCell>

                                <TableCell sx={{color: 'white', cursor: 'pointer'}}><CloseIcon /></TableCell>
                            </DraggableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </DndProvider>
    );
};


export default DraggableTable;
