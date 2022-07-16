const Test10Modal = ({ onClose }) => {
  return (
    <>
      <div className="bg"></div>
      <div className="popup">
        <p className="closex" onClick={ onClose }>^^</p>
        <h2>팝업띄우기</h2>
      </div>
    </>
  );
};

export default Test10Modal;