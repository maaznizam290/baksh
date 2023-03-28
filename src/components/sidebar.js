import  React,{useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import emp from '../components/assets/emp.png';
import arrow  from '../components/assets/iscds.png';
import sd from '../components/assets/sd.png';
import lod from '../components/assets/lod.png'; 
import emoji from '../components/assets/emj.png';
import payroll from '../components/assets/pyto.png';
import reimburse from '../components/assets/reim.png';
import holiday from '../components/assets/holid.png';
import manager from '../components/assets/manag.png';
import sett from '../components/assets/set.png';
import notification from '../components/assets/notification.png';
import avat from '../components/assets/avatarss.png';
const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(5),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Sidebar() {
  const [active,setActive] = useState(false);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick=()=>{
    setActive(!active);
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{backgroundColor:'black'}} position="fixed" open={open} 
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{color:'white',margin:'13px'}} >
            Attendance Report
          </Typography>
        </Toolbar>
        <img src={notification} style={{width:'19px',marginLeft:'65pc',marginTop:'-2pc',position:'relative',display:'block',height:'32px'}} alt="" />
      <img src={avat} alt="" style={{width:'19px',marginLeft:'68  pc',marginTop:'-2pc',position:'relative',display:'block',height:'32px'}} />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <h1 style={{marginLeft:'3pc',fontFamily:'Merriweathe'}}>BAKSH</h1>
        <List>
          {['Dashboard', 'Employees'].map((text, index) => (
            <ListItem key={text} >
              <ListItemButton onChange={handleClick} style={{backgroundColor:active?"black":"white" }}  >
                <ListItemIcon onChange={handleClick} style={{color:active ? "white":"black"}}>
                  {index % 2 === 0 ? <GridViewIcon /> : <img src={emp} alt="" /> }
                </ListItemIcon>
                <ListItemText primary={text}  onClick={handleClick} style={{color:active ? "white":"black"}}/>
                  {index===1 ? <img src={arrow} alt="" />:""}
              </ListItemButton>
            </ListItem>
          ))}
          {['Attendance', 'Loan Management'].map((text, index) => (
            <ListItem key={text} >
              <ListItemButton onChange={handleClick} style={{backgroundColor:active?"black":"white" }} 
              // value={<Menu/>}
              >
                <ListItemIcon onChange={handleClick} style={{color:active ? "white":"black"}}> 
                  {index % 2 === 0 ? <img src={sd} alt=""/> : <img src={lod} alt="" />}
                </ListItemIcon>
                <ListItemText primary={text}  onClick={handleClick} style={{color:active ? "white":"black"}} />
                {index===0 ? <img src={arrow} alt="" />:""}
              </ListItemButton>
            </ListItem>
          ))}
                {['Leaves', 'Payroll'].map((text, index) => (
            <ListItem key={text} >
              <ListItemButton onChange={handleClick} style={{backgroundColor:active?"black":"white" }} >
                <ListItemIcon onChange={handleClick} style={{color:active ? "white":"black"}}> 
                  {index % 2 === 0 ? <img src={emoji} alt=""/> : <img src={payroll} alt="" />}
                </ListItemIcon>
                <ListItemText primary={text}  onClick={handleClick} style={{color:active ? "white":"black"}} />
                {index%1 ===0 ? <img src={arrow} alt="" />:""}
              </ListItemButton>
            </ListItem>
          ))}
                    {['Reimburse', 'Holiday'].map((text, index) => (
            <ListItem key={text} >
              <ListItemButton onChange={handleClick} style={{backgroundColor:active?"black":"white" }} >
                <ListItemIcon onChange={handleClick} style={{color:active ? "white":"black"}}> 
                  {index % 2 === 0 ? <img src={reimburse} alt=""/> : <img src={holiday} alt="" />}
                </ListItemIcon>
                <ListItemText primary={text}  onClick={handleClick} style={{color:active ? "white":"black"}} />
                {index ===1 ? <img src={arrow} alt="" />:""}
              </ListItemButton>
            </ListItem>
          ))}
              {['Managers', 'Setup'].map((text, index) => (
            <ListItem key={text} >
              <ListItemButton onChange={handleClick} style={{backgroundColor:active?"black":"white" }} >
                <ListItemIcon onChange={handleClick} style={{color:active ? "white":"black"}}> 
                  {index % 2 === 0 ? <img src={manager} alt=""/> : <img src={sett} alt="" />}
                </ListItemIcon>
                <ListItemText primary={text}  onClick={handleClick} style={{color:active ? "white":"black"}} />
                {index ===1 ? <img src={arrow} alt="" />:""}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
        </Typography>
        <Typography paragraph>
        </Typography>
      </Main>
    </Box>
  );
}