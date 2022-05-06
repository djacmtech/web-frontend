import React, { useState, useEffect } from "react";
import { Card, CardContent, Divider, Grid, TextField } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import "./InternshipFair.css";
import { useNavigate } from "react-router-dom";
const StudentCart = () => {

  const [items, setItems] = useState([
    [{ company_name: "hi", role: "hi", price: 50 }],
  ]);
  const [price, setPrice] = useState([
    [{ total_items: 4, total_price: 50, grand_total: 500}],
  ]);
const token = localStorage.getItem('token')
  const deleteInternship = (id) => {
var FormData = require('form-data');
var data = new FormData();
data.append('job', `${id}`);

var config = {
  method: 'delete',
  url: 'https://djacmdev.pythonanywhere.com//if/cart',
  headers: { 
    'Authorization': `Token ${token}`
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(response)
})
.catch(function (error) {
  console.log(error);
});

  }

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
      setPrice(response.data.cart ? response.data.cart : null)
    });
  }, [items]);

  // const CssTextField = styled(TextField)({
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": {
  //       borderColor: "white",
  //     },
  //     "&:hover fieldset": {
  //       borderColor: "white",
  //     },
  //     "&:active fieldset": {
  //       borderColor: "white",
  //       color: "white",
  //     },
  //   },
  // });

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(document.getElementById("screenshot").value)
    var data = new FormData();
    data.append('payment_ss', document.getElementById("screenshot").value);

    var config = {
      method: 'post',
      url: 'https://djacmdev.pythonanywhere.com/if/upload_ss',
      headers: { 
        'Authorization': `Token ${localStorage.getItem('token')}`
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      console.log(response.data['detail']);
      Swal.fire({
        icon: 'success',
        title: response.data['detail'],
        footer: `<a href="/dashboard"> Dashboard </a>`
      })
    })
    .catch(function (error) {
      console.log(error);
    });

  }

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
                <Card sx={{margin:'2%'}}>
                  <CardContent>

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
                      {x.job_role}
                    </span>
                    <div style={{ color: "grey" }}>{x.company_name}</div>
                    <Grid container sx={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>

                    <span style={{ color: "grey", float: "right" }}>
                      {x.price}
                    </span>
                    <span style={{color:'red', cursor:'pointer'}} onClick={() => deleteInternship(x.job)}><DeleteIcon/></span>
                    </Grid>
                  </Grid>
                </Grid>
                  </CardContent>
                </Card>
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
            Interviews <span style={{ float: "right" }}>{price.total_items}</span>
          </p>
          <p style={{ fontWeight: "600" }}>
            Total <span style={{ float: "right" }}>{price.total_price}</span>
          </p>
          <Divider />
          <p style={{ fontWeight: "600" }}>
            Grand Total <span style={{ float: "right" }}>{price.grand_total}</span>
          </p>
          <p style={{ fontSize: ".8rem" }}>
            Note:
            <br />
            Please pay the above amount through gpay to
            <br />
            <b> UPID: 34235346536</b>
          </p>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="icon-button-file" className="screenshot">
              Screenshot : &nbsp;
              <TextField type="url" id="screenshot" size="small" placeholder="Link" />
            </label>
            <br />
            <p> Once you book the interviews you won't be able to sit for more, do you want to proceed? </p>
            <center>
              <Button
                variant="contained"
                color="error"
                sx={{
                  padding: "3% 8%",
                  marginInline: '4%',
                  ":hover": {
                    opacity: "50%",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2D3748",
                  marginInline: '4%',
                  padding: "3% 8%",
                  ":hover": {
                    opacity: "50%",
                    backgroundColor: "#2D3748",
                  },
                }}
                type="submit"
              >
                Submit
              </Button>
            </center>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentCart;
