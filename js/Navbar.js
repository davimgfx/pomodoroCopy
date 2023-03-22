export default class Navbar {
	constructor(root) {
		root.innerHTML = Navbar.getHTML()

        this.el = {
				setting: root.querySelector(".setting"),
				openModalLinkSetting: root.querySelector("#open__modal--setting"),
				closeModalButtonSetting: root.querySelector("#close__modal--setting"),
				myDialogSetting: root.querySelector("#setting-dialog"),
				pomodoroTimer: root.querySelector(".input__pomodoro--timer"),
				confirmSetting: root.querySelector(".button__confirm"),
			};

        this.el.openModalLinkSetting.addEventListener("click", (event) => {
            event.preventDefault();
			this.el.myDialogSetting.showModal();
		}); 
        this.el.closeModalButtonSetting.addEventListener("click", () =>{
            this.closeModal();
        })

        this.el.myDialogSetting.addEventListener("click", (event) => {
            if (event.target === this.el.myDialogSetting) {
            this.closeModal();
        }

            root.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    this.closeModal();
                }
            });
        })
    
        this.el.confirmSetting.addEventListener("click",() => {
            this.closeModal();
        })
}
    //Close Modal
    closeModal(){
        this.el.myDialogSetting.close();
    }

	static getHTML() {
		return `
            <div class="logo"> <img src="assets/images/logo.png" alt="logo png" id="imglogo"> Pomofocus
            </div>
            <nav class="nav-bar">
                <ul>
                    <li class="setting--li"><a href="#" class="setting" id="open__modal--setting">Setting</a></li>
                </ul>
            </nav>
            <dialog id="setting-dialog">
            <div class="header-dialog">
                <h4>Setting</h4>
                <button id="close__modal--setting">&times;</button>
            </div>
            <div class="timer__header--dialog">
                <span class="material-symbols-outlined">schedule</span><h5 class="fix--timer">TIMER</h5>
            </div>         
            <h2 class="block">Time (minutes)</h2>
            <div class="timer-dialog">
                <div class="pomodoro__timer--dialog">Pomodoro <input type="number" class="input__timer-dialog input__pomodoro--timer"></div>
                <div class="shortbreak__timer--dialog">Short Break <input type="number" class="input__timer-dialog input_shortbreak--timer"></div>
                <div class="longbreak__timer--dialog">Long Break <input type="number" class="input__timer-dialog input_longbreak--timer"></div>
            </div> 
            <button class="button__confirm">CONFIRM</button>
        </dialog>
        `;
	}
}
