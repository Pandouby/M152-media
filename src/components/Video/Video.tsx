import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface VideoProps {
    videoScr: string;
    posterSrc: string;
}

function Video(props: any) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center center", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [100, 50]);
    const scalePercentage = useTransform(scale, (s) => `${s}%`);
    const blurValue = useTransform(scrollYProgress, [0, 1], [0, 5]);
    const blur = useTransform(blurValue, (bv) => `blur(${bv}px)`);


    const { videoScr, posterSrc } = props;

    return(
        <motion.div className="subsection video" ref={ref} style={{opacity, scale: scalePercentage, filter: blur}}>
            <div className="video-player">
            <video width="100%" poster={posterSrc} controls>
                <source src={videoScr} />
                our browser does not support the video tag.
            </video>
            </div>
        </motion.div>
    );
}

export default Video;