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
        <SubMenu key="sub1" icon={<UserOutlined />} title="Population">
          <p className="advanced-search-option-title">Choose City Size</p>
          <RadioButtons
            buttonNames={[
              "Small | <500K",
              "Medium | 500K - 1M",
              "Large | 1M - 2M",
              "Mega | 2M+"
            ]}
            rowFormat={false}
          />
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Weather">
          <p className="advanced-search-option-title">
            Filter By Average Summer Temperature
          </p>
          <RadioButtons
            buttonNames={["Cold", "Mild", "Hot"]}
            rowFormat={true}
          />
          <p className="advanced-search-option-title">
            Filter By Average UV Index (0-10)
          </p>
          <GraduatedSlider
            min={0}
            max={10}
            defaultValue={[0, 10]}
            marks={{
              0: "0",
              10: "10"
            }}
            step={0.1}
          />
          <p className="advanced-search-option-title">
            Filter By Average Cloud Cover (%)
          </p>
          <GraduatedSlider
            min={0}
            max={100}
            defaultValue={[0, 100]}
            marks={{
              0: "0",
              100: "100"
            }}
            step={1.0}
          />
        </SubMenu>
        <SubMenu
          key="sub3"
          icon={<SettingOutlined />}
          title="Job Industry"
        ></SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Housing">
          <p className="advanced-search-option-title">
            Filter By Average 1BR Home Prices
          </p>
          <GraduatedSlider
            min={0}
            max={100}
            defaultValue={[0, 100]}
            marks={{
              0: "0",
              100: "100"
            }}
            step={1.0}
          />
        </SubMenu>
        <SubMenu
          key="sub5"
          icon={<SettingOutlined />}
          title="COVID-19"
        ></SubMenu>
      </Menu>
    );
  }
}

export default AdvancedSearchMenu;
