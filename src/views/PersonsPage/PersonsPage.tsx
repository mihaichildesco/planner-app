import * as Styled from "./PersonsPageStyled";
import ProjectButton from "../../components/ProjectButton/ProjectButton";
import PersonsCard from "../../components/PersonsCard/PersonsCard";
import { useState } from "react";
import { Modal } from "@mui/material";
import ModalEditPerson from "../../components/ModalEditPerson/ModalEditPerson";
import ModalCreatePerson from "../../components/ModalCreatePerson/ModalCreatePerson";

const PersonsPage = () => {
  const [dataToRender, setDataToRender] = useState([
    {
      name: "editPerson",
      renderComponent: <ModalEditPerson />,
      isOpen: false,
    },
    {
      name: "createPerson",
      renderComponent: <ModalCreatePerson />,
      isOpen: false,
    },
  ]);

  const handleOpen = (modalType: string) => {
    console.log("randeaza");
    let localArray = dataToRender;

    localArray = localArray.map((item) => {
      return {
        ...item,
        isOpen: modalType === item.name,
      };
    });
    setDataToRender(localArray);
  };

  const handleClose = (modalType: string) => {
    let localArray = dataToRender;

    localArray = localArray.map((item) => {
      return {
        ...item,
        isOpen: false,
      };
    });
    setDataToRender(localArray);
  };

  return (
    <Styled.PersonsPageContainer>
      <Styled.ButtonsContainer>
        <Styled.ButtonWraper>
          <ProjectButton text="available"></ProjectButton>
          <ProjectButton text="on project"></ProjectButton>
        </Styled.ButtonWraper>

        <Styled.ButtonWraper>
          <ProjectButton
            text="add entity"
            handleModal={() => handleOpen("createPerson")}
          ></ProjectButton>
        </Styled.ButtonWraper>
      </Styled.ButtonsContainer>
      <PersonsCard handleModal={handleOpen} />
      {dataToRender.map((modalData, index) => {
        return (
          <Modal
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            open={modalData.isOpen}
            onClose={() => handleClose("")}
          >
            {modalData.renderComponent}
          </Modal>
        );
      })}
    </Styled.PersonsPageContainer>
  );
};

export default PersonsPage;
