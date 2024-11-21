export enum ReflexHTMLTag {
    DIV = 'div',
    SPAN = 'span',
    P = 'p',
    UL = 'ul',
    OL = 'ol',
    LI = 'li',
    FORM = 'form',
    INPUT = 'input',
    BUTTON = 'button',
    A = 'a',
    IMG = 'img'
}
export type ReflexElementConfig = unknown

export type ReflexElement = {
    type: ReflexHTMLTag,
    config: ReflexElementConfig
    children: ReflexElement[]
}

export type ReflexRootId = "ReflexRootId"
export type ReflexNode = { id: string }
export type ReflexRootInstances = ReflexNode[]

