import React from "react";
import { Drawer, List } from "@mui/material";
const MenuDrawer = ({ open, onClose, menuItems }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
          <List>
            <h1>Empty</h1>
       
          </List>
        </Drawer>
      );
    };
  


export default MenuDrawer
