// @ts-checkn
import React from "react";
import { useMediaQuery } from 'react-responsive'
import tw from "twin.macro";
import { Modal } from 'antd';

import { CloseIcon, MenuIcon } from "../utils/icons";
import { 
  MobileButton,
  ContactUs,
  ContactUsModal,
  LanguageSelector,
  SectionSelector,
  SectionSelectorModal
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
