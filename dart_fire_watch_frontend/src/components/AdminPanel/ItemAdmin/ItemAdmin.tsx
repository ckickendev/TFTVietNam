import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useEffect, useState } from "react";
import loadingStore from "../../../store/loadingStore";
import DialogCustom from "../../../utils/DialogCustom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TextFieldComponent } from "../../CommonComponent/TextFieldComponent";
import {
  addItemAPI,
  deleteItemById,
  editItemAPI,
  getAllItemsAPI,
} from "../../../api/itemAPI";
import { errorEmptyInputObject } from "../../../utils/function";
import { TextComponent } from "../../CommonComponent/TextComponent";

interface Column {
  id: "image" | "name" | "effect";
  label: string;
  align?: "right" | "center" | "left" | "inherit" | "justify" | undefined;
}
const columns: readonly Column[] = [
  { id: "image", label: "Image", align: "center" },
  { id: "name", label: "Name", align: "center" },
  {
    id: "effect",
    label: "Effect",
    align: "center",
  },
];
interface IItemData {
  _id: string;
  image: string;
  name: string;
  effect: string;
}

const tableCellSx = {
  color: "white",
  fontWeight: 300,
};

export const ItemAdmin = () => {
  useEffect(() => {
    const getAllItems = async () => {
      loadingStore.setIsLoading(true);
      const items = await getAllItemsAPI();
      setAllItems(items.data.allItems);
      loadingStore.setIsLoading(false);
    };
    getAllItems();
  }, []);

  const [allItems, setAllItems] = useState<IItemData[]>([]);
  const [errorAddItem, setErrorAddItem] = useState({
    error: "",
    isError: false,
  });
  const [unableInput, setUnableInput] = useState(false);
  const [inputItem, setInputItem] = useState({
    idEdit: "SAMPLE",
    image: "",
    name: "",
    effect: "",
  });

  const handleAddItem = async () => {
    try {
      loadingStore.setIsLoading(true);
      const isErrorEmpty = errorEmptyInputObject(inputItem);
      if (isErrorEmpty) {
        setErrorAddItem((state) => {
          return { error: isErrorEmpty, isError: !state.isError };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      const newItemData = await addItemAPI(inputItem);
      setAllItems((allItems: IItemData[]) => {
        const newArrayAllItems = [
          {
            _id: newItemData._id,
            image: newItemData.image,
            name: newItemData.name,
            effect: newItemData.effect,
          },
          ...allItems,
        ];
        return newArrayAllItems;
      });
      setInputItem({
        idEdit: "SAMPLE",
        image: "",
        name: "",
        effect: "",
      });
      setUnableInput(false);
      loadingStore.setIsLoading(false);
    } catch (err: any) {
      setErrorAddItem((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: !state.error,
        };
      });
      loadingStore.setIsLoading(false);
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      console.log("id", id);
      
      loadingStore.setIsLoading(true);
      const handlerDelete = await deleteItemById(id);
      if (handlerDelete) {
        loadingStore.setIsLoading(false);
        setAllItems((allItems: IItemData[]) => {
          const newArrayAllItems = allItems.filter((item) => item._id !== id);
          return newArrayAllItems;
        });
        return;
      }
    } catch (err: any) {
      loadingStore.setIsLoading(false);
      setErrorAddItem((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: !state.error,
        };
      });
    }
  };

  const addRowAddItem = () => {
    setUnableInput((state) => !state);
  };

  const onCloseDialogHandler = async () => {
    setErrorAddItem((state) => {
      return { error: "", isError: !state.error };
    });
  };

  const inputNewItem = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setInputItem((state) => {
      return { ...state, [field]: e.target.value };
    });
  };

  const onEditHandler = (idEdit: string) => {
    setInputItem((oldInputItem: any) => {
      const filterData = allItems.filter((item) => {
        if (item._id === idEdit) {
          return item;
        }
        return undefined;
      });
      const inputData = filterData[0];
      return { idEdit: idEdit, unable: true, ...inputData };
    });
    setUnableInput(true);
  };

  const handleEditItem = async () => {
    try {
      const inputDataItem = {
        _id: inputItem.idEdit,
        name: inputItem.name,
        image: inputItem.image,
        effect: inputItem.effect,
      };
      loadingStore.setIsLoading(true);
      const isErrorEmpty = errorEmptyInputObject(inputItem);
      if (isErrorEmpty) {
        setErrorAddItem((state) => {
          return { error: isErrorEmpty, isError: true };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      const editItemData = await editItemAPI(inputDataItem);
      if (editItemData) {
        setAllItems((allItems: IItemData[]) => {
          const newArrayAllItems = allItems.map((itemElement) => {
            return itemElement._id === inputItem.idEdit
              ? inputDataItem
              : itemElement;
          });
          return newArrayAllItems;
        });
        setInputItem({
          idEdit: "SAMPLE",
          name: "",
          image: "",
          effect: "",
        });
        setUnableInput(false);
        loadingStore.setIsLoading(false);
      }else{
        setErrorAddItem({ error: "Some error is occur, No data update", isError: true });
      }
      loadingStore.setIsLoading(false);
    } catch (err: any) {
      setErrorAddItem((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: true,
        };
      });
      loadingStore.setIsLoading(false);
    }
  };

  return (
    <>
      {errorAddItem.isError && (
        <DialogCustom
          onClose={onCloseDialogHandler}
          isOpen={errorAddItem.isError}
          title={errorAddItem.error}
          content="Please check again"
          displayAggree={false}
          displayDisaggree={false}
        />
      )}
      {allItems.length === 0 ? (
        <TableContainer sx={{ padding: 1, textAlign: "center" }}>
          <TextComponent sx={tableCellSx}>No data found</TextComponent>
        </TableContainer>
      ) : (
        <TableContainer sx={{ padding: 1, textAlign: "center" }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{ bgcolor: "#000", ...tableCellSx }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  sx={{ bgcolor: "#000", ...tableCellSx }}
                  align="center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ height: "100%" }}>
                <TableCell colSpan={6} align="center">
                  <AddCircleIcon
                    onClick={addRowAddItem}
                    fontSize="large"
                    color="success"
                  />
                </TableCell>
              </TableRow>
              {unableInput && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <TextFieldComponent
                      color="error"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputNewItem(e, "image");
                      }}
                      variant="filled"
                      value={inputItem.image}
                      textColor="white"
                      placeholder="Link image item"
                    />
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    <TextFieldComponent
                      color="error"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputNewItem(e, "name");
                      }}
                      variant="filled"
                      value={inputItem.name}
                      textColor="white"
                      placeholder="Enter Name of Item"
                    />
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    <TextFieldComponent
                      color="error"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputNewItem(e, "effect");
                      }}
                      variant="filled"
                      value={inputItem.effect}
                      textColor="white"
                      placeholder="Enter Effect"
                    />
                  </TableCell>
                  {inputItem.idEdit !== "SAMPLE" ? (
                    <TableCell align="center">
                      <Button
                        onClick={handleEditItem}
                        variant="contained"
                        sx={{ minWidth: 100, ...tableCellSx }}
                        color="warning"
                      >
                        Edit
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell align="center">
                      <Button
                        onClick={handleAddItem}
                        variant="contained"
                        sx={{ minWidth: 100, ...tableCellSx }}
                        color="success"
                      >
                        Add
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              )}

              {allItems.map((item: IItemData, index) => {
                if (item._id === inputItem.idEdit) {
                  return undefined;
                }
                return (
                  <RowData
                    key={index}
                    index={index}
                    item={item}
                    onEditHandler={onEditHandler}
                    handleDeleteItem={handleDeleteItem}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

const RowData = (props: any) => {
  const { index, item, onEditHandler, handleDeleteItem } = props;
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <img src={item.image} width={50} height={50} alt="image" />
      </TableCell>
      <TableCell align="center" sx={tableCellSx}>
        <TextComponent>{item.name}</TextComponent>
      </TableCell>
      <TableCell align="center" sx={tableCellSx}>
        <TextComponent>{item.effect}</TextComponent>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{ minWidth: 100, marginRight: 2, ...tableCellSx }}
          color="secondary"
          onClick={() => {
            onEditHandler(item._id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          sx={{ minWidth: 100, ...tableCellSx }}
          color="error"
          onClick={() => {
            handleDeleteItem(item._id);
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
