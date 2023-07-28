import { Jost, Playfair_Display } from 'next/font/google';
import { Button } from '@/sharedComponents/vawzen';
const font = Jost({ subsets: ['latin'], weight: '500' });

export default function instagram() {
  return (
    <>
      <div className='instagram_content-wrapper' >
        <div className='instagram_wrapper' >
          <button >
            <Button color={['black', 'white']} duration={0.5}  >
              <h1 className={font.className + ' instagram'}>
                you're following on instagram, right?
              </h1>
            </Button>
          </button>
        </div>
      </div>

      <style>{`
          .instagram_content-wrapper {width: 100%;height: 21.5vw;max-height: 350px;display: flex;justify-content: center;align-items: center}
          .instagram {text-align: center;text-transform: uppercase; font-size: clamp(14px, 1.5vw, 19px); }
          .instagram_wrapper { width: 30%; height: 25%; border: 1px solid black}
          .instagram_wrapper button { width: 100%; height: 100%}

         
          @media (max-width: 800px) {
            .instagram_content-wrapper {  height: 110vw;  max-height: none;}
            .instagram_wrapper { width: 70%; height: 20%; border: 1px solid black}

            .instagram {width: 58%;height: 15%; display: flex;align-items: center;justify-content: center;}
          }
    `}</style>
    </>
  );
}
