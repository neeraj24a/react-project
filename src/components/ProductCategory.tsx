import React from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import ProductImages from './ProductImages';
import { Box } from '@mui/material';

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 250
    },
    {
        field: 'image',
        headerName: 'Image',
        renderCell: (params) => {
            return <>{ProductImages(params)}</>;
        },
        sortable: false,
        width: 160
    },
    {
        field: 'creationAt',
        headerName: 'Created At',
        width: 150
    },
    {
        field: 'updatedAt',
        headerName: 'Updated At',
        width: 150
    }
];

function ProductCategory(params: GridRenderCellParams) {
    let rows: Category[] = [{...params}.value];
    console.log(rows);
    return (
        <Box sx={{ height: 400, width: '100%' }} key="category">
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
        </Box>
    )
}

export default ProductCategory