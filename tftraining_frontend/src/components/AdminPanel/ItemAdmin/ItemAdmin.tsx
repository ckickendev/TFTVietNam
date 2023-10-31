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
import { ADMIN_TABLE_STYLE } from "../style";
import { COLOR } from "../../constants";
import { ItemForm } from "./ItemForm";

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
  const [deleteItem, setDeleteItem] = useState("");
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

  const handleDeleteItem = async () => {
    try {
      loadingStore.setIsLoading(true);
      const handlerDelete = await deleteItemById(deleteItem);
      if (handlerDelete) {
        loadingStore.setIsLoading(false);
        setAllItems((allItems: IItemData[]) => {
          const newArrayAllItems = allItems.filter(
            (item) => item._id !== deleteItem
          );
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
      } else {
        setErrorAddItem({
          error: "Some error is occur, No data update",
          isError: true,
        });
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

  const cancelFormDeleteItem = () => {
    setDeleteItem("");
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
        <TableContainer sx={ADMIN_TABLE_STYLE.tableContainer}>
          <TextComponent sx={ADMIN_TABLE_STYLE.tableCellSx}>
            No data found
          </TextComponent>
          <Button onClick={addRowAddItem} variant="contained">
            Add Item
          </Button>
        </TableContainer>
      ) : (
        <TableContainer sx={ADMIN_TABLE_STYLE.tableContainer}>
          <Table
            aria-label="customized table"
            sx={{ backgroundColor: COLOR.WHITE, marginBottom: 4 }}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={ADMIN_TABLE_STYLE.tableCellHeader}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  sx={ADMIN_TABLE_STYLE.tableCellHeader}
                  align="center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allItems.map((item: IItemData, index) => {
                return (
                  <RowData
                    key={index}
                    index={index}ß
                    item={item}
                    onEditHandler={onEditHandler}
                    setDeleteItem={setDeleteItem}
                    handleDeleteItem={handleDeleteItem}
                  />
                );
              })}
            </TableBody>
          </Table>
          <Button onClick={addRowAddItem} fullWidth variant="contained">
            Add Item
          </Button>
        </TableContainer>
      )}
      {unableInput && (
        <ItemForm
          inputItem={inputItem}
          inputNewItem={inputNewItem}
          title={
            inputItem?.idEdit == "SAMPLE" ? "Add Item" : "Edit Item Detail"
          }
          handleSubmit={handleAddItem}
          cancelModel={addRowAddItem}
          handleEditItem={handleEditItem}
        />
      )}
      <DialogCustom
        isOpen={deleteItem != ""}
        content="Do you really want delete this champion, this may be cannot to undo."
        title="Delete this champion?"
        disaggreeTitle="Cancel"
        aggreeTitle="Delete"
        confirmHandler={handleDeleteItem}
        cancelHandler={cancelFormDeleteItem}
      />
    </>
  );
};

const RowData = (props: any) => {
  const { index, item, onEditHandler, setDeleteItem } = props;
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <img src={item.image} width={50} height={50} alt="image" />
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
        <TextComponent>{item.name}</TextComponent>
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
        <TextComponent>{item.effect}</TextComponent>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{
            minWidth: 100,
            marginRight: 2,
            ...ADMIN_TABLE_STYLE.tableCellSx,
          }}
          color="secondary"
          onClick={() => {
            onEditHandler(item._id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          sx={{ minWidth: 100, ...ADMIN_TABLE_STYLE.tableCellSx }}
          color="error"
          onClick={() => {
            setDeleteItem(item._id);
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
