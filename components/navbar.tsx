import styled from "styled-components";
import Link from "next/link";

const Navbar = styled.div`
    display: flex;
    width: 100%;
    padding: 15px;
    background-color: #222;
    position: absolute;
    top: 0;

    @media(max-height: 340px){
        display: none;
    }
`;

const NavLink = styled.a`
    color: white;
    display: flex;
    margin: 10px 28px;
    font-size: 18px;
    font-weight: 700;
`;

export { Navbar, NavLink };