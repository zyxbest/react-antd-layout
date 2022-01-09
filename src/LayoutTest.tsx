import { SettingOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Dropdown, Layout, Menu, Row, Switch } from "antd";
import { useState } from "react";
import "../public/layout.css";

const { Sider, Content, Header } = Layout;
export default () => {
  const [visible, setVisible] = useState(false);
  const menu = (
    <Menu theme="dark">
      <Menu.Item key="1" onClick={() => console.log("logout")}>
        <Button type="link">退出登录</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout style={{ background: "#fff" }}>
      <Header>
        <Row justify="space-between">
          <Col span="12">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Col>
          <Col span="3">
            <Dropdown overlay={menu}>
              <Button disabled icon={<SettingOutlined />} type="link">
                k2001231
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider>
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={() => setVisible(false)}
            visible={visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
          <Menu theme="dark" mode="vertical" defaultSelectedKeys={["2"]}>
            <Menu.Item onClick={() => setVisible(true)} key="1">
              手动调整
            </Menu.Item>
            <Menu.Item key="2">
              {/* <Switch /> */}
              切换所有
            </Menu.Item>
            <Menu.Item key="3">切换未分享过的</Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <div style={{ height: "430px" }}></div>
        </Content>
      </Layout>
    </Layout>
  );
};
