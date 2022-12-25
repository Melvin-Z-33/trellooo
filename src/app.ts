const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>;

const addContainerListeners = (currentContainer: HTMLDivElement) => {
	const currentContainerDeletionBtn = currentContainer.querySelector(
		'.delete-container-btn',
	) as HTMLButtonElement;

	deleteBtnListeners(currentContainerDeletionBtn);
};

const deleteBtnListeners = (btn: HTMLButtonElement) => {
	btn.addEventListener('click', handleContainerDeletion);
};

const handleContainerDeletion = (e: MouseEvent) => {
	const btn = e.target as HTMLButtonElement;
	const btnsArray = [
		...document.querySelectorAll('.delete-container-btn'),
	] as HTMLButtonElement[];
	const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];
	containers[btnsArray.indexOf(btn)].remove();
};

itemsContainer.forEach((container: HTMLDivElement) => {
	addContainerListeners(container);
});
