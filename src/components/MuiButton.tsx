import { Stack, Button, ButtonGroup } from "@mui/material"
import CallIcon from '@mui/icons-material/Call';
import CampaignIcon from '@mui/icons-material/Campaign';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" color='primary'>primary</Button>
                <Button variant="contained" color='secondary'>secondary</Button>
                <Button variant="contained" color='error'>error</Button>
                <Button variant="contained" color='warning'>warning</Button>
                <Button variant="contained" color='info'>info</Button>
                <Button variant="contained" color='success'>success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant="contained" size="small">small</Button>
                <Button variant="contained" size="large">large</Button>
                <Button variant="contained" size="medium">medium</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" startIcon={<CallIcon/>}>contact</Button>
                <Button variant="text" startIcon={<CampaignIcon/>}>Did you Know?</Button>
                <Button variant="text" startIcon={<OutdoorGrillIcon/>}>Barbeque</Button>
            </Stack>
            <Stack direction='row'>
                <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-aria-label="alignment button group">
                    <Button onClick={() => alert('Left Clicked')}>LEFT</Button>
                    <Button onClick={() => alert('Middle Clicked')}>MIDDLE</Button>
                    <Button onClick={() => alert('Right Clicked')}>RIGHT</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    )
}
