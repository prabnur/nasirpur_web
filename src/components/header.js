// @ts-checkn
import React from "react";
import { useMediaQuery } from 'react-responsive'
import tw from "twin.macro";
import { Modal } from 'antd';

import { CloseIcon, MenuIcon } from "../utils/icons";
import { ContactUs, ContactUsModal, LanguageSelector, SectionSelector, SectionSelectorModal } from './buttons';

const Header = tw.header`
  flex justify-between items-center
  max-w-full mx-auto pt-4
`;
const Horizontal = tw.span`inline-flex`;

const Mobile = tw(Horizontal)`flex-1 justify-between items-center`;
const IconButton = tw.button`z-20 focus:outline-none text-black`;
const modalStyle = {
  borderRadius: "50px",
  textAlign: "center"
};

const Desktop = tw.nav`
  flex flex-1 justify-between items-center
`;

export default ({ toggleLang, section }) => {
  const isDesktop = useMediaQuery({ minWidth: 864 });
  const [showModal, setShowModal] = React.useState(false);
  const dismissModal = () => setShowModal(false);

  return (<div>
    <Header>
      {(isDesktop &&
      <Desktop>
        <LanguageSelector toggleLang={toggleLang}/>
        <Horizontal key={1}>
          <SectionSelector
            text='About Me'
            link='/aboutMe/'
            selected={section === 'About Me'}
          />
          <SectionSelector
            text='Drip Irrigation'
            link='/dripIrrigation/'
            selected={section === 'Drip Irrigation'}
          />
          <SectionSelector
            text='Tissue Culture'
            link='/tissueCulture/'
            selected={section === 'Tissue Culture'}
          />
        </Horizontal>
        <ContactUs link='/contactUs/' key={2}/>
      </Desktop>)}


      {(!isDesktop &&
      <Mobile>
        <LanguageSelector toggleLang={toggleLang}/>
        <IconButton onClick={() => setShowModal(true)}>
          {showModal ? <CloseIcon/> : <MenuIcon/>}
        </IconButton>
      </Mobile>)}
    </Header>
    
    <Modal
      centered
      closable={false}
      footer={null}
      onCancel={() => setShowModal(false)}
      style={modalStyle}
      visible={showModal}
      width={234}
    >
      <SectionSelectorModal
        text='About Me'
        link='/aboutMe/'
        selected={section === 'About Me'}
        dismissModal={dismissModal}
      />
      <SectionSelectorModal
        text='Drip Irrigation'
        link='/dripIrrigation/'
        selected={section === 'Drip Irrigation'}
        dismissModal={dismissModal}
      />
      <SectionSelectorModal
        text='Tissue Culture'
        link='/tissueCulture/'
        selected={section === 'Tissue Culture'}
        dismissModal={dismissModal}
      />
      <ContactUsModal link='/contactUs/' key={2}/>
    </Modal>
  </div>);
};
