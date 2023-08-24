import React from 'react';
import Modal from 'react-modal';
import { useLogin } from '../../context/LoginContext';
import moment from 'moment';
import Webcam from 'react-webcam';

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 350,
  facingMode: 'user'
};

Modal.setAppElement('#root');
const WebBundy = ({ isWebBundyOpen = false }) => {
  const webcamRef = React.useRef(null);
  // const capture = React.useCallback(() => {
  //   const pictureSrc = webcamRef.current.getScreenshot();
  // });
  const { handleCloseWebBundy } = useLogin();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [time, setTime] = React.useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

  React.useEffect(() => {
    const interval = setInterval(() => setTime(moment().format('MMMM Do YYYY, h:mm:ss a')), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    setIsOpen(isWebBundyOpen);
    console.log('>>');
  }, [isWebBundyOpen]);

  return (
    <div className="flex justify-center items-center ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseWebBundy}
        className="bg-gradient-to-bl from-[#66A7A3] to-[#C7EBF0] w-96 relative top-56 p-6 mx-auto text-white rounded-lg shadow-lg"
        contentLabel="Example Modal">
        <button onClick={() => handleCloseWebBundy()} className="absolute top-2 right-4">
          x
        </button>
        <div className="text-2xl flex justify-center items-center flex-col">
          <h1> Web Bundy</h1>
          <div className="h-60 w-60 bg-slate-500">
            <div className="bg-[#66A7A3]">
              <p className="text-[8px] text-center">{time}</p>
              <Webcam
                audio={false}
                height={350}
                ref={webcamRef}
                width={400}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </div>
          </div>
        </div>
        <p className=" text-center text-2xl font-bold">Paul Leandro Lanot</p>
        <div>
          <p>
            <span className="font-bold text-[#177E8C]">EMPLOYEE NO.:</span> 18-001
          </p>
          <p>
            <span className="font-bold text-[#177E8C]">POSITION:</span> PAYROLL OFFICER
          </p>
          <p>
            <span className="font-bold text-[#177E8C]">DEPARTMENT:</span> ACCOUNTING
          </p>
        </div>
        <p className="font-bold text-center text-[#177E8C]">Current Timelogs</p>
        <p className="font-righteous text-center">{new Date().toTimeString()}</p>
        <form>
          <div className="flex justify-between">
            <button
              className="w-20 h-20 p-1 text-center shadow-inner border-4 border-[#C7EBF0] bg-[#69B5B0] rounded-full "
              onClick={(e) => {
                e.preventDefault();
              }}>
              PUNCH IN
            </button>
            <button
              className="w-20 h-20 p-1 text-center shadow-inner border-4 border-[#C7EBF0] bg-[#69B5B0] rounded-full "
              onClick={(e) => {
                e.preventDefault();
              }}>
              PUNCH OUT
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default WebBundy;
