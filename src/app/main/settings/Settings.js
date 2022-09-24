import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import SettingContent from '@fuse/core/SettingContent';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function SettingsPage(props) {
  const { t } = useTranslation('settingPage');

  return (
    <Root
      header={
       <></>
      }
      content={
        <div className="p-24">
          <SettingContent />

        </div>
      }
      scroll="content"
    />
  );
}

export default SettingsPage;
