import logo from '../assets/logo.png'

export const Navbar = () => {
    return(
        <div className='flex justify-between pl-12 pr-8 bg-gradient-to-b from-black to-transparent'>
            <img src={logo} alt="logo"/>
            <a href='https://wa.me/message/6HZZIBCTSQ4KK1' className='text-center text-sm font-semibold px-4 py-1 bg-white hover:bg-white/70 rounded-full m-5'>Fale conosco</a>
        </div>
    )
}