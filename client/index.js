import './index.css';

const dialogOpeners = document.querySelectorAll('[data-dialog-open]');

dialogOpeners.forEach((opener) => {
  const dialog = document.getElementById(opener.dataset.dialogOpen);

  if (!(dialog instanceof HTMLDialogElement)) return;

  opener.addEventListener('click', () => {
    if (!dialog.open) dialog.showModal();
  });

  dialog.querySelector('[data-dialog-close]')?.addEventListener('click', () => {
    dialog.close();
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    opener.focus();
  });
});