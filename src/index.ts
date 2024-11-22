import { ReflexElement, ReflexNode, ReflexRootId, ReflexRootInstances } from "./types/index.types";

const ROOT_ID: ReflexRootId = "ReflexRootId"
const rootInstances: ReflexRootInstances = []

const rootId = 0;


const dereferenceElement = ( element: ReflexElement ): ReflexElement => {
    return Object.assign( {}, element )
}

const isRootNode = ( node: ReflexNode ): boolean => {
    return node.id === ROOT_ID
}

type RenderArgs = {
    element: ReflexElement,
    node: ReflexNode
}
const render = ( { element, node }: RenderArgs ): void => {
    // Check if node has alread been rendered.
    // If so, update it. Otherwise mount it.
    // if (isRootNode(node)) {
    // update(element, node)
    // } else {
    // mount(element, node)
    // }
}


