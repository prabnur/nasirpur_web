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

export default ({ section }) => {
  const isDesktop = useMediaQuery({ minWidth: 864 });
  const [showModal, setShowModal] = React.useState(false);
  const dismissModal = () => setShowModal(false);

  return (<>
    <Header>
      {(isDesktop &&
      <Desktop>
        <LanguageSelector/>
        <Horizontal key={1}>
          <SectionSelector
            btOption='AM'
            link='/'
            selected={section === 'AM'}
          />
          <SectionSelector
            btOption='DI'
            link='/dripIrrigation/'
            selected={section === 'DI'}
          />
          <SectionSelector
            btOption='TC'
            link='/tissueCulture/'
            selected={section === 'TC'}
          />
        </Horizontal>
        <ContactUs link='/contactUs/' key={2}/>
      </Desktop>)}


      {(!isDesktop &&
      <Mobile>
        <LanguageSelector/>
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
        btOption='AM'
        link='/'
        selected={section === 'AM'}
        dismissModal={dismissModal}
      />
      <SectionSelectorModal
        btOption='DI'
        link='/dripIrrigation/'
        selected={section === 'DI'}
        dismissModal={dismissModal}
      />
      <SectionSelectorModal
        btOption='TC'
        link='/tissueCulture/'
        selected={section === 'TC'}
        dismissModal={dismissModal}
      />
      <ContactUsModal link='/contactUs/' key={2}/>
    </Modal>
  </>);
};
