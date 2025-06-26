import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import { getMenu } from "../apis/menu";
import { Breadcrumb, Layout, Menu, theme, type MenuProps } from "antd";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

function transformMenuToAnt(data: any[], navigate: any) {
  return data.map((item) => ({
    key: item.path,
    icon: item.icon
      ? React.createElement(iconMap[item.icon] || UserOutlined)
      : null,
    label: item.title,
    onClick: () => navigate(item.path),
    children: item.children?.map((c: any) => ({
      key: c.id,
      label: c.title,
    })),
  }));
}

const iconMap: Record<string, any> = {
  dashboard: DashboardOutlined,
  user: UserOutlined,
};

function MainLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<MenuProps["items"]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      await getMenu().then(setMenuItems).catch(console.error);
      console.log("Menu items fetched:", menuItems);
    };
    fetchMenu();
  }, []);

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={transformMenuToAnt(menuItems || [], navigate)}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
