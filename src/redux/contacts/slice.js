import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    isOpen: false,
    isClose: true,
    isAccept: false,
    modalId: null,
    isOpenEditor: false,
    editorId: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isAccept = false;
      state.isOpen = true;
      state.isClose = false;
      state.modalId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.isClose = true;
      state.modalId = null;
    },
    acceptAction: (state) => {
      state.isAccept = true;
      state.isOpen = false;
      state.isClose = true;
      state.modalId = null;
    },
    openEditor: (state, action) => {
      state.isOpenEditor = true;
      state.editorId = action.payload;
    },
    closeEditor: (state) => {
      state.isOpenEditor = false;
      state.editorId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(editContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
          state.isOpenEditor = false;
          state.editorId = null;
        }
      })
      .addCase(editContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { openModal, closeModal, acceptAction, openEditor, closeEditor } =
  contactsSlice.actions;

export default contactsSlice.reducer;
