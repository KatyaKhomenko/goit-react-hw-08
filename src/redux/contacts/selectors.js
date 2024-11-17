export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.loading;
export const selectIsOpen = (state) => state.contacts.isOpen;
export const selectIsClose = (state) => state.contacts.isClose;
export const selectIsAccept = (state) => state.contacts.isAccept;
export const selectModalContactId = (state) => state.contacts.modalId;
export const selectOpenEditor = (state) => state.contacts.isOpenEditor;
export const selectEditorContactId = (state) => state.contacts.editorId;
