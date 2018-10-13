interface KeyBindingEvents {
    Left: () => any;
    Right: () => any;
    Up: () => any;
    Down: () => any;
}

export default class KeyBindings {
    constructor(events: KeyBindingEvents) {
        window.addEventListener('keydown', (e) => {
            if(e.which === 119) {
                events.Up();
            }
            if(e.which === 115) {
                events.Down();
            }
            if(e.which === 97) {
                events.Left();
            }
            if(e.which === 100) {
                events.Right();
            }
        });
    }
}