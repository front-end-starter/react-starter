"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ink_1 = require("ink");
const Counter = () => {
    const [counter, setCounter] = react_1.useState(0);
    react_1.useEffect(() => {
        const timer = setInterval(() => {
            setCounter(previousCounter => previousCounter + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return react_1.createElement(ink_1.Text, { color: "green" },
        counter,
        " tests passed");
};
ink_1.render(react_1.createElement(Counter, null));
