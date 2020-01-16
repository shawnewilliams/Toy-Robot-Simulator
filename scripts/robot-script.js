// Canvas
var canvas = document.createElement('canvas');
document.querySelector('.canvas-container').appendChild(canvas);

canvas.width = 500;
canvas.height = 500;

var context = canvas.getContext('2d');
context.translate(0, canvas.height);
context.scale(1, -1);

// Go!
document.querySelector('#Go').addEventListener('click', (e) => {
    e.preventDefault();
    let reports = document.querySelectorAll('.report');
    // Remove Old Output
    [].forEach.call(reports, (report) => {
        report.remove();
    })
    let commands = document.querySelector('#commands').value.split('\n');
    let robot = new Robot();
    let place = commands[0].split(' ');
    let x = place[1];
    let y = place[2];
    let orientation = place[3];
    let actions = commands.slice(1);
    if (place[0].trim().toUpperCase() === 'PLACE') {
        robot.place(x,y,orientation)
    }

    // Animation loop
    window.requestAnimationFrame(function loop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(robot.getRobot(), robot.getX(), robot.getY(), robot.getHeight(), robot.getWidth());
        window.requestAnimationFrame(loop);
    });
    robot.go(actions);
});