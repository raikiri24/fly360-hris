import React from 'react';
import Modal from 'react-modal';
import { useLogin } from '../../context/LoginContext';
import moment from 'moment';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');
const WebBundy = ({ isWebBundyOpen = false }) => {
  const { handleCloseWebBundy } = useLogin();
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [time, setTime] = React.useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

  React.useEffect(() => {
    const interval = setInterval(() => setTime(moment().format('MMMM Do YYYY, h:mm:ss a')), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  React.useEffect(() => {
    setIsOpen(isWebBundyOpen);
    console.log('>>');
  }, [isWebBundyOpen]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleCloseWebBundy}
        style={customStyles}
        contentLabel="Example Modal">
        <button onClick={() => handleCloseWebBundy()} className="absolute top-0 right-2">
          X
        </button>
        <div className="text-2xl text-center">
          <span> Web Bundy</span>
        </div>
        <div>{time}</div>
        <form>
          <button className="p-5 bg-slate-600 rounded-full text-white">PUNCH IN</button>
          <button className="p-5 bg-slate-600 rounded-full text-white">PUNCH OUT</button>
        </form>
      </Modal>
    </div>
  );
};

export default WebBundy;
