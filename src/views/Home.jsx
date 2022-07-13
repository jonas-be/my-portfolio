import Header from '../components/Header'
import Footer from '../components/Footer'
import OptionLinkButton from '../components/OptionLinkButton'

function Home() {
    return (
        <div className='bg-white dark:bg-costum-gray-700 min-h-[100vh]'>


            <Header />

            <div className='h-[25vh]' />


            <h1 className='text-violet-500  text-center text-4xl font-bold'>Hey</h1>
            <h1 className='text-violet-300  text-center text-6xl font-bold'>Hey</h1>
            <h1 className='text-costum-gray-100 dark:text-white text-center text-8xl font-bold'>Hey</h1>

            <br />
            <br />
            <br />


            <div className='flex justify-around items-center py-3 md:px-16 lg:px-32 xl:px-64'>
                <OptionLinkButton link="/" icon={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill='currentColor' width="40px" height="40px" viewBox="0 0 330 330"><path d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999	c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314	c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053	v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5	c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z" /></svg>} />
                <OptionLinkButton link="/desk" icon={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill='currentColor' width="40px" height="40px" viewBox="0 0 60 60"><path d="M59,28h-1v-9h-3h-2h-3v9H33v-3h12.658C46.949,25,48,23.949,48,22.658V21v-2V2.342C48,1.051,46.949,0,45.658,0H14.342	C13.051,0,12,1.051,12,2.342V19v2v1.658C12,23.949,13.051,25,14.342,25H27v3H1c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h1v25	c0,0.553,0.447,1,1,1h2.513c0.526,0,0.963-0.408,0.998-0.934L8.182,34h43.637l1.671,25.066C53.524,59.592,53.961,60,54.487,60H57	c0.553,0,1-0.447,1-1V34h1c0.553,0,1-0.447,1-1v-4C60,28.447,59.553,28,59,28z M55,21h1v7h-1V21z M52,21h1v7h-1V21z M14,2.342	C14,2.153,14.153,2,14.342,2h31.316C45.847,2,46,2.153,46,2.342V19H14V2.342z M14.342,23C14.153,23,14,22.847,14,22.658V21h32v1.658	C46,22.847,45.847,23,45.658,23H33h-6H14.342z M29,25h2v3h-2V25z M58,32h-1c-0.553,0-1,0.447-1,1v25h-0.577l-1.671-25.066	C53.717,32.408,53.28,32,52.754,32H7.246c-0.526,0-0.963,0.408-0.998,0.934L4.577,58H4V33c0-0.553-0.447-1-1-1H2v-2h25h6h17h3h2h3	V32z" /></svg>} />
                <OptionLinkButton link="/404" icon={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill='currentColor' width="40px" height="40px" viewBox="0 0 52 52"><path d="M26,2C12.8,2,2,12.8,2,26s10.8,24,24,24s24-10.8,24-24S39.2,2,26,2z M8,26c0-9.9,8.1-18,18-18	c3.9,0,7.5,1.2,10.4,3.3L11.3,36.4C9.2,33.5,8,29.9,8,26z M26,44c-3.9,0-7.5-1.2-10.4-3.3c5.1-5.1,19.3-19.3,25.1-25.1	C42.8,18.5,44,22.1,44,26C44,35.9,35.9,44,26,44z"/></svg>} />

            </div>


            <div className='h-[32.5vh]' />

            <Footer />

        </div>
    )
}

export default Home
