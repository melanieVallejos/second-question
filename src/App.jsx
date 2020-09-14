import React from 'react';
import CustomModal from './CustomModal';
import Button from  'react-bootstrap/Button'
import './App.css';

class App extends React.Component {
  state = {
    show: false
  }
  header = 'Default title.';
  body = 'Default body content.';
  footer= 'Default footer message.';
  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }
  informativeModal = () => {
    this.showModal();
    this.header= this.infoModalContent.header;
    this.body = this.infoModalContent.body;
    this.footer = this.infoModalContent.footer;
  }
  reminderModal = () => {
    this.showModal();
    this.header= this.reminderModalContent.header;
    this.body = this.reminderModalContent.body;
    this.footer = this.reminderModalContent.footer;
    this.buttonText = this.reminderModalContent.buttonText;
  }

  infoModalContent = {
    header: 'Customized News',
    body: `Explore today's events on your feed`,
    footer: <p className="font-weight-lighter"><small>Haystack TV 2020</small></p>,
  }

  reminderModalContent = {
    header: 'This is a modal to remind you something',
    body: `Later tonight, watch comet NEOWISE special coverage`,
    buttonText: 'Got It!'
  }
  
  render() {
    return (
      <>
        <div className="justify-content-md-center">
        <Button variant="outline-info" onClick={this.informativeModal}>Open Informative Modal</Button>
        <Button variant="outline-primary" onClick={this.reminderModal}>Open Reminder Modal</Button>
        <CustomModal 
          show={this.state.show}
          handleClose={this.hideModal} 
          header={this.header}
          body={this.body}
          footer={this.footer}
        >
        </CustomModal>
        </div>
      </>
    );
  }
}

export default App;