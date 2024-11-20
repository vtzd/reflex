import { ElementPayload } from "./types/index.types";

const createElement = (payload: ElementPayload) => {
    // Remove references
    const { config, children } = Object.assign({}, payload);
    return { config, children }
}

