// @ts-checkn
import React from "react";
import { useMediaQuery } from 'react-responsive'
import tw from "twin.macro";
import { Modal } from 'antd';

import { CloseIcon, MenuIcon } from "../utils/icons";
import { 
  MobileButton,
  ContactUs,
  LanguageSelector,
  SectionSelector
} from './buttons';

const Header = tw.header`
  justify-between items-center
  max-w-full mx-auto py-3 bg-transparent w-screen
`;
const Horizontal = tw.span`inline-flex`;

const Mobile = tw(Horizontal)`flex justify-between items-center`;

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

  const [showContactUsModal, setShowContactUsModal] = React.useState(false);
  const contactUsPlz = () => {dismissModal(); setShowContactUsModal(true)}
  const noDontGo = () => setShowContactUsModal(false);

  return (<>
    <Header>
      {(isDesktop &&
      <Desktop>
        <LanguageSelector isDesktop/>
        <Horizontal>
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
        <ContactUs onClick={contactUsPlz}/>
      </Desktop>)}


      {(!isDesktop &&
      <Mobile>
        <LanguageSelector/>
        <MobileButton onClick={() => setShowModal(true)}>
          {showModal ? <CloseIcon/> : <MenuIcon/>}
        </MobileButton>
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
      <SectionSelector
        modal
        btOption='AM'
        link='/'
        selected={section === 'AM'}
        dismissModal={dismissModal}
      />
      <SectionSelector
        modal
        btOption='DI'
        link='/dripIrrigation/'
        selected={section === 'DI'}
        dismissModal={dismissModal}
      />
      <SectionSelector
        modal
        btOption='TC'
        link='/tissueCulture/'
        selected={section === 'TC'}
        dismissModal={dismissModal}
      />
      <ContactUs modal onClick={contactUsPlz}/>
    </Modal>

    <Modal
      centered
      closable={false}
      footer={null}
      onCancel={noDontGo}
      style={modalStyle}
      visible={showContactUsModal}
      width={234}
    >

    </Modal>
  </>);
};
