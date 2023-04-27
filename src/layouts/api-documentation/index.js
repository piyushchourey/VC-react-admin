/**
=========================================================
* Blinkly VC API (V 1.0.0) - v2.1.0
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Blinkly VC API (V 1.0.0) components
import MDBox from "components/MDBox";

// Blinkly VC API (V 1.0.0) example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import Authrization from "layouts/api-documentation/Authrization";
import MDAlert from "components/MDAlert";
import MDTypography from "components/MDTypography";

function APIDocumetation() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <MDAlert color="info">
            <MDTypography variant="h6" fontWeight="small" color="white">
              Base URL - https://vc.blinkly.com
            </MDTypography>
          </MDAlert>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Authrization />
              <MDAlert color="info" mt={3}>
                <MDTypography variant="h6" fontWeight="small" color="white">
                  X-Access-Token : sdsaedsadsa34ewdsadasd
                </MDTypography>
              </MDAlert>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default APIDocumetation;
