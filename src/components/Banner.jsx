import '../styles/Banner.css'

export default function Banner({title, content, bgColor, fontColor}) {
    return (
        <div className ="banner-container" style={{"background-color": bgColor,
                                            "color":fontColor}}>
            <h2>{title}</h2>
            <p>{content}</p>

        </div>
    )
}