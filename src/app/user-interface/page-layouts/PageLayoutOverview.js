import { darken, lighten } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import GlobalStyles from '@mui/material/GlobalStyles';


function PageLayoutOverview(props) {
  const { data } = props;
  console.log(data)
  const {
    title,
    description,
    availableOptions,
    selectedOption: defaultSelectedOption,
    options,
  } = data;

  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);

  const SelectedComponent = options[selectedOption]?.component
    ? options[selectedOption]?.component
    : () => null;


  return (
    <>
      <GlobalStyles />
          <Paper className="preview-wrapper z-20 relative h-3xl w-5xl rounded-1xl shadow-xl flex flex-auto min-h-full overflow-hidden border">
            

            <div className="flex flex-col flex-auto">

              <div className="preview-component relative flex flex-col flex-auto z-10">
                <SelectedComponent />
              </div>

              <Box
                className="preview-footer relative z-20 flex flex-shrink-0 items-center h-56 px-24 sm:px-40 border-t"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? lighten(theme.palette.background.default, 0.4)
                      : lighten(theme.palette.background.default, 0.02),
                }}
              >
                <Box
                  className="w-128 h-16 rounded-full"
                  sx={{
                    backgroundColor: (theme) => darken(theme.palette.background.default, 0.1),
                  }}
                />
              </Box>

            </div>
          </Paper>

          
    </>
  );
}

PageLayoutOverview.defaultProps = {
  data: {
    title: '',
    description: '',
    availableOptions: [],
    selectedOption: '',
    options: {},
  },
};

export default PageLayoutOverview;
