import React from "react";
import { EuiButton, EuiCard, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

export default function KibanaCard() {
  return (
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img src="./kibana-dash.png" alt="Kibana-Dashboard" />
          </div>
        }
        title="Looking to create dashboards with Elasticsearch data? Get started here."
        footer={
          <EuiFlexGroup justifyContent="flexEnd">
            <EuiFlexItem grow={false}>
              <EuiButton>Watch video</EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        }
      />
    </EuiFlexItem>
  );
}
