import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { Upload, UploadFile } from "@mui/icons-material/";

import {
  Button,
  FormControl,
  InputLabel,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Switch,
  List,
} from "@mui/material";




const OnlinePayments = () => {

  return (
    <>
    <Paper elevation={3} className="px-24  py-8 rounded-sm">
      

      <FormControl fullWidth variant="standard" sx={{ minWidth: 120, mt: 2 }}>
        <InputLabel id="demo-simple-select-standard-label">
            Auto Bill On
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={2}
          onChange={() => {}}
          label=" Auto Bill On"
        >
          <MenuItem value={0}>Due Date</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth variant="standard" sx={{ minWidth: 120, mt: 2 }}>
        <InputLabel id="demo-simple-select-standard-label">
            Off Credit
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={2}
          onChange={() => {}}
          label=" Auto Bill On"
        >
          <MenuItem value={0}>Off</MenuItem>
        </Select>
      </FormControl>
      
     
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        <ListItem sx={{ width: "100%"}}>
          <ListItemIcon>
            <Upload />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Allow over Payment"
            secondary="Email Payment Recipient to the Client"
          />
          <Switch
            edge="end"
            onChange={() => {}}
            checked={true}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Upload />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Allow Under Payment"
            secondary="Email Payment Recipient to the Client"
          />

          <Switch
            edge="end"
            onChange={() => {}}
            checked={true}
            inputProps={{
              "aria-labelledby": "switch-list-label-bluetooth",
            }}
          />
        </ListItem>
      </List>
    </Paper>
    <Button
      className="rounded-sm my-8"
      color="primary"
      variant="contained"
      fullWidth
      startIcon={<Upload />}
    >
      Configure Gateways
    </Button>
  </>
  );
};

export default OnlinePayments;
