import React from "react";
import { Navbar, Nav, NavLink, NavItem, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserView, MobileView } from 'react-device-detect';

var navStyle = {
    backgroundColor: "#D7D9D8",
    border: "none"
};

var navOptionsStyle = {
    marginLeft: "3vw",
    color: "black"
};

var dropdownStyle = {
    backgroundColor: "#D7D9D8"
};

export class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.onMouseOverDropdown = this.onMouseOverDropdown.bind(this);
        this.onMouseLeaveDropdown = this.onMouseLeaveDropdown.bind(this);

        this.state = {
            isOpen: false,
            isOpenDropdown: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    dropdownToggle() {
        this.setState({
            isDropdownOpen: !this.state.isOpenDropdown
        });
    }

    onMouseOverDropdown() {
        this.setState({isOpenDropdown: true});
    }

    onMouseLeaveDropdown() {
        this.setState({isOpenDropdown: false});
    }

    divorceOnClick() {
        window.location ="/divorce/questionnaire";
    }

    render() {
        return (
            <Navbar className="app-navbar" expand="sm" light style={navStyle}>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar >
                    <Nav className="ms-auto" navbar style={navOptionsStyle}>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <BrowserView>
                            <Dropdown nav inNavbar onMouseOver={this.onMouseOverDropdown} onMouseLeave={this.onMouseLeaveDropdown} isOpen={this.state.isOpenDropdown} toggle={this.dropdownToggle} onClick={this.divorceOnClick}>
                                <DropdownToggle nav>
                                    Divorce
                                </DropdownToggle>
                                <DropdownMenu end style={dropdownStyle}>
                                    <DropdownItem href="/divorce/resources">
                                        Resources
                                    </DropdownItem>
                                    <DropdownItem href="/divorce/member-stories">
                                        Member Stories
                                    </DropdownItem>
                                    <DropdownItem href="/divorce/questionnaire">
                                        Questionnaire
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </BrowserView>
                        <MobileView>
                            <Dropdown nav inNavbar onMouseOver={this.onMouseOverDropdown} onMouseLeave={this.onMouseLeaveDropdown} isOpen={this.state.isOpenDropdown} toggle={this.dropdownToggle}>
                                <DropdownToggle nav>
                                    Divorce
                                </DropdownToggle>
                                <DropdownMenu end style={dropdownStyle}>
                                    <DropdownItem href="/divorce/resources">
                                        Resources
                                    </DropdownItem>
                                    <DropdownItem href="/divorce/member-stories">
                                        Member Stories
                                    </DropdownItem>
                                    <DropdownItem href="/divorce/questionnaire">
                                        Questionnaire
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </MobileView>
                        
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}