class DateMe {
  #heartsContainer;
  #acceptButton;
  #refuseButton;
  #modal;

  constructor() {
    this.#acceptButton = document.querySelector('.btn:not(.btn-no)');
    this.#heartsContainer = document.getElementById('hearts');
    this.#refuseButton = document.querySelector('.btn-no');
    this.#modal = document.getElementById('modal');

    this.#refuseButton.addEventListener('mouseover', () =>
      this.#deflect(this.#refuseButton),
    );
    this.#refuseButton.addEventListener('click', () =>
      this.#deflect(this.#refuseButton),
    );
    this.#acceptButton.addEventListener('click', () => this.#accept());
  }

  #accept() {
    this.#modal.style.display = 'block';
    this.#createHearts(this.#heartsContainer, 20);

    setTimeout(() => {
      this.#modal.style.animation = 'scaleOut 0.5s forwards';
      setTimeout(() => {
        this.#modal.style.display = 'none';
        setTimeout(() => {
          this.#redirect();
        }, 1000);
      }, 500);
    }, 5000);
  }

  #deflect(btn) {
    btn.style.bottom = this.#generatePosition(10, 90);
    btn.style.left = this.#generatePosition(10, 90);
  }

  #generatePosition(min, max) {
    return `${Math.random() * (max - min) + min}%`;
  }

  #createHearts(container, count) {
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(heart);
    }
  }

  #redirect() {
    location.href =
      'https://www.youtube.com/watch?v=izGwDsrQ1eQ&ab_channel=georgemichaelVEVO';
  }
}

document.addEventListener('DOMContentLoaded', () => new DateMe());