import { CountdownCircleTimer } from
    'react-countdown-circle-timer'

export default function QuestionsBox() {
    return (
        //süre, soru sayısını, şıklar soru, sonra ki soru button, son sayfada testi bitir buton, uyarı texti

        <div className='mx-auto container'>
            <div className="mx-auto flex justify-between w-[50%] items-center my-5">
                <div className='text-2xl font-bold'>1/15</div>
                <CountdownCircleTimer
                    size={100}
                    isPlaying
                    duration={7}
                    colors={['#719192', '#C06014', '#8AAE92', '#CD3F3E']}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>

            <div className='mx-auto flex flex-col justify-center w-[50%] gap-10 my-5'>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quam soluta veritatis laborum reprehenderit delectus earum corporis nostrum ab dicta necessitatibus vitae accusamus maiores. Minima nulla culpa amet? Autem, tempora.</h3>
                <ul className="flex flex-col gap-5">
                    <li className='flex gap-5 bg-bgIA'>
                        <span className='border-b border-t h-12 px-5 flex items-center justify-center font-bold'>A</span>
                        <span className='border-b border-t w-full flex items-center px-5'>cevapcevapcevapcevapcevapcevapcevapcevap</span>
                    </li>
                    <li className='flex gap-5 bg-bgIA'>
                        <span className='border-b border-t h-12 px-5 flex items-center justify-center font-bold'>B</span>
                        <span className='border-b border-t  w-full flex items-center px-5'>cevapcevapcevapcevapcevapcevapcevapcevap</span>
                    </li>
                    <li className='flex gap-5 bg-bgIA'>
                        <span className='border-b border-t h-12 px-5 flex items-center justify-center font-bold'>C</span>
                        <span className='border-b border-t  w-full flex items-center px-5'>cevapcevapcevapcevapcevapcevapcevapcevap</span>
                    </li>
                    <li className='flex gap-5 bg-bgIA'>
                        <span className='border-b border-t h-12 px-5 flex items-center justify-center font-bold'>D</span>
                        <span className='border-b border-t  w-full flex items-center px-5'>cevapcevapcevapcevapcevapcevapcevapcevap</span>
                    </li>
                </ul>
                <div className='flex'>
                <button className="border-b border-t h-12 flex items-center justify-center px-10 w-48 mx-auto">
                    <span className="transition-all ease-out hover:-translate-y-1 ">Testten Çık</span>
                </button>
                <button className="border-b border-t h-12 flex items-center justify-center px-10 w-48 mx-auto">
                    <span className="transition-all ease-out hover:-translate-y-1 font-bold">Devam Et</span>
                </button>
                </div>
            </div>
        </div>
    )
}