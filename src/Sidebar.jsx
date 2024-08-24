import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SidebarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #444;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h3>Components</h3>
      <SidebarLink to="/animated-shape">Animated Shape</SidebarLink>
      <SidebarLink to="/bouncing-ball">Bouncing Ball</SidebarLink>
      <SidebarLink to="/bouncing-balls">Bouncing Balls</SidebarLink>
      <SidebarLink to="/bubble">Bubble</SidebarLink>
      <SidebarLink to="/css-doodle">CSS Doodle</SidebarLink>
      <SidebarLink to="/cube-wave">Cube Wave</SidebarLink>
      <SidebarLink to="/eyes-animation">Eyes Animation</SidebarLink>
      <SidebarLink to="/floating-label">Floating Label</SidebarLink>
      <SidebarLink to="/infinity-animation">Infinity Animation</SidebarLink>
      <SidebarLink to="/loader">Loader</SidebarLink>
      <SidebarLink to="/loading1-animation">Loading 1 Animation</SidebarLink>
      <SidebarLink to="/loading2-animation">Loading 2 Animation</SidebarLink>
      <SidebarLink to="/loading-animation">Loading Animation</SidebarLink>
      <SidebarLink to="/peek-loading">Peek Loading</SidebarLink>
      <SidebarLink to="/radio-group">Radio Group</SidebarLink>
      <SidebarLink to="/rain">Rain</SidebarLink>
      <SidebarLink to="/rotating-clover">Rotating Clover</SidebarLink>
      <SidebarLink to="/shopping-cart">Shopping Cart</SidebarLink>
      <SidebarLink to="/starburst">Starburst</SidebarLink>
      <SidebarLink to="/waveform">Waveform</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
