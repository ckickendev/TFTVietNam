import React, { useEffect, useState } from "react";
import loadingStore from "../../../store/loadingStore";
import DialogCustom from "../../../utils/DialogCustom";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import {
  addTraitAPI,
  deleteTraitById,
  editTraitAPI,
  getAllTraitsAPI,
} from "../../../api/traitAPI.js";
import { errorEmptyInputObject } from "../../../utils/function";
import { TextComponent } from "../../CommonComponent/TextComponent";
import { TraitChampionAdmin } from "./TraitChampionAdmin";
import { TraitSkillDetail } from "./TraitSkillDetail";
export interface ITraitData {
  _id: string;
  image: string;
  name: string;
  name_api: string;
  effect: string;
  unit_activate: Array<IUnitActivate>;
}

interface IUnitActivate {
  count_activate: number;
  effect_activate: string;
}

const tableCellSx = {
  color: "white",
  fontWeight: 300,
};

export const TraitAdmin = () => {
  useEffect(() => {
    const getAllTraits = async () => {
      loadingStore.setIsLoading(true);
      const traits = await getAllTraitsAPI();
      setAllTraits(traits.data.allTraits);
      loadingStore.setIsLoading(false);
    };
    getAllTraits();
  }, []);

  const [editTraitDetailChampion, setEditTraitDetailChampion] = useState(true);
  const [allTraits, setAllTraits] = useState<ITraitData[]>([]);
  const [errorAddTrait, setErrorAddTrait] = useState({
    error: "",
    isError: false,
  });
  const [unableInput, setUnableInput] = useState(false);
  const [inputTrait, setInputTrait] = useState({
    idEdit: "SAMPLE",
    image: "",
    name: "",
    name_api: "",
    effect: "",
    unit_activate: [{ count_activate: 0, effect_activate: "" }],
  });
  const [deleteTrait, setDeleteTrait] = useState("");


  const handleAddTrait = async () => {
    try {
      loadingStore.setIsLoading(true);
      console.log("input trait to add", inputTrait);

      const isErrorEmpty = errorEmptyInputObject(inputTrait);
      if (isErrorEmpty) {
        setErrorAddTrait((state) => {
          return { error: isErrorEmpty, isError: !state.isError };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      const newTraitData = await addTraitAPI(inputTrait);
      setAllTraits((allTraits: ITraitData[]) => {
        const newArrayAllTraits = [
          {
            _id: newTraitData._id,
            image: newTraitData.image,
            name: newTraitData.name,
            name_api: newTraitData.name_api,
            effect: newTraitData.effect,
            unit_activate: newTraitData.unit_activate,
          },
          ...allTraits,
        ];
        return newArrayAllTraits;
      });
      setInputTrait({
        idEdit: "SAMPLE",
        image: "",
        name: "",
        name_api: "",
        effect: "",
        unit_activate: [{ count_activate: 0, effect_activate: "" }],
      });
      setUnableInput(false);
      loadingStore.setIsLoading(false);
    } catch (err: any) {
      setErrorAddTrait((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: !state.error,
        };
      });
      loadingStore.setIsLoading(false);
    }
  };

  const handleEditTrait = async () => {

    try {
      const inputDataTrait = {
        _id: inputTrait.idEdit,
        name: inputTrait.name,
        name_api: inputTrait.name_api,
        image: inputTrait.image,
        effect: inputTrait.effect,
        unit_activate: inputTrait.unit_activate,
      };
      console.log(inputTrait);

      loadingStore.setIsLoading(true);
      const isErrorEmpty = errorEmptyInputObject(inputTrait);
      console.log("hello", isErrorEmpty);

      if (isErrorEmpty) {
        setErrorAddTrait((state) => {
          return { error: isErrorEmpty, isError: true };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      const editTraitData = await editTraitAPI(inputDataTrait);
      if (editTraitData) {
        setAllTraits((allTraits: ITraitData[]) => {
          const newArrayAllTraits = allTraits.map((traitElement) => {
            return traitElement._id === inputTrait.idEdit
              ? inputDataTrait
              : traitElement;
          });
          return newArrayAllTraits;
        });
        setInputTrait({
          idEdit: "SAMPLE",
          name: "",
          name_api: "",
          image: "",
          effect: "",
          unit_activate: [{ count_activate: 0, effect_activate: "" }],
        });
        setUnableInput(false);
        loadingStore.setIsLoading(false);
      } else {
        setErrorAddTrait({
          error: "Some error is occur, No data update",
          isError: true,
        });
      }
      loadingStore.setIsLoading(false);
    } catch (err: any) {
      setErrorAddTrait((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: true,
        };
      });
      loadingStore.setIsLoading(false);
    }
  };

  const handleDeleteTrait = async () => {
    const id = deleteTrait;
    try {
      loadingStore.setIsLoading(true);
      console.log("id", id);
      const handlerDelete = await deleteTraitById(id);
      if (handlerDelete) {
        loadingStore.setIsLoading(false);
        setAllTraits((allTraits: ITraitData[]) => {
          const newArrayAllTraits = allTraits.filter(
            (trait) => trait._id !== id
          );
          return newArrayAllTraits;
        });
        setDeleteTrait("");
        return;
      }
    } catch (err: any) {
      loadingStore.setIsLoading(false);
      setErrorAddTrait((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: !state.error,
        };
      });
    }
  };

  const addRowAddTrait = () => {
    setUnableInput((state) => !state);
  };

  const onCloseDialogHandler = async () => {
    setErrorAddTrait((state) => {
      return { error: "", isError: !state.error };
    });
  };

  const inputNewTrait = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setInputTrait((state) => {
      return { ...state, [field]: e.target.value };
    });
  };

  const onEditHandler = (idEdit: string) => {
    setInputTrait((oldInputTrait: any) => {
      const filterData = allTraits.filter((trait) => {
        if (trait._id === idEdit) {
          return trait;
        }
        return undefined;
      });
      const inputData = filterData[0];
      return { idEdit: idEdit, unable: true, ...inputData };
    });
    setUnableInput(true);
  };

  const cancelInput = () => {
    setUnableInput(!unableInput)
  }

  const inputChangeUnitActivate = (e: any, position: number, type: number) => {
    if (type === 1) {
      const newUnitActivateArray = inputTrait.unit_activate.map(
        (unit, index) => {
          if (index === position) {
            return {
              count_activate: e.target.value,
              effect_activate: unit.effect_activate,
            };
          }
          return unit;
        }
      );
      setInputTrait((traits) => {
        return {
          ...traits,
          unit_activate: newUnitActivateArray,
        };
      });
    } else {
      const newUnitActivateArray = inputTrait.unit_activate.map(
        (unit, index) => {
          if (index === position) {
            return {
              count_activate: unit.count_activate,
              effect_activate: e.target.value,
            };
          }
          return unit;
        }
      );
      setInputTrait((traits) => {
        return {
          ...traits,
          unit_activate: newUnitActivateArray,
        };
      });
    }
  };

  const addMoreUnitTrait = () => {
    setInputTrait((traits) => {
      return {
        ...traits,
        unit_activate: [
          ...traits.unit_activate,
          { count_activate: 0, effect_activate: "" },
        ],
      };
    });
  };

  const handleChangeMenu = () => {
    setEditTraitDetailChampion(!editTraitDetailChampion);
  };

  const handleSetDeleteTrait = (id: string) => {
    setDeleteTrait(id);
  }

  const cancelHandlerDelete = () => {
    setDeleteTrait("");
  }

  const renderMenuAdmin = () => {
    if (editTraitDetailChampion === false) {
      return (
        <TraitSkillDetail
          unableInput={unableInput}
          addRowAddTrait={addRowAddTrait}
          inputNewTrait={inputNewTrait}
          inputTrait={inputTrait}
          inputChangeUnitActivate={inputChangeUnitActivate}
          addMoreUnitTrait={addMoreUnitTrait}
          handleEditTrait={handleEditTrait}
          handleAddTrait={handleAddTrait}
          allTraits={allTraits}
          onEditHandler={onEditHandler}
          handleDeleteTrait={handleDeleteTrait}
          handleChangeMenu={handleChangeMenu}
          cancelInput={cancelInput}
          handleSetDeleteTrait={handleSetDeleteTrait}
          deleteTrait={deleteTrait}
          cancelHandlerDelete={cancelHandlerDelete}
        />
      );
    }
    return <TraitChampionAdmin handleChangeMenu={handleChangeMenu} />;
  };


  return (
    <>
      {errorAddTrait.isError && (
        <DialogCustom
          onClose={onCloseDialogHandler}
          isOpen={errorAddTrait.isError}
          title={errorAddTrait.error}
          content="Please check again"
          displayAggree={false}
          displayDisaggree={false}
        />
      )}
      {renderMenuAdmin()}
    </>
  );
};
