import fridge from '../assets/products/fridge.png'
import airconditioner from '../assets/products/airconditioner.png'
import iron from '../assets/products/iron.png'
import microwave from '../assets/products/microwave.png'
import minibar from '../assets/products/minibar.png'
import vacuum from '../assets/products/vacuum.png'
import waterfilter from '../assets/products/waterfilter.png'
import washanddry from '../assets/products/washanddry.png'
import winecellar from '../assets/products/winecellar.png'

export const Products = () => {
    return(
        <div className="mx-32">
            <h4 className="font-bold text-2xl text-white">Produtos que consertamos</h4>

            <div className='flex gap-3 overflow-hidden pt-4 overflow-x-auto no-scrollbar'>
                <img src={fridge} alt="geladeira"/>
                <img src={airconditioner} alt="ar-condicionado"/>
                <img src={iron} alt="ferro"/>
                <img src={microwave} alt="micro-ondas"/>
                <img src={minibar} alt="minibar"/>
                <img src={vacuum} alt="aspirador"/>
                <img src={waterfilter} alt="filtro de água"/>
                <img src={washanddry} alt="lava e seca"/>
                <img src={winecellar} alt="adega"/>
            </div>
        </div>
    )
}