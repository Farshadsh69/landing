import { createTheme } from '@mui/material/styles';
import palette from './palette';
import { getDirection } from '../localization';
const theme=createTheme({
    palette:palette,
    direction:getDirection()

})
export default theme