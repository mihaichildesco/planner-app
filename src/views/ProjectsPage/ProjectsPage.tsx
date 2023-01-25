import * as Styled from "./ProjectsPageStyled";
import ProjectButton from "../../components/ProjectButton/ProjectButton";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import ModalPersons from "../../components/ModalPersons/ModalPersons";
import CardContainerProjects from "../../components/CardContainerProjects/CardContainerProjects";
import ModalCreate from "../../components/ModalCreate/ModalCreate";
import { ModalEdit } from "../../components/ModalEdit/ModalEdit";

const ProjectsPage = () => {
  const [dataToRender, setDataToRender] = useState([
    {
      name: "person",
      renderComponent: <ModalPersons />,
      isOpen: false,
    },
    {
      name: "create",
      renderComponent: <ModalCreate />,
      isOpen: false,
    },
    {
      name: "edit",
      renderComponent: <ModalEdit />,
      isOpen: false,
    },
  ]);

  const handleOpen = (modalType: string) => {
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
    <Styled.ProjectsPageContainer>
      <Styled.ProjectsButttonsWrapper>
        <Styled.GroupButtonsWrapper>
          <ProjectButton
            appereance="progressStyle"
            text="in progress"
          ></ProjectButton>
          <ProjectButton text="pending"></ProjectButton>
          <ProjectButton appereance="doneStyle" text="done"></ProjectButton>
        </Styled.GroupButtonsWrapper>
        <Styled.EntityWrapper>
          <ProjectButton
            text="add entity"
            handleModal={() => handleOpen("create")}
          ></ProjectButton>
        </Styled.EntityWrapper>
      </Styled.ProjectsButttonsWrapper>

      <CardContainerProjects handleModal={handleOpen} />

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
            onClose={() => handleClose("create")}
          >
            {modalData.renderComponent}
          </Modal>
        );
      })}
    </Styled.ProjectsPageContainer>
  );
};

export default ProjectsPage;

// {/* <Modal
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         open={openPersonModal}
//         onClose={() => handleClose("person")}
//       >
//         <ModalPersons />
//       </Modal>

//       <Modal
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         open={openCreateModal}
//         onClose={() => handleClose("create")}
//       >
//         <ModalCreate />
//       </Modal> */}

//       {/* <Modal
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         open={openEditModal}
//         onClose={() => handleClose("edit")}
//       ></Modal> */}
