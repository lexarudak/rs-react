export const showPopupForSeconds = (
  showPopupFn: React.Dispatch<React.SetStateAction<boolean>>,
  seconds: number
) => {
  showPopupFn(true);
  setTimeout(() => {
    showPopupFn(false);
  }, seconds * 1000);
};
