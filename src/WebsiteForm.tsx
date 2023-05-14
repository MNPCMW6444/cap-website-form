import React from "react";

import { Grid } from "@mui/material";
import Form from "./Form.js";
import Result from "./Result.js";
import { useState } from "react";

import CaphubThemeProvider from "@caphub-group/theme-provider";

const WebsiteForm = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interest, setInterest] 
  
  
  =
  
  useState(0);
  const [amortization, setAmortization] = useState(0);

  return (
    <CaphubThemeProvider>
  <Grid container direction={{ xs: "column", md: "row" }} spacing={2}>
      <Grid item xs={12} md={6}>
        <Form
          inner
          setLoanAmount={setLoanAmount}
          setInterest={setInterest}
          setAmortization={setAmortization}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Result
          loanAmount={loanAmount}
          interest={interest}
          amortization={amortization}
        />
      </Grid>
    </Grid>
    </CaphubThemeProvider>
  );
};
export default WebsiteForm;
