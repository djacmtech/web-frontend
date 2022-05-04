import React, { useState, useEffect } from "react";
import { Divider, Grid, TextField } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Button } from "@mui/material";
import axios from "axios";
// import { Input } from '@mui/material';
import "./InternshipFair.css";
const StudentCart = () => {
  const Input = styled("input")({
    display: "none",
  });
  const [items, setItems] = useState([
    [{ company_name: "hi", role: "hi", price: 50 }],
  ]);

  const data = [
    {
      company_name: "company name",
      role: "internship role",
      price: "50",
    },
    {
      company_name: "company name",
      role: "internship role",
      price: "50",
    },
    {
      company_name: "company name",
      role: "internship role",
      price: "50",
    },
  ];

  let headersList = {
    Accept: "*/*",
    // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Authorization: `Token ${localStorage.getItem("token")}`,
  };

  let reqOptions = {
    url: "https://djacmdev.pythonanywhere.com//if/cart",
    method: "GET",
    headers: headersList,
  };

  useEffect(() => {
    axios.request(reqOptions).then(function (response) {
      setItems(response.data.cart_items ? response.data.cart_items : data);
    });
  }, []);

  const CssTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&:active fieldset": {
        borderColor: "white",
        color: "white",
      },
    },
  });

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        fontFamily: "Poppins",
        padding: "3% 3% 3% 9%",
        height: "100vh",
      }}
    >
      <Grid container spacing={4} style={{ padding: "5%" }}>
        <Grid item sm={8} xs={12} className="resCart">
          <p style={{ fontSize: "1.5rem" }}>IF Cart</p>
          <Divider></Divider>
          <div style={{ padding: "2% 6%" }} className="resCartdiv">
            <span style={{ color: "grey" }}>IF Interview list</span>
            <span style={{ color: "grey", float: "right" }}>Price</span>
            {items.map((x) => {
              return (
                <Grid container spacing={0}>
                  <Grid item xs={2}>
                    <SquareIcon style={{ fontSize: "7rem" }} />
                  </Grid>
                  <Grid item xs={8} style={{ transform: "translateY(30px)" }}>
                    <span
                      style={{
                        color: "#187271",
                        fontWeight: "700",
                        padding: "20px 0",
                      }}
                    >
                      {x.company_name}
                    </span>
                    <br />
                    <span style={{ color: "grey" }}>{x.role}</span>
                    <span style={{ color: "grey", float: "right" }}>
                      {x.price}
                    </span>
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </Grid>
        <Grid
          item
          sm={4}
          xs
          style={{ backgroundColor: "#187271", color: "white", padding: "2%" }}
        >
          <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>Summary</p>
          <Divider />
          <p style={{ fontWeight: "600" }}>
            Interviews <span style={{ float: "right" }}>50</span>
          </p>
          <p style={{ fontWeight: "600" }}>
            Total <span style={{ float: "right" }}>50</span>
          </p>
          <Divider />
          <p style={{ fontWeight: "600" }}>
            Grand Total <span style={{ float: "right" }}>50</span>
          </p>
          <p style={{ fontSize: ".8rem" }}>
            Note:
            <br />
            Please pay the above amount through gpay to
            <br />
            <b> UPID: 34235346536</b>
          </p>
          <br />
          <label htmlFor="icon-button-file" className="screenshot">
            Screenshot : &nbsp;
            <CssTextField type="text" sx={{color:'white'}} size="small" placeholder="Link" />
          </label>
          <br />
          <center>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2D3748",
                padding: "3% 32%",
                ":hover": {
                  opacity: "50%",
                  backgroundColor: "#2D3748",
                },
              }}
            >
              Submit
            </Button>
          </center>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentCart;
