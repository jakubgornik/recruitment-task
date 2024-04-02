export const sxContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  p: 4,
};

export const sxListCard = {
  width: { xs: "260px", sm: "400px", md: "500px", lg: "800px" },
  boxShadow: 3,
  borderRadius: 2,
};

export const sxListEditorWrapper = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "center",
  gap: "16px",
  my: "2",
};

export const sxLimitTextField = {
  mb: { xs: 2, sm: 0 },
  width: { xs: "260px", sm: "190px" },
};

export const sxSortByTextField = { width: { xs: "260px", sm: "190px" } };

export const sxListErrorNotification = {
  display: "flex",
  justifyContent: "center",
  py: 2,
  borderRadius: 2,
};

export const sxListHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: 2,
  px: { xs: 2, sm: 5, md: 8 },
  backgroundColor: "#F6F6F6",
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
};

export const sxListItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: 2,
  px: { xs: 2, sm: 5, md: 8 },
  borderBottom: "1px solid #F0F0F0",
};

export const sxLoadingSpinnerWrapper = {
  display: "flex",
  justifyContent: "center",
  py: 2,
};

export const sxLoadingSpinner = { py: 2, color: "black" };
