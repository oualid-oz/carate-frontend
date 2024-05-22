import { Typography } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Helmet>Home</Helmet>
      <div
        style={{ minHeight: "calc(100vh - 193px)" }}
        className="flex justify-center items-center"
      >
        <div className="text-center">
          <Typography.Title className="text-white text-3xl">Home</Typography.Title>
          <Typography.Paragraph>Welcome to the home page</Typography.Paragraph>
          <Typography.Paragraph>
            <Link to="/about">About</Link>
          </Typography.Paragraph>
        </div>
      </div>
    </>
  );
}

export default Home;
