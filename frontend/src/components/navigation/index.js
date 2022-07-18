import React from "react";
import { Navbar, Nav, NavLink, NavItem, NavbarToggler, Collapse, Dropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

var navStyle = {
    backgroundColor: "#f0f0f0",
    border: "none",
    maxHeight: "60px"
};

var navOptionsStyle = {
    marginLeft: "3vw",
    color: "black"
};

var dropdownStyle = {
    backgroundColor: "#f0f0f0"
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

    render() {
        return (
            <Navbar expand="lg" light style={navStyle}>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar >
                    <Nav className="ms-auto" navbar style={navOptionsStyle}>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
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
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}