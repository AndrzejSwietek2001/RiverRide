import { Plane } from "../components/Plane";
import Movements from "./decorators/Movements";

const KEYS = {
    "left": 37,
    "up": 38,
    "right": 39,
    "down": 40,
    "w": 87,
    "s": 83,
    "a": 65,
    "d": 68,
    "spacebar":32
};

export default class Keyboard {
    domElement: HTMLElement|Window;
    model: Plane;
    constructor(domElement: HTMLElement|Window, model: Plane) {

        this.domElement = domElement;
        this.model = model

        // events
        this.domElement.addEventListener('keydown', event => this.onKeyDown(event), false);
        this.domElement.addEventListener('keyup', event => this.onKeyUp(event), false);


    }

    onKeyUp(event) {
        switch (event.keyCode) {
            case KEYS.up:
            case KEYS.w:
                break;
            case KEYS.left:
            case KEYS.a:
                Movements.moveLeft = false
                break;
            case KEYS.right:
            case KEYS.d:
                Movements.moveRight = false;
                break;
            case KEYS.down:
            case KEYS.s:
                break;
            case KEYS.spacebar:
                Movements.attack = false


        }
    }

    onKeyDown(event) {
        switch (event.keyCode) {
            case KEYS.up:
            case KEYS.w:
                break;
            case KEYS.left:
            case KEYS.a:
                Movements.moveLeft = true
                console.log('left')
                break;
            case KEYS.right:
            case KEYS.d:
                Movements.moveRight = true
                console.log('right')
                break;
            case KEYS.down:
            case KEYS.s:
                break;
            case KEYS.spacebar:
                Movements.attack = true
                console.log('attack')
                break
        }

    }


}
