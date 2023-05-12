import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

interface Image {
    src: string;
    alt: string;
}

interface FigureProp {
    index: number;
    image: Image;
    openModal: any;
}

function Figure(props: FigureProp) {
    const { image, index, openModal} = props;

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [50, 100]);
    const scalePercentage = useTransform(scale, (s) => `${s}%`);
    const blurValue = useTransform(scrollYProgress, [0, 1], [5, 0]);
    const blur = useTransform(blurValue, (bv) => `blur(${bv}px)`);



    return (
        <motion.figure onClick={openModal} ref={ref} style={{opacity, scale: scalePercentage, filter: blur}}>
            <img
                className={'item' + index}
                src={image.src}
                alt={image.alt}
            />
        </motion.figure>
    );
}

export default Figure;
