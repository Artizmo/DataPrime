import React from 'react';
import Category from './Category';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import Modal from './components/modal';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleContactUsClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='l-app'>
      <section className="l-app-header">
        <div className="l-app-header__section breadcrumbs">
          Dashboard / Opportunity
        </div>
        <div className="l-app-header__section title">
          <div className="action">
            Edit
          </div>
          GENENTECH - Manufacturing Data Scientist
        </div>
        <div className="l-app-header__section">
          <div className="l-section__toolbar">
            <Button 
              variant="contained" 
              className="default wide"
              startIcon={<PersonIcon className="default" />}
            >            
              Aditya Agrawal
            </Button>
            <Button 
              onClick={(e) => handleContactUsClick(e)}
              variant="contained" 
              className="primary"
            >            
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <section className="l-app-main">
        <aside />
        <div className="l-app-main__content">
          <Category />
        </div>
      </section>
      <Modal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
