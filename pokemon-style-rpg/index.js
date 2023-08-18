console.log('Hello, World!')

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
console.log(canvas);
console.log(c);

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height); 

const image = new Image();
image.src = "./assets/pellet_town.png";
console.log(image);

const playerImage = new Image();
playerImage.src = "./assets/images/playerDown.png";

class Sprite {
  constructor({ position, image, velocity }) {
    this.position = position;
    this.image = image
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  position: {
    x: -700,
    y: -550
  },
  image: image
});

const keys = {
  w: { pressed: false },
  a: { pressed: false },
  s: { pressed: false },
  d: { pressed: false }
}

function animate() {
  window.requestAnimationFrame(animate)
  background.draw();
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 + playerImage.width / 16,
    (canvas.height + playerImage.height) / 2,
    playerImage.width / 4,
    playerImage.height
  );

  if (keys.w.pressed && lastKey === 'w') background.position.y += 3;
  else if (keys.s.pressed && lastKey === 's') background.position.y -= 3;
  else if (keys.a.pressed && lastKey === 'a') background.position.x += 3
  else if (keys.d.pressed && lastKey === 'd') background.position.x -= 3;
}
animate();

let lastKey = '';
console.log({ lastKey });
window.addEventListener('keydown', (e) => {
  console.log(`Why are you pressing the ${e.key} key bro?`);
  switch (e.key) {
    case 'w':
      keys.w.pressed = true;
      lastKey = 'w';
      break;
    case 'a':
      keys.a.pressed = true;
      lastKey = 'a';
      break;
    case 's':
      keys.s.pressed = true;
      lastKey = 's';
      break;
    case 'd':
      keys.d.pressed = true;
      lastKey = 'd';
      break;
    default:
      return
  }
});

window.addEventListener('keyup', (e) => {
  console.log(`Why are you leaving the ${e.key} key bro?`)
  switch (e.key) {
    case 'w':
      keys.w.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 's':
      keys.s.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
    default:
      break;
  }
});
