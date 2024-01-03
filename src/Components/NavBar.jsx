import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect  expand="md" className="" >
        <Container>
          <Navbar.Brand href="#home"><img src="" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"white"}} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100 justify-content-center gap-3 ">
              <Nav.Item><Nav.Link href="#features" className="text-white-50"><HomeOutlinedIcon fontSize="small"/> Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="#pricing" className="text-white-50"><PersonOutlineOutlinedIcon fontSize="small"/> About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="#pricing" className="text-white-50"><CodeOutlinedIcon fontSize="small"/> Projects</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="#pricing" className="text-white-50"><DescriptionOutlinedIcon fontSize="small"/> Resume</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="#pricing" className="text-white-50"><NewspaperOutlinedIcon fontSize="small"/> Blog</Nav.Link></Nav.Item>
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
