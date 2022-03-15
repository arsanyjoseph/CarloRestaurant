import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const arr1 = ['1', '2', '3']

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        {arr1.map((text, index)=> <LinkTab key={index} label={text} href='/lolo'/>)}
      </Tabs>
    </Box>
  );
}
