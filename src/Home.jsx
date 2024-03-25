import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Ini adalah Homepage</div>
      <div onClick={() => navigate("/nowplaying")}>Now Playing</div>
    </div>
  );
}
