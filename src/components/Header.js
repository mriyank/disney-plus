import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg"></Logo>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg"></img>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"></img>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"></img>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src=" https://yt3.ggpht.com/yti/ANoDKi4EaXUG4ef67aT3QpkYbLIPdhzHdj8hGWzcTOnudw=s88-c-k-c0x00ffffff-no-rj-mo"></UserImg>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  cursor: pointer;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 1;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }
    &: hover {
      span: after {
        transform: scaleX(1);
        opacity: 1;
        -webkit-transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
