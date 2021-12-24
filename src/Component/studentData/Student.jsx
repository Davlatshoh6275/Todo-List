import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class Student extends Component {

  state = {
    bool: false,
  }

  openModal = () => {
    const { bool } = this.state
    console.log("salom");
    console.log(bool);

    this.setState({
      bool: !bool
    })
  }


  render() {
    return (
      <div>
        <div>
          <Button
            color="danger"
            onClick={this.openModal}
          >
            Click Me
          </Button>
          <Modal isOpen={this.state.bool} toggle={this.openModal}>
            <ModalHeader
              charCode="Y"
              toggle={this.openModal}
            >
              Modal title
            </ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={function noRefCheck() { }}
              >
                Do Something
              </Button>
              {' '}
              <Button onClick={this.openModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <DropdownButton id="dropdown-basic-button">
                                <Dropdown.Item href="#/action-1">open</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">pending</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">inprog</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">complete</Dropdown.Item>
                            </DropdownButton>

      </div>

    )
  }
}
