import React from 'react';
import { Footer } from 'flowbite-react';
import Logo from '../res/img/logo.svg';
import DarkLogo from '../res/img/darkLogo.svg';
import { company, websiteURL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Footers = () => {
  const storedTheme = sessionStorage.getItem('darkMode');

  const navigate = useNavigate();
  function redirectAbout() {
    navigate("/about");
  }
  function redirectContact() {
    navigate("/");
  }
  function redirectTerms() {
    navigate("/terms");
  }
  function redirectCancel() {
    navigate("/cancellation");
  }
  
  function redirectRefund() {
    navigate("/refund");
  }
  function redirectPrivacy() {
    navigate("/privacy");
  }

  return (
    <Footer container className="shadow-none rounded-none dark:bg-black">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href={websiteURL}
            src={storedTheme === "true" ? DarkLogo : Logo}
          />
          <Footer.LinkGroup>
          <p className="text-black  font-bold  mx-4 dark:text-white" onClick={redirectContact}>
              Home
            </p>
            <p className="text-black font-bold mx-4 dark:text-white" onClick={redirectAbout}>
              About
            </p>
            <p className="text-black  font-bold  mx-4 dark:text-white" onClick={redirectPrivacy}>
              Privacy Policy
            </p>
            <p className="text-black  font-bold  mx-4 dark:text-white " onClick={redirectTerms}>
              Terms & Conditions
            </p>
            <p className="text-black  font-bold  mx-4 dark:text-white " onClick={redirectCancel}>
              Cancellation Policy
            </p>
            <p className="text-black  font-bold  mx-4 dark:text-white " onClick={redirectRefund}>
              Refund Policy
            </p>
           
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="border-black dark:border-white" />
        <Footer.Copyright
          className="text-black dark:text-white font-bold"
          href={websiteURL}
          by={'Powered by Hackwit Technologies Private Limited'}
          year={2024}
        />
      </div>
    </Footer>
  );
};

export default Footers;
