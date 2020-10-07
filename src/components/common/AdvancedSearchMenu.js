import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";
import DecimalSlider from "./DecimalSlider";
import GraduatedSlider from "./GraduatedSlider";
import RadioButtons from "./RadioButtons";

const { SubMenu } = Menu;

class AdvancedSearchMenu extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5"];

  state = {
    openKeys: []
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        className="advanced-search-menu"
      >
        <SubMenu
          key="sub1"
          icon={<UserOutlined />}
          title="Population"
          className="advanced-search-submenu"
        >
          <p className="advanced-search-option-title">Choose City Size</p>
          <RadioButtons />
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Weather">
          <p className="advanced-search-option-title">
            Choose Average Summer Temperature (°F)
          </p>
          <DecimalSlider min={-20} max={100} />
          <p className="advanced-search-option-title">
            Choose Average UV Index (0-10)
          </p>
          <DecimalSlider min={0} max={10} />
          <p className="advanced-search-option-title">
            Choose Average Cloud Cover (%)
          </p>
          <DecimalSlider min={0} max={100} />
        </SubMenu>
        <SubMenu key="sub3" icon={<SettingOutlined />} title="Job Industry">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Housing">
          <p className="advanced-search-option-title">
            Choose Average 1BR Home Prices
          </p>
          <GraduatedSlider />
        </SubMenu>
        <SubMenu key="sub5" icon={<SettingOutlined />} title="COVID-19">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default AdvancedSearchMenu;
