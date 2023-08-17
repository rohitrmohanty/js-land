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

image.onload = () => {
  c.drawImage(image, -700, -550);
  playerImage.onload = () => {
    c.drawImage(
      playerImage,
      0,
      0,
      playerImage.width / 4,
      playerImage.height,
      canvas.width / 2 + playerImage.width / 16,
      (canvas.height - playerImage.height) / 2,
      playerImage.width / 4,
      playerImage.height
    );
  }
}
