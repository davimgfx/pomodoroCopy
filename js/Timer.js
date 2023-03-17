export default class Timer {
	constructor(root) {
		root.innerHTML = Timer.getHTML();

		this.el = {
			minutes: root.querySelector(".timer__part--minutes"),
			seconds: root.querySelector(".timer__part--seconds"),
			control: root.querySelector(".timer__btn--control"),
			reset: root.querySelector(".timer__btn--reset"),
			buttonAudio: root.querySelector("#buttonAudio"),
			fisinhAudio: root.querySelector("#finishAudio"),
		}

		this.remainingSeconds = 50*60
		this.interval = null;
		this.el.control.addEventListener("click", () => {
			this.el.buttonAudio.play();
			if(this.interval === null){
				this.start()
				
			} else{
				this.stop()
			}
		});

		this.el.reset.addEventListener("click", () => {
			this.el.buttonAudio.play();
			this.remainingSeconds = 50*60
			this.updateInterfaceTime()
		});
	}

	updateInterfaceTime() {
		const minutes = Math.floor(this.remainingSeconds / 60);
		const seconds = this.remainingSeconds % 60;

		this.el.minutes.textContent = minutes.toString().padStart(2, "0");
		this.el.seconds.textContent = seconds.toString().padStart(2, "0");
	}

	updateInterfaceControl() {
		if (this.interval === null) {
			this.el.control.innerHTML = `<button class="button" class="timer__btn--control timer__btn--start">START</button>`;
			this.el.control.classList.add("timer__btn--start");
			this.el.control.classList.remove("timer__btn--stop");
		} else {
			this.el.control.innerHTML = `<button class="button" class="timer__btn--control timer__btn--start">PAUSE</button>`;
			this.el.control.classList.add("timer__btn--stop");
			this.el.control.classList.remove("timer__btn--start");
		}
	}

	start() {
		if (this.remainingSeconds === 0) return;

		this.interval = setInterval(() => {
			this.remainingSeconds--;
			this.updateInterfaceTime();

			if (this.remainingSeconds == 0) {
				this.el.fisinhAudio.play();
				this.stop();
			}
		}, 1000);

		this.updateInterfaceControl();
	}

	stop() {
		clearInterval(this.interval);

		this.interval = null;

		this.updateInterfaceControl();
	}

	static getHTML() {
		return `
			
            <nav class="nav__bar--timer">
                <ul>
                    <li class="select--one"><a href="" class="pomodoro--text">Pomodoro</a></a>
                    </li>
                    <li><a href="" class="shortbreak--text">Short Break</a></li>
                    <li><a href="" class="longbreak--text">Long Break</a></li>
                </ul>
            </nav>
			<div class="timer__clock">
                <span class="timer__part timer__part--minutes">50</span><span class="timer__part">:</span><span class="timer__part timer__part--seconds">00</span>
            </div>
			<div class="controls">
			<button class="timer__btn--control timer__btn--start button">START</button>
            <button type="button" class="timer__btn timer__btn--reset button">RESET</button>
			</div>
			<audio id="buttonAudio">
				<source src="assets/buttonSound.mp3" type="audio/mpeg">
			</audio>
			<audio id="finishAudio">
				<source src="assets/ding.mp3" type="audio/mpeg">
			</audio>
		`;
	}
}
