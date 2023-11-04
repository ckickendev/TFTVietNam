import { COLOR, SIZE } from "../../constants";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { TextComponent } from "../../CommonComponent/TextComponent";
import { FORM_STYLE } from "../style";
import { CustomChampionAvatar } from "../../CommonComponent/CustomChampionAvatar";
import { CustomIconTraitComponent } from "../../CommonComponent/CustomIconTraitComponent";

interface IFormAdd {
  title?: string;
  handleSubmit?: () => void;
  inputChangeTraitChampion?: (e: any, position: number) => void;
  data: any;
  cancelModel?: () => void;
  allChampions: Array<any>;
  addMoreChampion: () => void;
}

export const TraitChampionListInTraitForm = ({
  title,
  handleSubmit,
  inputChangeTraitChampion,
  data,
  cancelModel,
  allChampions,
  addMoreChampion,
}: IFormAdd) => {
  return (
    <div
      className={`modal fade show d-block"`}
      style={FORM_STYLE.formContainer}
    >
      <div className="modal-dialog modal-simple modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-center mb-4">
              <h3 className="mb-2">{title ? title : "Form"}</h3>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <Box
                component="form"
                sx={{
                  width: "200px",
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <CustomIconTraitComponent src={data?.image} width={"80px"} height={"80px"}/>
                <TextComponent>{data?.name}</TextComponent>
                {data.champions?.length === 0 ? (
                  <TextComponent>No Champions</TextComponent>
                ) : (
                  data.champions.map((champion: any, index: any) => {
                    return (
                      <ChampionSelectComponent
                        inputChangeTraitChampion={inputChangeTraitChampion}
                        champion={champion}
                        key={index}
                        index={index}
                        allChampions={allChampions}
                      />
                    );
                  })
                )}

                <Button onClick={addMoreChampion}>Add more champion</Button>
              </Box>
            </div>
            <div className="modal-footer">
              <Button
                type="submit"
                variant="contained"
                sx={{ marginRight: 1 }}
                onClick={handleSubmit}
              >
                Confirm change
              </Button>
              <Button variant="contained" onClick={cancelModel}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChampionSelectComponent = ({
  index,
  inputChangeTraitChampion,
  champion,
  allChampions,
}: any) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 100 }}>
      <InputLabel id="demo-controlled-open-select" color="success">
        Input champion here
      </InputLabel>
      <Select
        key={index}
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        label="Champion"
        sx={{
          color: "white",
          background: COLOR.WHITE,
          display: "flex",
          "& .MuiSelect-select": {
            display: "flex",
            justifyContent: "center",
            "& p": {
              lineHeight: SIZE.SIZE_IMAGE_CHANGE_CHAMPION,
            },
          },
        }}
        onChange={(e: any) => {
          inputChangeTraitChampion(e, index);
        }}
        value={champion._id}
      >
        {allChampions.map((championElement: any, index: number) => {
          return (
            <MenuItem
              key={index}
              value={championElement._id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CustomChampionAvatar
                src={championElement?.avatar}
                style={{ padding: 8, marginRight: 20 }}
              />
              <TextComponent color="red">{championElement.name}</TextComponent>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
