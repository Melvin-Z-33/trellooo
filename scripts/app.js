"use strict";
const itemsContainer = document.querySelectorAll('.items-container');
const addContainerListeners = (currentContainer) => {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    deleteBtnListeners(currentContainerDeletionBtn);
};
const deleteBtnListeners = (btn) => {
    btn.addEventListener('click', handleContainerDeletion);
};
const handleContainerDeletion = (e) => {
    const btn = e.target;
    const btnsArray = [
        ...document.querySelectorAll('.delete-container-btn'),
    ];
    const containers = [...document.querySelectorAll('.items-container')];
    containers[btnsArray.indexOf(btn)].remove();
};
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
