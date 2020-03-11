import React from 'react';
import { Button} from "antd";
import { PoweroffOutlined } from '@ant-design/icons';
import { MenuFoldOutlined  } from '@ant-design/icons';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import cristLogo from "../../../assets/img/png/kreator.png";

import "./MenuTop.scss";

const MenuTop = (props) => {
  const {menuCollapsed, setMenuCollapsed} = props;
    return (
      <div className="menu-top">
        <div className="menu-top__left">
          <img
            className="menu-top__left-logo"
            src={cristLogo}
            alt="Cristian Sepúlveda"
          />
         <Button type="link" icon={menuCollapsed ? <MenuFoldOutlined/> : <MenuUnfoldOutlined />} onClick={()=> setMenuCollapsed(!menuCollapsed)}></Button>
        </div>
        <div className="menu-top__right">
          <Button type="link" icon={<PoweroffOutlined/>} onClick={()=> console.log("Desconeccion")}></Button>
        </div>
      </div>
    );
};

export default MenuTop;