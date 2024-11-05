import type {
    HTMLAnchorAttributes,
    HTMLAreaAttributes,
    HTMLAttributes,
    HTMLAudioAttributes,
    HTMLBaseAttributes,
    HTMLBlockquoteAttributes,
    HTMLButtonAttributes,
    HTMLCanvasAttributes,
    HTMLColAttributes,
    HTMLColgroupAttributes,
    HTMLDataAttributes,
    HTMLDelAttributes,
    HTMLDetailsAttributes,
    HTMLDialogAttributes,
    HTMLEmbedAttributes,
    HTMLFieldsetAttributes,
    HTMLFormAttributes,
    HTMLHtmlAttributes,
    HTMLIframeAttributes,
    HTMLImgAttributes,
    HTMLInputAttributes,
    HTMLInsAttributes,
    HTMLKeygenAttributes,
    HTMLLabelAttributes,
    HTMLLiAttributes,
    HTMLLinkAttributes,
    HTMLMapAttributes,
    HTMLMenuAttributes,
    HTMLMetaAttributes,
    HTMLMeterAttributes,
    HTMLObjectAttributes,
    HTMLOlAttributes,
    HTMLOptgroupAttributes,
    HTMLOptionAttributes,
    HTMLOutputAttributes,
    HTMLParamAttributes,
    HTMLProgressAttributes,
    HTMLQuoteAttributes,
    HTMLScriptAttributes,
    HTMLSelectAttributes,
    HTMLSlotAttributes,
    HTMLSourceAttributes,
    HTMLStyleAttributes,
    HTMLTableAttributes,
    HTMLTdAttributes,
    HTMLTemplateAttributes,
    HTMLTextareaAttributes,
    HTMLThAttributes,
    HTMLTimeAttributes,
    HTMLTrackAttributes,
    HTMLVideoAttributes,
    HTMLWebViewAttributes,
    SVGAttributes,
} from "svelte/elements"

/**
 * A clean version of the `SvelteHTMLElements` type, from the `svelte/elements` module.
 * It doesn't include the Svelte special elements (`svelte:window` etc.), and only includes known valid HTML elements.
 */
