# pomodoroCopy ⏰
Este é um projeto inspirado no site Pomofocus.io, que simplifica todas as funcionalidades de tempo. Ele foi criado com o objetivo de ajudar as pessoas a gerenciar melhor seu tempo e aumentar sua produtividade nos estudos e atividades.

## Configurações
O projeto possui três modos diferentes:

* Pomodoro: um temporizador de 50 minutos, ideal para se concentrar em uma tarefa sem distrações.
* Short Break: uma pausa curta de 5 minutos, para descansar e se destrair um pouco.
* Long Break: uma pausa mais longa de 15 minutos, para relaxar e se recuperar após um período de trabalho intenso.

## Alterar Tempo
Caso queira alterar a duração dos temporizadores, siga as instruções abaixo:

Baixe o projeto e abra-o em seu editor de código preferido.
Vá até a pasta js e abra o arquivo Timer.js.
Procure pela linha que contém o código this.remainingSeconds, this.el.minutes.textContent e document.title que define a duração e a estética do temporizador.
Edite o número de segundos de acordo com a duração que deseja definir.

Por exemplo, para alterar a duração do modo Pomodoro para 25 minutos, substitua o valor de **this.remainingSeconds = 50 * 60** por  **25 * 60**,  **this.el.minutes.textContent = "50"** para  **this.el.minutes.textContent = "25"** e **document.title = "50:00 - Time to focus!"** para **document.title = "25:00 - Time to focus!"**:

```
this.el.pomodoro.addEventListener("click", (event) => {
			event.preventDefault();
			this.remainingSeconds = 50 * 60; // <-- Edite aqui 
			this.play = 0;
			this.el.minutes.textContent = "50"; <-- Edite aqui 
			this.el.seconds.textContent = "00";
			this.el.pomodoro.classList.add("select--one");
			this.el.shortBreak.classList.remove("select--one");
			this.el.longBreak.classList.remove("select--one");
			document.querySelector("body").style.background = "#BA4949";
			document.querySelector(".timer").style.background = "#C15C5C";
			document.querySelector("link[rel*='icon']").href =
				"assets/images/logored.png";
			document.title = "50:00 - Time to focus!"; <-- Edite aqui 
		});
```

Resultado final:
```
this.el.pomodoro.addEventListener("click", (event) => {
			event.preventDefault();
			this.remainingSeconds = 25 * 60; 
			this.play = 0;
			this.el.minutes.textContent = "25"; 
			this.el.seconds.textContent = "00";
			this.el.pomodoro.classList.add("select--one");
			this.el.shortBreak.classList.remove("select--one");
			this.el.longBreak.classList.remove("select--one");
			document.querySelector("body").style.background = "#BA4949";
			document.querySelector(".timer").style.background = "#C15C5C";
			document.querySelector("link[rel*='icon']").href =
				"assets/images/logored.png";
			document.title = "25:00 - Time to focus!"; 
		});
```
