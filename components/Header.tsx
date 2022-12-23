import { XmlTag } from "./XmlTag"

export const Header = () => (
    <XmlTag tag="header" role="header">
        <XmlTag tag="nav" role="header">
            <XmlTag scroll={false} tag="a" href="/">Home</XmlTag>
            <XmlTag scroll={false} tag="a" href="/portfolio">Portfolio</XmlTag>
            <XmlTag scroll={false} tag="a" href="/contact">Contact</XmlTag>
        </XmlTag>
    </XmlTag>
)