export type HtmlElements = {
    a: HTMLAnchorAttributes
    abbr: HTMLAttributes<HTMLElement>
    address: HTMLAttributes<HTMLElement>
    area: HTMLAreaAttributes
    article: HTMLAttributes<HTMLElement>
    aside: HTMLAttributes<HTMLElement>
    audio: HTMLAudioAttributes
    b: HTMLAttributes<HTMLElement>
    base: HTMLBaseAttributes
    bdi: HTMLAttributes<HTMLElement>
    bdo: HTMLAttributes<HTMLElement>
    big: HTMLAttributes<HTMLElement>
    blockquote: HTMLBlockquoteAttributes
    body: HTMLAttributes<HTMLBodyElement>
    br: HTMLAttributes<HTMLBRElement>
    button: HTMLButtonAttributes
    canvas: HTMLCanvasAttributes
    caption: HTMLAttributes<HTMLElement>
    cite: HTMLAttributes<HTMLElement>
    code: HTMLAttributes<HTMLElement>
    col: HTMLColAttributes
    colgroup: HTMLColgroupAttributes
    data: HTMLDataAttributes
    datalist: HTMLAttributes<HTMLDataListElement>
    dd: HTMLAttributes<HTMLElement>
    del: HTMLDelAttributes
    details: HTMLDetailsAttributes
    dfn: HTMLAttributes<HTMLElement>
    dialog: HTMLDialogAttributes
    div: HTMLAttributes<HTMLDivElement>
    dl: HTMLAttributes<HTMLDListElement>
    dt: HTMLAttributes<HTMLElement>
    em: HTMLAttributes<HTMLElement>
    embed: HTMLEmbedAttributes
    fieldset: HTMLFieldsetAttributes
    figcaption: HTMLAttributes<HTMLElement>
    figure: HTMLAttributes<HTMLElement>
    footer: HTMLAttributes<HTMLElement>
    form: HTMLFormAttributes
    h1: HTMLAttributes<HTMLHeadingElement>
    h2: HTMLAttributes<HTMLHeadingElement>
    h3: HTMLAttributes<HTMLHeadingElement>
    h4: HTMLAttributes<HTMLHeadingElement>
    h5: HTMLAttributes<HTMLHeadingElement>
    h6: HTMLAttributes<HTMLHeadingElement>
    head: HTMLAttributes<HTMLElement>
    header: HTMLAttributes<HTMLElement>
    hgroup: HTMLAttributes<HTMLElement>
    hr: HTMLAttributes<HTMLHRElement>
    html: HTMLHtmlAttributes
    i: HTMLAttributes<HTMLElement>
    iframe: HTMLIframeAttributes
    img: HTMLImgAttributes
    input: HTMLInputAttributes
    ins: HTMLInsAttributes
    kbd: HTMLAttributes<HTMLElement>
    keygen: HTMLKeygenAttributes
    label: HTMLLabelAttributes
    legend: HTMLAttributes<HTMLLegendElement>
    li: HTMLLiAttributes
    link: HTMLLinkAttributes
    main: HTMLAttributes<HTMLElement>
    map: HTMLMapAttributes
    mark: HTMLAttributes<HTMLElement>
    menu: HTMLMenuAttributes
    menuitem: HTMLAttributes<HTMLElement>
    meta: HTMLMetaAttributes
    meter: HTMLMeterAttributes
    nav: HTMLAttributes<HTMLElement>
    noscript: HTMLAttributes<HTMLElement>
    object: HTMLObjectAttributes
    ol: HTMLOlAttributes
    optgroup: HTMLOptgroupAttributes
    option: HTMLOptionAttributes
    output: HTMLOutputAttributes
    p: HTMLAttributes<HTMLParagraphElement>
    param: HTMLParamAttributes
    picture: HTMLAttributes<HTMLElement>
    pre: HTMLAttributes<HTMLPreElement>
    progress: HTMLProgressAttributes
    q: HTMLQuoteAttributes
    rp: HTMLAttributes<HTMLElement>
    rt: HTMLAttributes<HTMLElement>
    ruby: HTMLAttributes<HTMLElement>
    s: HTMLAttributes<HTMLElement>
    samp: HTMLAttributes<HTMLElement>
    slot: HTMLSlotAttributes
    script: HTMLScriptAttributes
    search: HTMLAttributes<HTMLElement>
    section: HTMLAttributes<HTMLElement>
    select: HTMLSelectAttributes
    small: HTMLAttributes<HTMLElement>
    source: HTMLSourceAttributes
    span: HTMLAttributes<HTMLSpanElement>
    strong: HTMLAttributes<HTMLElement>
    style: HTMLStyleAttributes
    sub: HTMLAttributes<HTMLElement>
    summary: HTMLAttributes<HTMLElement>
    sup: HTMLAttributes<HTMLElement>
    table: HTMLTableAttributes
    template: HTMLTemplateAttributes
    tbody: HTMLAttributes<HTMLTableSectionElement>
    td: HTMLTdAttributes
    textarea: HTMLTextareaAttributes
    tfoot: HTMLAttributes<HTMLTableSectionElement>
    th: HTMLThAttributes
    thead: HTMLAttributes<HTMLTableSectionElement>
    time: HTMLTimeAttributes
    title: HTMLAttributes<HTMLTitleElement>
    tr: HTMLAttributes<HTMLTableRowElement>
    track: HTMLTrackAttributes
    u: HTMLAttributes<HTMLElement>
    ul: HTMLAttributes<HTMLUListElement>
    var: HTMLAttributes<HTMLElement>
    video: HTMLVideoAttributes
    wbr: HTMLAttributes<HTMLElement>
    webview: HTMLWebViewAttributes
    svg: SVGAttributes<SVGSVGElement>

    animate: SVGAttributes<SVGAnimateElement>
    animateMotion: SVGAttributes<SVGElement>
    animateTransform: SVGAttributes<SVGAnimateTransformElement>
    circle: SVGAttributes<SVGCircleElement>
    clipPath: SVGAttributes<SVGClipPathElement>
    defs: SVGAttributes<SVGDefsElement>
    desc: SVGAttributes<SVGDescElement>
    ellipse: SVGAttributes<SVGEllipseElement>
    feBlend: SVGAttributes<SVGFEBlendElement>
    feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>
    feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>
    feComposite: SVGAttributes<SVGFECompositeElement>
    feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>
    feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>
    feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>
    feDistantLight: SVGAttributes<SVGFEDistantLightElement>
    feDropShadow: SVGAttributes<SVGFEDropShadowElement>
    feFlood: SVGAttributes<SVGFEFloodElement>
    feFuncA: SVGAttributes<SVGFEFuncAElement>
    feFuncB: SVGAttributes<SVGFEFuncBElement>
    feFuncG: SVGAttributes<SVGFEFuncGElement>
    feFuncR: SVGAttributes<SVGFEFuncRElement>
    feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>
    feImage: SVGAttributes<SVGFEImageElement>
    feMerge: SVGAttributes<SVGFEMergeElement>
    feMergeNode: SVGAttributes<SVGFEMergeNodeElement>
    feMorphology: SVGAttributes<SVGFEMorphologyElement>
    feOffset: SVGAttributes<SVGFEOffsetElement>
    fePointLight: SVGAttributes<SVGFEPointLightElement>
    feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>
    feSpotLight: SVGAttributes<SVGFESpotLightElement>
    feTile: SVGAttributes<SVGFETileElement>
    feTurbulence: SVGAttributes<SVGFETurbulenceElement>
    filter: SVGAttributes<SVGFilterElement>
    foreignObject: SVGAttributes<SVGForeignObjectElement>
    g: SVGAttributes<SVGGElement>
    image: SVGAttributes<SVGImageElement>
    line: SVGAttributes<SVGLineElement>
    linearGradient: SVGAttributes<SVGLinearGradientElement>
    marker: SVGAttributes<SVGMarkerElement>
    mask: SVGAttributes<SVGMaskElement>
    metadata: SVGAttributes<SVGMetadataElement>
    mpath: SVGAttributes<SVGElement>
    path: SVGAttributes<SVGPathElement>
    pattern: SVGAttributes<SVGPatternElement>
    polygon: SVGAttributes<SVGPolygonElement>
    polyline: SVGAttributes<SVGPolylineElement>
    radialGradient: SVGAttributes<SVGRadialGradientElement>
    rect: SVGAttributes<SVGRectElement>
    stop: SVGAttributes<SVGStopElement>
    switch: SVGAttributes<SVGSwitchElement>
    symbol: SVGAttributes<SVGSymbolElement>
    text: SVGAttributes<SVGTextElement>
    textPath: SVGAttributes<SVGTextPathElement>
    tspan: SVGAttributes<SVGTSpanElement>
    use: SVGAttributes<SVGUseElement>
    view: SVGAttributes<SVGViewElement>
}

/**
 * Every known valid HTML tags.
 */
export type HtmlTags = keyof HtmlElements

/**
 * Same as `HtmlTags`, but with `undefined`, for optional props.
 */
export type OptionalHtmlTags = HtmlTags | undefined

/**
 * Filters out the `on` event attributes from element attributes.
 */
export type FilterNonEventAttributes<T> = {
    [K in keyof T as K extends `on${string}` ? never : K]: T[K]
}

/**
 * Returns known valid attributes of a given HTML tag.
 * TTag is the HTML tag name, or `undefined` for the default tag.
 * TDefault is the default HTML tag name, if TTag is `undefined`.
 */
export type RestProps<
    TTag extends OptionalHtmlTags,
    TDefault extends HtmlTags,
> = FilterNonEventAttributes<
    HtmlElements[TTag extends undefined ? TDefault : TTag]
>
