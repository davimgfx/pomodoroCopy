export default class Navbar {
	constructor(root) {
		root.innerHTML = Navbar.getHTML()

        this.el = {
				report: root.querySelector(".report"),
				setting: root.querySelector(".setting"),
				login: root.querySelector(".login"),
				openModalLinkSetting: root.querySelector("#open__modal--setting"),
				closeModalButtonSetting: root.querySelector("#close__modal--setting"),
				myDialogSetting: root.querySelector("#setting-dialog"),
			};

        this.el.openModalLinkSetting.addEventListener("click", (event) => {
                event.preventDefault();
				this.el.myDialogSetting.showModal();
			}); 
        this.el.closeModalButtonSetting.addEventListener("click", () =>{
            this.el.myDialogSetting.close();
        })

        this.el.myDialogSetting.addEventListener("click", (event) => {
            if (event.target === this.el.myDialogSetting) {
            this.el.myDialogSetting.close();
        }

        root.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.el.myDialogSetting.close();
            }
        });
    })
}

	static getHTML() {
		return `
            <div class="logo"> <img src="assets/images/logo.png" alt="logo png" id="imglogo"> Pomofocus
            </div>
            <nav class="nav-bar">
                <ul>
                    <li><a href="" class="report">Report</a></a>
                    </li>
                    <li><a href="#" class="setting" id="open__modal--setting">Setting</a></li>
                    <li><a href="" class="login">Login</a></li>
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
                <div class="pomodoro__timer--dialog ">Pomodoro <input type="number" class="input__timer-dialog input_pomodoro--timer"></div>
                <div class="shortbreak__timer--dialog">Short Break <input type="number" class="input__timer-dialog input_shortbreak--timer"></div>
                <div class="longbreak__timer--dialog">Long Break <input type="number" class="input__timer-dialog input_longbreak--timer"></div>
            </div>
        </dialog>
	</audio>
        `;
	}
}
