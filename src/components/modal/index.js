import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import './modal.css';

const Modal = props => {
  return (
    <Dialog open={props.open} onClose={props.handleClose} className="modal-dialog">
      <div className="modal-content">
        <DialogTitle className="modal-header">Contact Us</DialogTitle>
        <div className="modal-body">
          <div>
            <div className="form-label">Contact Type</div>
            <select className="form-component">
              <option default>Choose</option>
              <option value="1000">Contact Type 1</option>
              <option value="1001">Contact Type 2</option>
              <option value="1002">Contact Type 3</option>
            </select>
          </div>
          <div>
            <div className="form-label">Type Message</div>
            <textarea className="form-component" placeholder="Message">
            </textarea>
          </div>
        </div>
        <DialogActions className="modal-footer">
          <Button 
            variant="contained" 
            className="clear"
            onClick={props.handleClose}
          >            
            Cancel
          </Button>
          <Button 
            variant="contained" 
            className="primary"
            onClick={props.handleClose}
          >            
            Send
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default Modal;