import { memo } from "react";
import PageLayoutOverview from '../../../app/user-interface/page-layouts/PageLayoutOverview';
import CardedWithSidebarsNormalScrollComponent from '../../../app/user-interface/page-layouts/carded/with-sidebars/CardedWithSidebarsNormalScrollComponent';
import CompanyDetails from "./Sections/CompanyDetails";
export const overviews = {
    carded: {
      withSidebars: {
        title: 'Carded Page Layout With Sidebars',
        description:
          'Layout with left and right sidebars, a dedicated header and 3 different scroll modes.',
        availableOptions: [
          {
            value: 'normalScroll',
            title: 'Normal Scroll',
          }
        ],
        selectedOption: 'normalScroll',
        options: {
          normalScroll: {
            description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
            link: '/ui/page-layouts/carded/with-sidebars/normal-scroll',
            component: CardedWithSidebarsNormalScrollComponent,
          },
         
        },
      },
    },
  };
function SettingContent() {
  return <PageLayoutOverview data={overviews.carded.withSidebars} />;
}

export default memo(SettingContent);
