import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridApi, GridCellValue } from "@mui/x-data-grid";
import emailjs from '@emailjs/browser';

export const Contests = () => {
  localStorage.clear();
  localStorage.setItem("show", false);
  const [contestList, updateContestList] = useState([]);

  function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
      return true;
    } else {
      alert("Please enter a valid email");
      return false;
    }
  }
  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then((data) => data.json())
      .then((data) => {
        updateContestList(data);
      });
  });

  //  console.log(contestList[0]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Contest Name", width: 220 },
    { field: "host", headerName: "Platform Name", width: 100 },
    { field: "start", headerName: "Start Date & Time", width: 200 },
    { field: "end", headerName: "End Date & Time", width: 200 },
    {
      field: "url",
      headerName: "Contest URL",
      sortable: false,
      width: 180,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          return window.open(thisRow["url"], "_blank").focus();
        };

        return (
          <Button variant="outlined" onClick={onClick}>
            Access Contest
          </Button>
        );
      },
    },
    {
      field: "action",
      headerName: "Notification",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          let email = prompt(
            "Please enter your email to receive the notification."
          );
          if (ValidateEmail(email)) {
            alert(
              "Your Email is registered successfully with us! Check your inbox!!"
            );
            var templateParams = {
              name: thisRow['name'],
              platform_name: thisRow['host'],
              std: thisRow['start'],
              etd: thisRow['end'],
              url: thisRow['url'],
              send_email: email
          };
           
          emailjs.send('service_o2o045j', 'template_a15zhy9', templateParams, '5EciSeHxA78Pf9cCI')
              .then(function(response) {
                 console.log('SUCCESS!', response.status, response.text);
              }, function(error) {
                 console.log('FAILED...', error);
              });  
            
            };
        };

        return (
          <Button variant="contained" color="success" onClick={onClick}>
            Subscribe
          </Button>
        );
      },
    },
  ];

  if (contestList.length !== 0) {
    for (var i = 0; i < contestList.length; i++) {
      var obj = contestList[i];
      var dt = obj.start_time.toString().split("T");
      var st = dt[0] + " || " + dt[1].substring(0, 5);

      var dt2 = obj.end_time.toString().split("T");
      var et = dt2[0] + " || " + dt2[1].substring(0, 5);
      var li = {
        id: i + 1,
        name: obj.name,
        host: obj.site,
        start: st,
        end: et,
        url: obj.url,
      };

      contestList[i] = li;
    }

    //console.log(contestList);
  }

  return (
    <div className="container">
      <h1 className="display-4 text-center">Contests</h1>
      {contestList.length === 0 ? (
        "No Contests to Display"
      ) : (
        <DataGrid
          style={{
            height: "80vh",
            width: "100%",
            marginTop: "10vh",
            background: "white",
            padding: "10px",
            borderRadius: "20px",
          }}
          rows={contestList}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
        />
      )}
    </div>
  );
};
