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
  List
} from "@mui/material";
import TextField from "@mui/material/TextField";

const Details = () => {
  return (
    <>
     <Button
      className="rounded-sm my-12"
      color="primary"
      variant="contained"
      fullWidth
      startIcon={<Upload />}
    >
      Customize and preview
    </Button>
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
      </Paper>

      <Button
        className="rounded-sm my-24"
        color="primary"
        variant="contained"
        fullWidth
        startIcon={<Upload />}
      >
        Configure Payment Terms
      </Button>

      <Paper elevation={3} className="px-24 py-8 rounded-sm">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
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
      <Paper elevation={3} className="px-24 my-12 py-8 rounded-sm">
        <TextField
          id="standard-basic"
          fullWidth
          label="Name"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="Id Number"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="VAT Number"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="Website"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="Email"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="Phone"
          variant="standard"
        />
      </Paper>
      <Paper elevation={3} className="px-24 py-8 mt-24 rounded-sm">
        <FormControl fullWidth variant="standard" sx={{ minWidth: 120, mt: 2 }}>
          <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={2}
            onChange={() => {}}
            label="Size"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          fullWidth
          label="Industry"
          variant="standard"
        />
      </Paper>
    </>
  );
};
const Address = () => {
  return (
    <Paper elevation={3} className="px-24 py-8 rounded-sm">
      <TextField
        id="standard-basic"
        fullWidth
        label="Street"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        fullWidth
        label="Apt/Suite"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        fullWidth
        label="City"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        fullWidth
        label="State/Province"
        variant="standard"
      />
      <TextField
        id="standard-basic"
        fullWidth
        label="Postal Code"
        variant="standard"
      />
      <FormControl fullWidth variant="standard" sx={{ minWidth: 120, mt: 2 }}>
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={2}
          onChange={() => {}}
          label="Country"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>United States</MenuItem>
          <MenuItem value={20}>Pakistan</MenuItem>
          <MenuItem value={30}>Netherlands</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};
const Logo = () => {
  return (
    <Button
      className="rounded-sm"
      color="primary"
      variant="contained"
      fullWidth
      startIcon={<Upload />}
    >
      Upload Logo
    </Button>
  );
};
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
      </Paper>

      <Button
        className="rounded-sm my-24"
        color="primary"
        variant="contained"
        fullWidth
        startIcon={<Upload />}
      >
        Configure Payment Terms
      </Button>

      <Paper elevation={3} className="px-24 py-8 rounded-sm">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
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
      <Paper elevation={3} className="px-24 my-12 py-8 rounded-sm">
        <TextField
          id="standard-basic"
          fullWidth
          label="Name"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="Id Number"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="VAT Number"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="Website"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="Email"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          fullWidth
          label="Phone"
          variant="standard"
        />
      </Paper>
    </>
  );
};
const Documents = () => {
  return (<>
    <Button
      className="rounded-sm"
      color="primary"
      variant="contained"
      fullWidth
      startIcon={<UploadFile />}
    >
      Upload File
    </Button>
  </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const InvoiceDesign = () => {
  const TabContext = React.createContext();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(event.target.value);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="General Settings" />
        <Tab label="Client Details" />
        <Tab label="Company Details" />
        <Tab label="Company Address" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {" "}
        <Details />{" "}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {" "}
        <Address />{" "}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {" "}
        <Address />{" "}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {" "}
        <Defaults />{" "}
      </TabPanel>
    </Box>
  );
};

export default InvoiceDesign;
