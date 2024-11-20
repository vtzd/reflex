import { ReflexElement, ReflexNode, ReflexRootId, ReflexRootInstances } from "./types/index.types";

const ROOT_KEY: ReflexRootId = "ReflexRootId"
const rootInstances: ReflexRootInstances = []

let rootId = 0;


const dereferenceElement = (payload: ReflexElement) => Object.assign({}, payload)

const isRootNode = (node: ReflexNode) => { }

const render = (element: ReflexElement, node: ReflexNode) => {
    // Check if node has alread been rendered.
    // If so, update it. Otherwise mount it.
    // if (isRootNode(node)) {
    // update(element, node)
    // } else {
    // mount(element, node)
    // }
}


