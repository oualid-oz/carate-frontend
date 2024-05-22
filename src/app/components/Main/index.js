import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Show from "../../components/Show";

const { Header, Content, Footer } = Layout;

function newPath(path, value) {
  let myPath = path.slice(0, path.indexOf(value) + 1);
  myPath = myPath.join("/").toLowerCase();
  return myPath;
}

function MainLayout() {
  const location = useLocation();
  const [path, setPath] = useState([]);
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const [key, setKey] = useState("");

  React.useEffect(() => {
    let slicePath = location.pathname.split("/");
    slicePath.length === 1 ? setKey("/home") : setKey(slicePath[1]);
    slicePath.length !== 0 && slicePath.shift();
    slicePath = slicePath.map(
      (value) => value.charAt(0).toUpperCase() + value.slice(1)
    );
    setPath(slicePath);
  }, [location]);
  return (
    <Layout>
      <Header className="flex justify-between">
        <Link to="/">
          <div className="text-white font-bold">CARLIFE</div>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          className="w-100 justify-end"
          selectedKeys={key}
        >
          <Menu.Item key={"/home"} icon={<HomeOutlined />}>
            <Link to=".">Home</Link>
          </Menu.Item>
          <Show if={isAuthenticated}>
            <Menu.Item key={"/car"} icon={<AppstoreOutlined />}>
              <Link to="/car">My cars</Link>
            </Menu.Item>
          </Show>
          <Menu.Item key={"/about"} icon={<InfoCircleOutlined />}>
            <Link to="/about">About Us</Link>
          </Menu.Item>

          <Menu.SubMenu
            title="Profile"
            icon={<Avatar icon={<ProfileOutlined />} />}
          >
            <Show if={isAuthenticated}>
              <Menu.Item key={"/me"} icon={<UserOutlined />}>
                <Link to="/me">Account</Link>
              </Menu.Item>
              <Menu.Item key={"/logout"} icon={<LogoutOutlined />}>
                <Link to="/logout">Log Out</Link>
              </Menu.Item>
            </Show>
            <Show if={!isAuthenticated}>
              <Menu.Item key={"/login"} icon={<LoginOutlined />}>
                <Link to="/login">Log In</Link>
              </Menu.Item>
              <Menu.Item key={"/signup"}>
                <Link to="/signup">Sign Up</Link>
              </Menu.Item>
            </Show>
          </Menu.SubMenu>
        </Menu>
      </Header>
      <Layout className="bg-slate-800">
        <Content style={{ padding: "0 50px" }}>
          <div className="dark:bg-slate-800">
            <div className="">
              <Breadcrumb style={{ margin: "16px 0" }}>
                {path.map((value) => (
                  <Breadcrumb.Item key={value} className="text-white">
                    <Link
                      to={newPath(path, value)}
                      className="text-decoration-none text-white"
                    >
                      {value}
                    </Link>
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </div>
            <Layout className="bg-transparent">
              <Outlet />
            </Layout>
          </div>
        </Content>
        <Footer className="text-center text-white bg-transparent">
          CARLIFE ©2024 Created by OOUZANIK
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
