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
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";


function Dashboard() {
return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>

      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
