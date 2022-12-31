import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
  
export default function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
       
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
            
          </IconButton>
          {/* The Typography component applies 
           default font weights and sizes */}
  
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
           <Link to='/'>MEDIBLOCK</Link>
          </Typography>
          <div>
            <div>
            <Link to='/login'>Login</Link>
            </div>
            <br/>
            <div>
            <Link to='/signup'>Signup</Link>
            </div>
          </div>
          
          
        </Toolbar>
      </AppBar>
  );
}