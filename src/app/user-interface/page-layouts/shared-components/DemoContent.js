import CompanyDetails from "@fuse/core/SettingContent/Sections/CompanyDetails";

function DemoContent({ selectedSection }) {
  return (
    <div className="flex-auto p-24 sm:p-40">
      {selectedSection?.component || selectedSection?.title}
    </div>
  );
}

export default DemoContent;
