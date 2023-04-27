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
import APICredentials from "layouts/credentials/APICredentials";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <APICredentials />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
