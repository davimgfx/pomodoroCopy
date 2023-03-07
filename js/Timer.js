export default class Timer {
	constructor(root) {
		root.innerHTML = Timer.getHTML();

		this.el = {
			minutes: root.querySelector(".timer__part--minutes"),
			seconds: root.querySelector(".timer__part--seconds"),
			control: root.querySelector(".timer__btn--control"),
			reset: root.querySelector(".timer__btn--reset"),
		};

		this.interval = null;
		this.remainingSeconds = 50*60;

		this.updateInterfaceTime();

		this.el.control.addEventListener("click", () => {});
		this.el.reset.addEventListener("click", () => {});
	}

	updateInterfaceTime() {
		const minutes = Math.floor(this.remainingSeconds / 60);
		const seconds = this.remainingSeconds % 60;

		this.el.minutes.textContent = minutes.toString().padStart(2, "0");
		this.el.seconds.textContent = seconds.toString().padStart(2, "0");
	}

	updateInterfaceControl() {}

	static getHTML() {
		return `
            <nav class="nav__bar--timer">
                <ul>
                    <li class="pomodoro-li"><a href="" class="pomodoro-text">Pomodoro</a></a>
                    </li>
                    <li><a href="" class="shortbreak">Short Break</a></li>
                    <li><a href="" class="longbreak">Long Break</a></li>
                </ul>
            </nav>
			<div class="timer__clock">
                <span class="timer__part timer__part--minutes">00</span><span class="timer__part">:</span><span class="timer__part timer__part--seconds">00</span>
            </div>
			<button id="button" class="timer__btn--control timer__btn--start">START</button>
            <button type="button" class="timer__btn timer__btn--reset">RESET</button>
		`;
	}
}
