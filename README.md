# pomodoroCopy ⏰
Um projeto onde simpliquei o site *pomofocus.io*, com todas as funcionalidades de tempo.

## Configurações
O projeto possui 3 modos, o primeiro modo *Pomodoro* onde o temporizador estar de 50minutos, o segundo modo *Short Break* de 5 minutos, e o terceiro modo "Long Break" de 15 minutos

## Alterar Tempo
Para alterar o tempo dos temporizadores, baixe o projeto, abra ele no seu editor de Codigo preferido, vai na pasta js arquivo Timer.js e altere *this.remainingSeconds*. Por exemplo
### Para alterar do pomodoro
Apague o número 50 em this.remainingSeconds e escreva o tempo que desejar
```
this.el.pomodoro.addEventListener("click", (event) => {
			event.preventDefault();
			this.remainingSeconds = 50 * 60; // ^^Edite aqui^^
			this.play = 0;
			this.el.minutes.textContent = "50";
			this.el.seconds.textContent = "00";
			this.el.pomodoro.classList.add("select--one");
			this.el.shortBreak.classList.remove("select--one");
			this.el.longBreak.classList.remove("select--one");
			document.querySelector("body").style.background = "#BA4949";
			document.querySelector(".timer").style.background = "#C15C5C";
			document.querySelector("link[rel*='icon']").href =
				"assets/images/logored.png";
			document.title = "50:00 - Time to focus!";
		});
```
