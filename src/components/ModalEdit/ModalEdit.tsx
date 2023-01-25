import * as styled from "./ModalEditStyled";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import ProjectButton from "../ProjectButton/ProjectButton";

export const ModalEdit = () => {
  const [value, setValue] = useState<Dayjs | null>(
    dayjs("2023-01-01T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <styled.ModalContainer>
      <styled.TitleHeader>edit project</styled.TitleHeader>

      <Stack spacing={3}>
        <TextField
          size="small"
          required
          id="filled-required"
          label="Title"
          defaultValue=""
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={2}
          defaultValue=""
          variant="filled"
        />

        <TextField
          size="small"
          required
          id="filled-required"
          label="Status"
          defaultValue=""
          variant="filled"
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            label="Start date"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            label="Deadline"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />

          <TextField
            size="small"
            required
            id="filled"
            label="End date"
            defaultValue=""
            variant="filled"
          />
        </LocalizationProvider>
      </Stack>
      <styled.ButtonWrapper>
        <ProjectButton text="edit" />
        <ProjectButton text="delete" />
      </styled.ButtonWrapper>
    </styled.ModalContainer>
  );
};
