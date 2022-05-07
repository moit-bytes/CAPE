import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";
export const NewsFeed = () => {
  localStorage.clear();
  localStorage.setItem("show", false);
  const [newsList, updateNewsList] = useState([]);
  const API_KEY = "8f0685909d714266bf27b55c4d63f257";

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=" +
        API_KEY
    )
      .then((data) => data.json())
      .then((data) => {
        updateNewsList(data);
      });
  });
  

  return (
    <div>
      <h1 className="display-4 text-center">NewsFeed</h1>
      <div className="row conatiner m-5">
      {newsList.length === 0 ? "No Contests to Display" : (
        Array.from(newsList['articles']).map((item, index)=>{
          return <NewsItem key={index} news={item}/>
        })
      )}
      </div>
    </div>
  );
};
