export const Contact = () => {
    return(
        <div className="bg-white/10 border-2 border-white/5 flex justify-between text-white mx-32 my-8 p-12 py-3 rounded-xl hover:animate-pulse[1] hover:bg-white/20">
            <div className="gap-1">
                <h1 className="font-medium">Agende sua visita técnica por R$ 50,00</h1>
                <d className="text-white/70 text-sm">Taxa sujeita a desconto no valor do orçamento do serviço.</d>
            </div>

            <a href="https://wa.me/message/6HZZIBCTSQ4KK1" className="bg-DarkGray/70 border-2 border-LightGray/70 hover:border-LightGray rounded-full px-6 py-1 m-2 font-medium">Agendar</a>
        </div>
    )
}