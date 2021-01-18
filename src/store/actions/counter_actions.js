import { COUNTER_ADD, COUNTER_SUBTRACT } from "./action_types";

export const counterAdd = () => {
    return {
        type: COUNTER_ADD
    };
}

export const counterSubtract = () => {
    return {
        type: COUNTER_SUBTRACT
    };
}