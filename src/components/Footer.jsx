export const Footer = () => {
    return(
        <div className="bg-black">
            <div className="mx-32 pt-12 pb-24">
                <h1 className="text-white/70">© Morumbi Service</h1>

                <div className="flex justify-between pt-12 text-sm">
                    <ul className="text-white/70">
                        <li className="font-semibold">Formas de pagamento</li>
                        <li>Pix</li>
                        <li>Cartão de crédito</li>
                        <li>Cartão de débito</li>
                        <li>Dinheiro</li>
                    </ul>

                    <ul className="text-white/70">
                        <li className="font-semibold">Fale conosco</li>
                        <li>(11) 3758-4656</li>
                        <li><a href="mailto:morumbiservices@gmail.com" className="underline">morumbiservices@gmail.com</a></li>
                    </ul>

                    <ul className="text-white/70">
                        <li className="font-semibold">Local</li>
                        <li><a href="https://maps.app.goo.gl/pUhnHBLccfAU7MH78" className="underline">Av. Duquesa de Goiás, n° 876, <br/> Vila Tramontano, São Paulo/SP</a></li>
                    </ul>

                    <ul className="text-white/70">
                        <li className="font-semibold">CNPJ</li>
                        <li>45.096.422/0001-40</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}