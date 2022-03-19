import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useNavigate} from 'react-router-dom'
import {Link, Outlet} from 'react-router-dom'

function LinkTab(props) {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        navigate(`/menu${props.href}`)
        }}
      {...props}
    />
  );
}

export default function NavTabs(props) {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        {props.categoriesArray.map((text, index)=> <LinkTab key={index} label={text.name} href= {`/${text.name.split(' ').join('-').toLowerCase()}`} />)}
      </Tabs>
    </Box>
    <Outlet/>
    </>
  );
}
