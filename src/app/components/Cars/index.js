import {
  CarOutlined,
  DashboardOutlined,
  EyeOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Affix, Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function CarLayout() {
  const location = useLocation();
  const allPath = location.pathname.split("/");
  const key = allPath[allPath.length - 1];
  return (
    <div>
      <Layout>
        <Affix offsetTop={0}>
          <Menu
          theme="dark"
            mode="horizontal"
            className="flex justify-center"
            selectedKeys={key}
          >
            <Menu.Item icon={<DashboardOutlined />} key="car">
              <Link to=".">Dashboard</Link>
            </Menu.Item>
            <Menu.Item icon={<CarOutlined />} key="cars">
              <Link to="cars">My cars</Link>
            </Menu.Item>
            <Menu.Item icon={<EyeOutlined />} key="reviews">
              <Link to="reviews">Reviews</Link>
            </Menu.Item>
            <Menu.Item icon={<SwapOutlined />} key="incomes">
              <Link to="incomes">Incomes</Link>
            </Menu.Item>
          </Menu>
        </Affix>
      </Layout>
      <Layout className="container p-4 bg-transparent text-white">
        <Outlet />
      </Layout>
    </div>
  );
}

export default CarLayout;
