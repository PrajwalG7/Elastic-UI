import {
  EuiText,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiHorizontalRule,
} from "@elastic/eui";
import Navbar from "./components/Navbar";
import KibanaCard from "./components/KibanaCard";
function App() {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      <div style={{ marginTop: "30px", padding: "30px" }}>
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <EuiText>
              <h1 style={{ fontSize: "40px", lineHeight: "50px" }}>
                Turn data into results,
                <br /> response
                <br /> and resolution
              </h1>
              <div>
                <EuiHorizontalRule margin="s" />
              </div>
              <p style={{ lineHeight: "28px" }}>
                Run data analytics at speed and scale for observability,
                security,
                <br /> and search with Kibana. Powerful analysis on any
                <br /> data from any source, from threat intelligence to <br />
                search analytics, logs to application monitoring, and much more.
              </p>
            </EuiText>
            <EuiSpacer />
            <div>
              <EuiButton fill color="primary">
                Get started
              </EuiButton>
            </div>
          </EuiFlexItem>
          <EuiSpacer />
          {/* kibana card */}
          <KibanaCard />
        </EuiFlexGroup>
      </div>
    </div>
  );
}

export default App;
