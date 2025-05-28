import React from "react";
import Project from "../components/Project";
export default function Portfolio() {
  return (
    <div id="clearFont">
      <h1>Portfolio</h1>
      <div id="nav-page-container">
        <Project image="filmbound.png" link="https://filmbound.onrender.com/" />
        <Project image="KanbanBoardTicketApp.png" link="https://kanbanboardjwtapp.onrender.com/" />
        <Project image="weatherForecast.png" link="https://weather-forecast-api-caller.onrender.com/" />
        <Project image="Mood_Playlist_Generator.png" link="https://aelias-thepacer.github.io/mood_playlist_generator/" />
      </div>
    </div>
  );
}
