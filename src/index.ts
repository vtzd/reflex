import { ReflexElement, ReflexNode, ReflexRootId, ReflexRootInstances } from "./types/index.types";

const ROOT_KEY: ReflexRootId = "ReflexRootId"
const rootInstances: ReflexRootInstances = []

let rootId = 0;


const createElement = (payload: ReflexElement) => {
    // Remove references
    const { config, children } = Object.assign({}, payload);
    return { config, children }
}

const isRootNode = (node: ReflexNode) => {

}

const render = (element: ReflexElement, node: ReflexNode) => {
    // Check if node has alread been rendered.
    // If so, update it. Otherwise mount it.
    // if (isRootNode(node)) {
    // update(element, node)
    // } else {
    // mount(element, node)
    // }
}


