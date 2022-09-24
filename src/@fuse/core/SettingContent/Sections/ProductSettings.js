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



const ProductSettings = () => {

  return (
    <>
    <Paper elevation={3} className="px-24  py-8 rounded-sm">
        
     
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        <ListItem sx={{ width: "100%"}}>
          <ListItemIcon>
            <Upload />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Should be invoiced"
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
            primary="Mark Paid"
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
            primary="Add Documents to Invoice"
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
    <Paper elevation={3} className="px-24 my-12  py-8 rounded-sm">
        
     
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        <ListItem sx={{ width: "100%"}}>
          <ListItemIcon>
            <Upload />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-bluetooth"
            primary="Should be invoiced"
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
            primary="Mark Paid"
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
            primary="Add Documents to Invoice"
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
            primary="Add Documents to Invoice"
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
      Configure Categories
    </Button>
  </>
  );
};

export default ProductSettings;
