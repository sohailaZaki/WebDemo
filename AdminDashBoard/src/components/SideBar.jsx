import { Avatar, Box, Toolbar, Tooltip, Typography, styled, useTheme } from '@mui/material'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { BarChartOutlined, CalendarMonthOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PeopleAltOutlined, PeopleOutlined, PersonOutline, PieChartOutline, PieChartOutlineOutlined, ReceiptLongOutlined, TimelineOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));




const Array1 = [
  { text: "Dashboard", icon: <HomeOutlined />, path: "/dashboard" },
  { text: "Users", icon: <PeopleOutlined />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlined />,
    path: "/cont"
   
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptLongOutlined />,
    path: "/invoices",
  },
];
const Array2 = [
  { text: "Add User", icon: <PersonAddAlt1OutlinedIcon />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
 
];
const Array3 = [
  { text: "Bar Chart", icon: <BarChartOutlined />, path: "/barChart" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pieChart" },
  { text: "Line Chart", icon: <TimelineOutlined />, path: "/lineChart" },
];
const SiderBar=({open,handleDrawerClose})=>{
  const location =useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open} >

      <DrawerHeader sx={{ backgroundColor: "#ffebee", }}>

        <IconButton onClick={handleDrawerClose}
          sx={{
            '&:focus': {
              outline: 'none', // Remove the focus ring
              color: "#ec407a",
            },
          }}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon sx={{ color: "#ec407a" }} />
          ) : (
            <ChevronLeftIcon sx={{ color: "#f48fb1" }} />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />
      <Box sx={{ backgroundColor: "White"  }}>
        <Avatar sx={{ mx: "auto", height: open ? 88 : 44, width: open ? 88 : 44, my: 2, transition: "0.25s", }}
          alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

        <Typography align='center' color="Black" sx={{

          fontSize: open ? 20 : 0, transition: "0.25s"
        }}
        >Sondos</Typography>
        <Typography align='center' color="Black" sx={{

          fontSize: open ? 15 : 0, transition: "0.25s"
        }}>Admin</Typography>

         
      </Box>

      <Divider />

      <List sx={{ backgroundColor: open ? "White" : "#ffebee" }}>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={open ?null: item.text} placement='left'>
            <ListItemButton
               onClick={()=>{
                navigate(item.path)
             }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                color: "black",
                bgcolor:location.pathname === item.path?(open?"#ffebee":"white")
                :null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: "#e57373",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text}
                sx={{
                  opacity: open ? 1 : 0,

                }} />
            </ListItemButton>
            </Tooltip>
        
          </ListItem>
        ))}
      </List>
     

      <List sx={{ backgroundColor: open ? "White" : "#ffebee", }}>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
                 <Tooltip title={open ?null: item.text} placement='left'>
                 <ListItemButton
               onClick={()=>{
                navigate(item.path)
             }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                color: "black",
                bgcolor:location.pathname === item.path?(open?"#ffebee":"white")
                :null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: "#e57373",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text}
                sx={{
                  opacity: open ? 1 : 0,

                }} />
            </ListItemButton>
            </Tooltip>
           
           
          
          </ListItem>
        ))}
      </List>

    
      <List sx={{ backgroundColor: open ? "White" : "#ffebee", height:1000}}>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
             <Tooltip title={open ?null: item.text} placement='left'>
             <ListItemButton
               onClick={()=>{
                navigate(item.path)
             }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                color: "black",
                bgcolor:location.pathname === item.path?(open?"#ffebee":"white")
                :null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: "#e57373",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text}
                sx={{
                  opacity: open ? 1 : 0,

                }} />
            </ListItemButton>
              </Tooltip>
           
          </ListItem>
        ))}
      </List>
    </Drawer>

  )
}

export default SiderBar;

