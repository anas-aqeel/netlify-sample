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
import TextField from "@mui/material/TextField";

const Defaults = () => {
  return (
    <>
      <Paper elevation={3} className="px-24  py-8 rounded-sm">
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, mt: 2 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Auto Bill
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={2}
            onChange={() => {}}
            label="Size"
          >
            <MenuItem value={0}>Enabled By Default</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, mt: 2 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Auto Bill
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={2}
            onChange={() => {}}
            label="Size"
          >
            <MenuItem value={0}>Enabled By Default</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, mt: 2 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Invoice Payment Terms
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={2}
            onChange={() => {}}
            label="Invoice Payment Terms"
          >
            <MenuItem value={0}>Enabled By Default</MenuItem>
          </Select>
        </FormControl>
        <List
        
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemIcon>
              <Upload />
            </ListItemIcon>
            <ListItemText
              id="switch-list-label-bluetooth"
              primary="Manual Payment Email"
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
              primary="Online Payment Email"
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
        className="rounded-sm"
        color="primary"
        variant="contained"
        fullWidth
        startIcon={<Upload />}
      >
        Configure Rates
      </Button>
    </>
  );
};


const TaxSettings = () => {

  return (
    <>
    <Paper elevation={3} className="px-24  py-8 rounded-sm">
      

      <FormControl fullWidth variant="standard" sx={{ minWidth: 120, mt: 2 }}>
        <InputLabel id="demo-simple-select-standard-label">
            Item Tax Rates
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={2}
          onChange={() => {}}
          label="Size"
        >
          <MenuItem value={0}>Enabled By Default</MenuItem>
        </Select>
      </FormControl>
      
      <TextField
          id="standard-basic"
          fullWidth
          label="Invoice Payment Terms"
          variant="standard"
        />
      <TextField
          id="standard-basic"
          fullWidth
          label="Invoice Tax Rates"
          variant="standard"
        />
      <TextField
          id="standard-basic"
          fullWidth
          label="Invoice Tax Max"
          variant="standard"
        />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        <ListItem sx={{ width: "100%"}}>
          <ListItemIcon>
            <Upload />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Manual Payment Email"
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
            primary="Online Payment Email"
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
      Configure Rates
    </Button>
  </>
  );
};

export default TaxSettings;
