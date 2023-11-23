"use client";
import Link from 'next/link';
import { sectionTitleText, services } from '../serviceList';
import Image from "next/image";
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


const HomeServices = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0 });
        }
    }, [controls, inView]);
  const servicesList = services.slice(0, 6).map((item, index) => {
    return (
        <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="itemList"
        >
            <h4 className="srevceN">{item.title}</h4>
            <p>
                {item.description.length > 70
                    ? `${item.description.slice(0, 70)}...`
                    : item.description}
            </p>
        </motion.div>
    );
  });


  return (
    <section className='serviceSection'>

      <div className='w-full md:w-2/5'>
        <Image width={50000} height={5000} src="/images/cargo.webp" alt='service-img' className='' />
      </div>
      <div className='w-full md:w-1/2'>
        <h3 className='serviceTitle'>
          {sectionTitleText}
        </h3>

        <div className='slist'>
          {servicesList}
        </div>

        <Link href="/services" className='btn mt-11'>View more services <i
          className="fas fa-arrow-alt-circle-right"></i></Link>
      </div>
    </section>
  )
}

export default HomeServices
