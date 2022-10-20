import { data } from "../data/homepage";

const Logo = () => {
    return (
        <a href={data.headerFooter.logo.url}>
            <img
                src={data.headerFooter.logo.img}
                alt={data.headerFooter.logo.alt}
            />
        </a>
    )
}

export default Logo