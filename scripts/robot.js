class Robot {
    constructor(height = 100, width = 100) {
        this.height = height;
        this.width = width;
        this.image = '';
        this.x = 0;
        this.y = 0;
        this.robot = new Image(width, height);
        this.robot.src = '';
        this.orientation = '';
        this.placed = false;
    }

    place(xNum,yNum,orientation) {
        let x = Number(xNum)
        let y = Number(yNum)
        if (x >= 0 && x <= 4 && x % 1 === 0 && y >= 0 && y <= 4 && y % 1 === 0) {
            this.placed = true;
            this.setX(x * 100);
            this.setY(y * 100);
            this.setOrientation(orientation)
        }
    }

    go(actions) {
        if (this.placed) {
            for(let i = 0; i < actions.length; i++) {
                let timer = 500;
                let action = actions[i].trim().toUpperCase();
                switch(action) {
                    case 'MOVE':
                            ((i) => {
                                setTimeout(() => {
                                    this.move();
                                }, timer * i);
                            })(i);  
                            timer += 500;
                        break;
                    case 'LEFT':
                            ((i) => {
                                setTimeout(() => {
                                    this.rotate('LEFT');
                                }, timer * i);
                            })(i);  
                        break;
                    case 'RIGHT':
                            ((i) => {
                                setTimeout(() => {
                                    this.rotate('RIGHT');
                                }, timer * i);
                            })(i);  
                        break;
                    case 'REPORT':
                            ((i) => {
                                setTimeout(() => {
                                    this.report();
                                }, timer * i);
                            })(i);  
                        break;
                } 
            } 
        }
    }

    getRobot() {
        return this.robot;
    }

    setImage(path) {
        this.image = path
        this.robot.src = path;
    }

    getImage() {
        return this.image;
    }

    getHeight() {
        return this.height
    }

    getWidth() {
        return this.width
    }

    setX(x) {        
        if (x > 400) {
            this.x = 400;
        } else if (x < 0) {
            this.x = 0;
        } else {
            this.x = x
        }
    }

    getX() {
        return this.x
    }

    setY(y) {
        if (y > 400) {
            this.y = 400;
        } else if (y < 0) {
            this.y = 0;
        } else {
            this.y = y;
        }
    }

    getY() {
        return this.y
    }

    setOrientation(direction) {
        switch(direction) {
            case 'NORTH':
              this.setImage('./images/robot-north.png');
              this.orientation = 'NORTH'
              break;
            case 'SOUTH':
                this.setImage('./images/robot-south.png');
                this.orientation = 'SOUTH'
              break;
            case 'EAST':
                this.setImage('./images/robot-east.png');
                this.orientation = 'EAST'
              break;
            case 'WEST':
                this.setImage('./images/robot-west.png');
                this.orientation = 'WEST'
                break;
        }
    }

    rotate(direction) {
        switch(direction) {
            case 'RIGHT':
                if (this.orientation === 'NORTH') {
                    this.setImage('./images/robot-east.png');
                    this.orientation = 'EAST'
                } else if (this.orientation === 'SOUTH') {
                    this.setImage('./images/robot-west.png');
                    this.orientation = 'WEST'
                } else if (this.orientation === 'EAST') {
                    this.setImage('./images/robot-south.png');
                    this.orientation = 'SOUTH'
                } else if (this.orientation === 'WEST') {
                    this.setImage('./images/robot-north.png');
                    this.orientation = 'NORTH'
                }
                break;
            case 'LEFT':
                if (this.orientation === 'NORTH') {
                    this.setImage('./images/robot-west.png');
                    this.orientation = 'WEST'
                } else if (this.orientation === 'SOUTH') {
                    this.setImage('./images/robot-east.png');
                    this.orientation = 'EAST'
                } else if (this.orientation === 'EAST') {
                    this.setImage('./images/robot-north.png');
                    this.orientation = 'NORTH'
                } else if (this.orientation === 'WEST') {
                    this.setImage('./images/robot-south.png');
                    this.orientation = 'SOUTH'
                }
                break;
            
        }
    }

    getOrientation() {
        return this.orientation;
    }

    move() {
        switch(this.orientation) {
            case 'NORTH':
                for(let i = 0; i < 100; i++)  {

                    ((i) => {
                        setTimeout(() => {
                            let y = this.y;
                            this.setY(y + 1);
                        }, 2 * i);
                    })(i);  
                } 

                break;
            case 'SOUTH':
                for(let i = 0; i < 100; i++) {

                    ((i) => {
                        setTimeout(() => {
                            let y = this.y;
                            this.setY(y - 1);
                        }, 2 * i);
                    })(i);  
                } 
              break;
            case 'EAST':
                for(let i = 0; i < 100; i++) {

                    ((i) => {
                        setTimeout(() =>{
                            let x = this.x;
                            this.setX(x + 1);
                        }, 2 * i);
                    })(i);  
                } 
              break;
            case 'WEST':
                for(let i = 0; i < 100; i++) {

                    ((i) => {
                        setTimeout(() => {
                            let x = this.x;
                            this.setX(x - 1);
                        }, 2 * i);
                    })(i);  
                } 
                break;
        }
    }

    report() {
        let report = document.createElement('div');
        report.classList.add('report');
        report.innerHTML = `<h2>Output: ${this.x / 100}, ${this.y / 100}, ${this.getOrientation()}</h2>`
        document.querySelector('body').appendChild(report);
        let output = {x: this.x / 100, y: this.y / 100, orientation: this.getOrientation()}
        return output
    }
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Robot;
} else {
    window.Robot = Robot;
}



