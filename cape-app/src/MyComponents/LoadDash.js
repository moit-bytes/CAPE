import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Accepted', 'Wrong Answer', 'TLE'],
    datasets: [
      {
        label: '# of Votes',
        data: [120, 30, 20],
        backgroundColor: [
          'rgba(50, 141, 8, 0.5)',
          'rgba(236, 37, 8, 0.5)',
          'rgba(210, 197, 8, 0.5)'
        ],
        borderColor: [
          'rgba(50, 141, 8, 1)',
          'rgba(236, 37, 8, 1)',
          'rgba(210, 197, 8, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };


  export const Statdata = {
    labels: ['No. of solved', 'No. of unsolved'],
    datasets: [
      {
        label: '# of Votes',
        data: [120, 30],
        backgroundColor: [
          'rgba(50, 225, 225, 0.8)',
          'rgba(200, 100, 8, 0.8)',
        ],
        borderColor: [
          'rgba(50, 225, 8, 1)',
          'rgba(200, 100, 8, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

export const LoadDash = () => 
{

  let username = localStorage.getItem("username");   
  let name = localStorage.getItem("name");   
  let email = localStorage.getItem("email");   
  let clgName = localStorage.getItem("clgName");   
  let codechef = localStorage.getItem("codechef");   
  let codeforces = localStorage.getItem("codeforces");
  let github = localStorage.getItem("github");
  let profile_forces = "https://codeforces.com/profile/" + codeforces;
  let profile_chef = "https://www.codechef.com/users/" + codechef;
  let profile_github = "https://github.com/" + github;
  let occupation = "Student";
  let pic =  "https://cdn.codechef.com/sites/all/themes/abessive/images/user_default_thumb.jpg";

  return (
    <div class="row mt-3">
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title display-6">Your Profile</h5>
        <p class="card-text"><b>Name:</b> {name}</p>
        <p class="card-text"><b>Occupation:</b> {occupation}</p>
        <p class="card-text"><b>Username:</b> {username}</p>
        <p class="card-text"><b>Email: </b>{email}</p>
        <p class="card-text"><b>College Name: </b> {clgName}</p>
        <p class="card-text"><b>Codeforces Profile: </b><a href={profile_forces} target="_blank">{profile_forces}</a></p>
        <p class="card-text"><b>CodeChef Profile: </b><a href={profile_chef} target="_blank">{profile_chef}</a></p>
        <p class="card-text"><b>Github Profile: </b><a href={profile_github} target="_blank">{profile_github}</a></p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <Pie data={data} />;
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <Pie data={Statdata} />;
      </div>
    </div>
  </div>
</div>


  )
}
