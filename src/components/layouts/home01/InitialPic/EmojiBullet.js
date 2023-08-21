import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;

    return (
        <Box component={'li'} fontSize={'2rem'} lineHeight={1.2} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0rem', md: '1rem'}} fontSize={'3rem'}>{emoji}</Box> {text}
        </Box>
    );
}

export default EmojiBullet;