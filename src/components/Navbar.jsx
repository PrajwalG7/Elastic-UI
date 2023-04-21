import { EuiPageHeader, EuiPanel } from "@elastic/eui";
function Navbar() {
  return (
    <div>
      <EuiPanel paddingSize="none">
        <EuiPageHeader
          pageTitle="Kibana"
          iconType="logoKibana"
          paddingSize="l"
        />
      </EuiPanel>
    </div>
  );
}

export default Navbar;
