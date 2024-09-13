import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'

function ProductImages(params: GridRenderCellParams) {
    const images = {...params}.value;
    return <>
        {(() => {
            console.log(typeof images);
            if (typeof images === 'string') {
                return (
                    <ImageList sx={{ width: 150, height: 150 }} cols={3} rowHeight={160}>
                        <ImageListItem key={images}>
                            <img
                                srcSet={images}
                                src={images}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                )
            } else {
                return (
                    <ImageList sx={{ width: 150, height: 150 }} cols={3} rowHeight={160}>
                        {images.map((item: string) => (
                            <ImageListItem key={item}>
                                <img
                                    srcSet={item}
                                    src={item}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                )
            }
        })()}
    </>

}

export default ProductImages