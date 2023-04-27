// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { FormControl } from "@mui/material";
import MDInput from "components/MDInput";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import { useState } from "react";

function APICredentialsMethod() {
  const [controller] = useMaterialUIController();
  const [followsMe, setFollowsMe] = useState(false);

  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          API Security keys
        </MDTypography>
      </MDBox>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="regular">
          These keys will allow you to authenticate API requests.
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDBox alt="master card" width="10%" mr={2} />
              <MDTypography variant="h6" fontWeight="medium"></MDTypography>

              <MDTypography variant="h6" fontWeight="small">
                <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
                Reveal your key
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default APICredentialsMethod;
