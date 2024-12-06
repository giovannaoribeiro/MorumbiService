import calendar from '../assets/calendar.png'
import person from '../assets/person.png'
import star from '../assets/star.png'
import pin from '../assets/pin.png'

export const About = () => {
    return(
        <div className="bg-black">
            <div className="mx-32 pt-8">
                <h4 className="font-bold text-2xl text-white pb-4">Sobre nós</h4>

                <div className="text-white flex gap-3">
                    <div className="bg-Black px-5 py-5 rounded-2xl border-2 border-white/5 grid justify-end">
                        <h1 className='w-56'>No mercado desde 2004, <br/> assim atuando a mais <br/> de 20 anos</h1>

                        <div className='flex justify-end'>
                            <img src={calendar} alt="calendar icon" className='py-1'/>
                            <h1 className='font-semibold text-3xl'>20+</h1>
                        </div>
                    </div>

                    <div className="bg-Black px-5 py-4 rounded-2xl border-2 border-white/5">
                        <h1 className='w-52'>Contamos com mais de <br/> 10.000 clientes <br/> satisfeitos</h1>

                        <div className='flex justify-end'>
                            <img src={person} alt="person icon" className='py-1'/>
                            <h1 className='font-semibold text-3xl'>10K+</h1>
                        </div>
                    </div>

                    <div className="bg-Black px-5 py-5 rounded-2xl border-2 border-white/5">
                        <h1 className='w-56'>Atingimos um total de <br/> nota de avaliação de <br/> mais de 4.5</h1>

                        <div className='flex justify-end'>
                            <img src={star} alt="star icon" className='py-1'/>
                            <h1 className='font-semibold text-3xl'>4.5+</h1>
                        </div>
                    </div>

                    <div className="bg-Black px-5 py-5 rounded-2xl border-2 border-white/5">
                        <h1 className='w-52'>Conquistamos clientes <br/> em toda São Paulo <br/> capital</h1>

                        <div className='flex justify-end'>
                            <img src={pin} alt="pin icon" className='py-1'/>
                            <h1 className='font-semibold text-3xl'>SP</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}