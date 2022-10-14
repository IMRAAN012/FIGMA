import { Box, Stack, Divider } from "@mui/material"

export const MuiLayout = () => {
    return (
        <Stack 
            sx={{border: '0.5px solid'}} 
            direction='row'
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            >
            
        <Box 
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '16px',
                '&:hover':{
                    backgroundColor: 'primary.light',
                },
        }}
        >
         5 Bedroom  
        </Box>
        <Box 
            letterSpacing={4} 
            flexDirection='row'
            display= 'flex'
            height= '100px'
            width= '100px'
            bgcolor= 'success.light'
            padding={2}
            >5 Bathroom

        </Box>
        <Box 
            letterSpacing={4} 
            flexDirection='row'
            display= 'flex'
            height= '100px'
            width= '100px'
            bgcolor= 'success.light'
            padding={2}
            >1 Garage

        </Box>
        <Box 
            letterSpacing={4} 
            flexDirection='row'
            display= 'flex'
            height= '100px'
            width= '100px'
            bgcolor= 'success.light'
            padding={2}
            >350 Landsize

        </Box>
        <Box 
            letterSpacing={4} 
            flexDirection='row'
            display= 'flex'
            height= '100px'
            width= '100px'
            bgcolor= 'success.light'
            padding={2}
            >2015 Year Built

        </Box>


        </Stack>

    )
}






