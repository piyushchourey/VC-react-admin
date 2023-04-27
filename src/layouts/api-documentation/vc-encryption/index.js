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
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDAlert from "components/MDAlert";
import DataTable from "examples/Tables/DataTable";

function VCEncryptionAPIMethod() {
  const [controller] = useMaterialUIController();
  const [followsMe, setFollowsMe] = useState(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <MDAlert color="info">
            <MDTypography variant="h6" fontWeight="small" color="white">
              Request URL - Base_URL/v2/vc
            </MDTypography>
          </MDAlert>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card id="delete-account">
                <MDBox
                  pt={2}
                  px={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <MDTypography variant="h6" fontWeight="medium">
                    Visual Encryption API
                  </MDTypography>
                </MDBox>
                <MDBox
                  pt={2}
                  px={2}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <MDTypography variant="h6" fontWeight="regular">
                    Visual cryptography is a cryptographic technique which allows visual information
                    (pdf) to be encrypted in such a way that the decrypted information appears as a
                    visual mp4 video.
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
                      <MDTypography variant="h6" fontWeight="medium">
                        Request URL - /v2/vc
                      </MDTypography>
                      <MDTypography variant="h6" fontWeight="medium">
                        Request Method - Post
                      </MDTypography>
                      <MDTypography variant="h6" fontWeight="medium">
                        Authorization - X-Access-Token: "paste your token here.."
                      </MDTypography>
                      <MDTypography variant="h6" fontWeight="medium">
                        Payload - filelist (Number of pdf file as binary mode) <br />
                      </MDTypography>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default VCEncryptionAPIMethod;
