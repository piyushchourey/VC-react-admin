// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDInput from "components/MDInput";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React context
import MDButton from "components/MDButton";
import { Container } from "@mui/material";
import { useState } from "react";

function AddUserMethod() {
  const useHook = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [bol, setBol] = useState(false);
    const onChange = (evt) => {
      const newvalue = evt.currentTarget.value;
      if (newvalue !== "") {
        setBol(true);
      } else {
        setBol(false);
      }
      setValue(newvalue);
    };
    return {
      value,
      onChange,
      success: bol,
      error: !bol,
    };
  };
  const fName = useHook("");
  const lName = useHook("");
  const email = useHook("");
  const password = useHook("");

  const handelSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      fName: fName.value,
      lName: lName.value,
      email: email.value,
      password: password.value,
    };
    console.log(data);
  };

  return (
    <MDBox py={2} px={2}>
      <Container>
        <Grid item xs={12} md={12}>
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
                Add User
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
              <MDBox component="form" xs={12} onSubmit={handelSubmit}>
                <MDBox mx={2} mt={-3} py={3} px={2}>
                  <MDInput label="First Name..." {...fName} />
                </MDBox>
                <MDBox mx={2} mt={-3} py={3} px={2}>
                  <MDInput type="text" label="Last Name" {...lName} />
                </MDBox>
                <MDBox mx={2} mt={-3} py={3} px={2}>
                  <MDInput type="email" label="Email" {...email} />
                </MDBox>
                <MDBox mx={2} mt={-3} py={3} px={2}>
                  <MDInput type="password" label="Password" {...password} />
                </MDBox>
                <MDBox mx={2} mt={-3} py={3} px={2}>
                  <MDButton type="submit" variant="gradient" color="info">
                    Create an account
                  </MDButton>
                </MDBox>
              </MDBox>
            </MDBox>
          </Card>
        </Grid>
      </Container>
    </MDBox>
  );
}

export default AddUserMethod;
