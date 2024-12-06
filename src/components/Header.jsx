import header from "../assets/header.png"

export const Header = () => {
    return(
        <div className="">
            <div className="px-12 grid justify-center justify-items-center">
                <div className="text-white gap-4 grid justify-center justify-items-center absolute pt-80 shadow-md">
                    <h1 className="font-bold text-4xl text-center leading-snug">Assistência Técnica <br/> de refrigeração e linha branca</h1>
                    <p>Conserte seus eletrodomésticos com técnicos de confiança.</p>
                </div>

                <img src={header} alt="header image" className="border-2 border-white/60 rounded-3xl"/>
            </div>
        </div>
    )
}