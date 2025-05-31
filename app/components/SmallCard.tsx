interface SmallCardProp {
    heading: string,
    subheading : string,
    image: string
}
export function SmallCard({heading, subheading, image} :SmallCardProp) {
    return (
        <div className="border-black">
            <div>
                <img src={image} alt="panda" />
                <div>{heading}</div>
            </div>
            <div>{subheading}</div>
        </div>
    )
}