import samsung from '../assets/brands/samsung.png'
import brastemp from '../assets/brands/brastemp.png'
import philips from '../assets/brands/philips.png'
import panasonic from '../assets/brands/panasonic.png'
import midea from '../assets/brands/midea.png'
import electrolux from '../assets/brands/electrolux.png'
import lg from '../assets/brands/lg.png'
import consul from '../assets/brands/consul.png'

export const Brands = () => {
    return(
        <div className='bg-gradient-to-t from-black to-transparent'>
            <div className="mx-32 mt-8">
                <h4 className="font-bold text-2xl text-white">Marcas com as quais trabalhamos</h4>

                <div className='flex gap-3 overflow-hidden pt-4 overflow-x-auto no-scrollbar'>
                    <img src={samsung} alt="samsung"/>
                    <img src={brastemp} alt="brastemp"/>
                    <img src={philips} alt="philips"/>
                    <img src={panasonic} alt="panasonic"/>
                    <img src={midea} alt="midea"/>
                    <img src={electrolux} alt="electrolux"/>
                    <img src={lg} alt="lg"/>
                    <img src={consul} alt="consul"/>
                </div>
            </div>
        </div>
    )
}