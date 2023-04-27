// @mui material components
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Blinkly VC API (V 1.0.0) components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Blinkly VC API (V 1.0.0) example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/users/data/authorsTableData";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";
import Adduser from "layouts/users/add";

function Tables() {
  const { columns, rows } = authorsTableData();
  const [showUserFlag, setShowUserFlag] = useState(false);
  const adduser = () => {
    setShowUserFlag(!showUserFlag);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium" />
        <MDButton variant="gradient" color="info" onClick={adduser}>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new user
        </MDButton>
      </MDBox>

      {!showUserFlag && (
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    All users
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted
                    entriesPerPage
                    showTotalEntries
                    // noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      )}

      {showUserFlag && (
        <MDBox pt={2} px={2}>
          <Adduser />
        </MDBox>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
