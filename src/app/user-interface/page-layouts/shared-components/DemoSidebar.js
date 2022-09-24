import FuseNavigation from "@fuse/core/FuseNavigation";
import CompanyDetails from "@fuse/core/SettingContent/Sections/CompanyDetails";
import UserDetails from "@fuse/core/SettingContent/Sections/UserDetails";
import TaxSettings from "@fuse/core/SettingContent/Sections/TaxSettings";
import OnlinePayments from "@fuse/core/SettingContent/Sections/OnlinePayments";
import ProductSettings from "@fuse/core/SettingContent/Sections/ProductSettings";
import InvoiceDesign from "@fuse/core/SettingContent/Sections/InvoiceDesign";
const navigationData = [
  {
    id: "1",
    title: "Basic Settings",
    subtitle: "Task, project & team",
    type: "group",
    children: [
      {
        id: "1.1",
        title: "Company Details",
        type: "item",
        icon: "heroicons-outline:plus-circle",
        component: <CompanyDetails />,
      },
      {
        id: "1.2",
        title: "User Details",
        type: "item",
        icon: "heroicons-outline:user-group",
        component: <UserDetails />,
      },
      {
        id: "1.3",
        title: "Product Settings",
        type: "item",
        icon: "heroicons-outline:briefcase",
        component: <ProductSettings />,
      },
      {
        id: "1.4",
        title: "Online Payments",
        type: "item",
        icon: "heroicons-outline:user-add",
        component: <OnlinePayments/>,
      },
      {
        id: "1.5",
        title: "Tax Settings",
        subtitle: "Assign to a task or a project",
        type: "item",
        icon: "heroicons-outline:badge-check",
        component: <TaxSettings />,
      },
      {
        id: "1.6",
        title: "Workflow Setting",
        type: "item",
        icon: "heroicons-outline:plus-circle",
        component: <CompanyDetails />,
      },
      {
        id: "1.7",
        title: "Import|Export",
        type: "item",
        icon: "heroicons-outline:user-group",
        component: <UserDetails />,
      },
      {
        id: "1.8",
        title: "Device Settings",
        type: "item",
        icon: "heroicons-outline:briefcase",
        component: <ProductSettings />,
      },
      {
        id: "1.9",
        title: "Account Management",
        type: "item",
        icon: "heroicons-outline:user-add",
        component: <OnlinePayments/>,
      },
      {
        id: "2.0",
        title: "Localization",
        subtitle: "Assign to a task or a project",
        type: "item",
        icon: "heroicons-outline:badge-check",
        component: <TaxSettings />,
      },
    ],
  },
  {
    id: "2",
    title: "Advanced settings",
    type: "group",
    children: [
      {
        id: "2.1",
        title: "Invoice Design",
        type: "item",
        icon: "heroicons-outline:clipboard-list",
        component: <InvoiceDesign />,
        // badge: {
        //   title: '49',
        //   classes: 'px-2 bg-primary text-on-primary rounded-full',
        // },
      },
      {
        id: "2.2",
        title: "Custom Fields",
        type: "item",
        icon: "heroicons-outline:clipboard-copy",
        component: <CompanyDetails />,
      },
      {
        id: "2.3",
        title: "Generated Number",
        type: "item",
        icon: "heroicons-outline:clipboard-check",
        component: <CompanyDetails />,
      },
      {
        id: "2.4",
        title: "Email Settings",
        type: "item",
        icon: "heroicons-outline:clipboard",
        component: <CompanyDetails />,
      },
      {
        id: "2.5",
        title: "Client Portal",
        type: "item",
        icon: "heroicons-outline:user",
        component: <CompanyDetails />,
      },
      {
        id: "2.6",
        title: "Group Settings",
        type: "item",
        icon: "heroicons-outline:users",
        component: <CompanyDetails />,
      },
    ],
  },
 
];

function DemoSidebar({ handleItemClicked }) {
  return (
    <div className="px-12 py-24 min-h-6xl">
      <div className="mx-12 text-3xl font-bold tracking-tighter">Settings</div>
      <FuseNavigation
        navigation={navigationData}
        onItemClick={handleItemClicked}
        className="px-0"
      />
    </div>
  );
}

export default DemoSidebar;
