import BodyTop from './bodyTop';
import MovingBanner from './movingBanner';
import MovingProducts from './movingProducts';
import Features from './features';

export default function Home(){
    return(
        <div>
        <BodyTop />
        <MovingBanner />
        <Features />
        <MovingProducts />
        </div>
    )
}