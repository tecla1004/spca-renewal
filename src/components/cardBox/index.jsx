import Image from "next/image";
import classNames from "classnames";
import dogImage from '../../../public/assets/images/Group 31.png'
import arrowIcon from  '../../../public/assets/icons/right-arrow.png'

const CardBox = ({
  cardData,
  cardBgColor,
  textSize,
  textColor,
  btnTextColor,
  bgColor,
}) => {

  
  return (
    <div className='mx-auto sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-8'>
      <div className="flex flex-row flex-wrap justify-center">
        <Image
          src={dogImage}
          alt='dog image'
        />
      </div>
      <h2 className='text-4xl text-center pb-8 font-bold'>How you can give to animals</h2>
      <div className="flex flex-row flex-wrap justify-center gap-6  mx-2 ">
        {cardData.map((data, index) => (
          <div key={index} className={classNames(
            'border-2 p-5 rounded-3xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4 hover:bg-light-blue',
            cardBgColor 
            )}>
             
            <div className={
              classNames(
                "flex justify-start",
                
              )
            }>
               <Image
                  src={data.imgUrl}
                  alt='icon'
                  width='auto'
                  height='auto'
                  layout={"cover"}               
                />
              <h3 className={classNames(
                'pl-4 leading-9',
                textSize='text-xl')}>{data.title}
              </h3>               
            </div>
            <p className='py-6 text-left'>{data.desc}</p>
            <div className="flex flex-row justify-start">
              <button className='py-2 rounded-full border-2 w-24 text-center'>{data.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardBox;

