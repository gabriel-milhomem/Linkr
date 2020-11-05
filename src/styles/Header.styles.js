import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Colors from '../utils/Colors';
import media from  '../styles/media';

export const HeaderContainer = styled.header`
    z-index: 1;
	width: 100%;
    background: ${Colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem;
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfilePhoto = styled.img`
    width: 3.3125rem;
    height: 3.3125rem;
    border-radius: 100%;
    margin-left: 0.5rem;
    cursor: pointer;
`;

export const Logo = styled.h1`
    font-family: 'Passion One', cursive;
    line-height: 54px;
    color: ${Colors.white};
    font-size: 3.2rem;
    margin-left: 1rem;
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${Colors.black};
    width: 9.375rem;
    padding: 0.5rem;
    border-bottom-left-radius: 1rem;
    position: fixed;
    top: 5rem;
    right: 0;
`;

export const NavLink = styled(Link)`
    font-family: 'Lato', sans-serif;
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: 0.05rem;
    color: ${Colors.white};
`;