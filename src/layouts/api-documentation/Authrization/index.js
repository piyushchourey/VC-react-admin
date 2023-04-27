// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import { useState } from "react";

function AuthorizationMethod() {
  const [controller] = useMaterialUIController();
  const [followsMe, setFollowsMe] = useState(false);

  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Authorization
        </MDTypography>
      </MDBox>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="regular">
          If authentication is enable in the blickly VC configuartion, You will need to supply an
          access token in <b>X-Access-Token</b> header.
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
            />
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default AuthorizationMethod;
