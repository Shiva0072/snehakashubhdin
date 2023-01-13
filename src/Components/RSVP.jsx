import React, { useState } from "react";
import "./RSVP.css";

export default function RSVP() {
  const [data, setData] = useState({
    Fname: "",
    Lname: "",
    email: "",
  });

  const handleChange = (e) => {
    console.log("jkj :", e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    console.log("my data : ", data);
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify([[data.Fname, data.Lname, data.email]]),
    };

    fetch(
      "https://v1.nocodeapi.com/shivam_072/google_sheets/lCtfvfwSPATpxyNh?tabId=Sheet1",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setData({ Fname: "", Lname: "", email: "" });
  };
  const { Fname, Lname, email } = data;

  return (
    <div className="formContainer">
      <form class="row g-3" onSubmit={(e) => handleSubmit(e)}>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            onChange={(e) => handleChange(e)}
            value={Fname}
            name="Fname"
            placeholder="First Name"
            required
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            onChange={(e) => handleChange(e)}
            value={Lname}
            name="Lname"
            placeholder="Last Name"
            required
          />
        </div>

        <div class="col-12">
          <input
            type="email"
            class="form-control no-border"
            id="inputAddress2"
            placeholder="Phone/Email"
            value={email}
            name="email"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
