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
			pomodoro: root.querySelector(".pomodorobreak--li"),
			shortBreak: root.querySelector(".shortbreak--li"),
			longBreak: root.querySelector(".longbreak--li"),
		};

		// Variables
		this.play = 0;
		this.remainingSeconds = 50 * 60;
		this.interval = null;

		// Pomodoro time
		this.el.pomodoro.addEventListener("click", (event) => {
			event.preventDefault();
			this.remainingSeconds = 50 * 60;
			this.play = 0;
			this.el.minutes.textContent = "50";
			this.el.seconds.textContent = "00";
			this.el.pomodoro.classList.add("select--one");
			this.el.shortBreak.classList.remove("select--one");
			this.el.longBreak.classList.remove("select--one");
			document.querySelector("body").style.background = "#BA4949";
			document.querySelector(".timer").style.background = "#C15C5C";
			document.querySelector("#open__modal--setting").style.background =
				"#c86d6d";
			document.querySelector(".timer__btn--control").style.color = "#BA4949";
			document.querySelector(".timer__btn").style.color = "#BA4949";
			document.querySelector("link[rel*='icon']").href =
				"assets/images/logored.png";
			document.title = "50:00 - Time to focus!";
		});

		// ShortBreak time
		this.el.shortBreak.addEventListener("click", (event) => {
			event.preventDefault();
			this.remainingSeconds = 5 * 60;
			this.play = 1;
			this.el.minutes.textContent = "05";
			this.el.seconds.textContent = "00";
			this.el.shortBreak.classList.add("select--one");
			this.el.longBreak.classList.remove("select--one");
			this.el.pomodoro.classList.remove("select--one");
			document.querySelector("body").style.background = "#7D53A2";
			document.querySelector(".timer").style.background = "#8A65AB";
			document.querySelector("#open__modal--setting").style.background =
				"#9775B5";
			document.querySelector(".timer__btn--control").style.color = "#7D53A2";
			document.querySelector(".timer__btn").style.color = "#7D53A2";
			document.querySelector("link[rel*='icon']").href =
				"assets/images/logopurple.png";
			document.title = "5:00 - Time for a break!";
		});

		// LongBreak time
		this.el.longBreak.addEventListener("click", (event) => {
			event.preventDefault();
			this.remainingSeconds = 15 * 60;
			this.play = 2;
			this.el.minutes.textContent = "15";
			this.el.seconds.textContent = "00";
			this.el.longBreak.classList.add("select--one");
			this.el.shortBreak.classList.remove("select--one");
			this.el.pomodoro.classList.remove("select--one");
			document.querySelector("body").style.background = "#AF4E91";
			document.querySelector(".timer").style.background = "#B7609C";
			document.querySelector("#open__modal--setting").style.background =
			"#BF71A7";
			document.querySelector(".timer__btn--control").style.color = "#AF4E91";
			document.querySelector(".timer__btn").style.color = "#AF4E91";
			document.querySelector("link[rel*='icon']").href = "assets/images/logopink.png";
			document.title = "15:00 - Time for a break!";
		});

		// Start/Pause button
		this.el.control.addEventListener("click", () => {
			this.el.buttonAudio.play();
			if (this.interval === null) {
				this.start();
			} else {
				this.stop();
			}
		});

		// Reset button
		this.el.reset.addEventListener("click", () => {
			this.el.buttonAudio.play();
			if (this.play === 0) this.remainingSeconds = 50 * 60;
			if (this.play === 1) this.remainingSeconds = 5 * 60;
			if (this.play === 2) this.remainingSeconds = 15 * 60;
			this.updateInterfaceTime();
		});
	}

	//Update Dislay (InterfaceTime)
	updateInterfaceTime() {
		const minutes = Math.floor(this.remainingSeconds / 60);
		const seconds = this.remainingSeconds % 60;

		this.el.minutes.textContent = minutes.toString().padStart(2, "0");
		this.el.seconds.textContent = seconds.toString().padStart(2, "0");
	}

	//Update buttons Control (Play/Pause)
	updateInterfaceControl() {
		if (this.interval === null) {
			this.el.control.innerHTML = `<button class="button timer__btn--control timer__btn--start">START</button>`;
			this.el.control.classList.add("timer__btn--start");
			this.el.control.classList.remove("timer__btn--stop");
		} else {
			this.el.control.innerHTML = `<button class="button timer__btn--control timer__btn--start">PAUSE</button>`;
			this.el.control.classList.add("timer__btn--stop");
			this.el.control.classList.remove("timer__btn--start");
		}
	}

	//Starting countdown
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

	//Finished countdown
	stop() {
		clearInterval(this.interval);

		this.interval = null;

		this.updateInterfaceControl();
	}

	static getHTML() {
		return `
            <nav class="nav__bar--timer">
                <ul>
                    <li class="pomodorobreak--li select--one"><a href="" class="pomodoro--text">Pomodoro</a></a>
                    </li>
                    <li class="shortbreak--li"><a href="" class="shortbreak--text">Short Break</a></li>
                    <li class="longbreak--li"><a href="" class="longbreak--text">Long Break</a></li>
                </ul>
            </nav>
			<div class="timer__clock">
                <span class="timer__part timer__part--minutes">50</span><span class="timer__part">:</span><span class="timer__part timer__part--seconds">00</span>
            </div>
			<div class="controls">
			<button class="button timer__btn--control timer__btn--start">START</button>
            <button class="button timer__btn timer__btn--reset">RESET</button>
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
