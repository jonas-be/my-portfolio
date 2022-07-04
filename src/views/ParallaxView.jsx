import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ReactComponent as Svg1 } from '../media/Shape1.svg';
import { ReactComponent as Svg1t } from '../media/Shape1t.svg';

export default function ParallaxView() {
    return (
        <div>

            <Parallax pages={4}>

                <ParallaxLayer >
                    <div className='min-h-[calc(100vh - 2rem)] pt-8 flex flex-col items-stretch justify-evenly overflow-hidden relative
                    before:w-7 before:h-7 bg-slate-600 before:absolute anm '>

                    </div>
                </ParallaxLayer>


                <ParallaxLayer offset={0.5} speed={1.5}>
                    <Svg1t />
                    <Svg1t className='h-1/2' />
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={1.75}>
                    <Svg1 />
                    <Svg1 className='h-1/2' />
                </ParallaxLayer>

                <ParallaxLayer offset={.4} speed={0.25} >
                    <h1 className='text-8xl font-bold text-white'>Hey</h1>
                </ParallaxLayer>






            </Parallax>



        </div>
    )
}
