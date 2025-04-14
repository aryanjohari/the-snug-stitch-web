import React, { useState, useEffect } from "react";
import MailchimpFormContainer from "./MailChimpSubscribeForm";

const SubscribePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(popupTimer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="shadow-xl">
      {isOpen && (
        <div className="fixed top-60 left-10 sm:top-0 sm:left-0 sm:w-full sm:h-full flex items-center justify-center bg-opacity-50 bg-gray-900 z-50">
          <div className="sm:bg-popup sm:h-[350px] sm:w-[270px] sm:bg-cover"/>
          <div className="bg-white p-4 max-w-md relative z-50 text-center">
            <h3 className="font-bold text-lg mt-10">Subscribe to get exiting emails</h3>
            <button
              className="absolute top-0 right-0 m-2 text-black hover:text-white hover:bg-black p-2 rounded-full cursor-pointer"
              onClick={handleClose}
            >
              X
            </button>
            <MailchimpFormContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribePopup;
