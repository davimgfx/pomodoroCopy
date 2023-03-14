import Timer from "./Timer.js";
new Timer(document.querySelector(".timer"));

const openModalLink = document.getElementById("open__modal--setting");
const closeModalButton = document.getElementById("close__modal--setting");
const myDialog = document.getElementById("setting-dialog");

openModalLink.addEventListener("click", (event) => {
	event.preventDefault();
	myDialog.showModal();
});

closeModalButton.addEventListener("click", () => {
	myDialog.close();
});

myDialog.addEventListener("click", (event) => {
	if (event.target === myDialog) {
		myDialog.close();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		myDialog.close();
	}
});
