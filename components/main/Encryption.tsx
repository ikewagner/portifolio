"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";import { redes_sociais } from "@/constants";
import Link from "next/link";
import SkillDataProvider from "../sub/SkillDataProvider";
import ContactText from "../sub/ContactText";
;

const Encryption = () => {
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <ContactText />
  
         
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {redes_sociais.map((image, index) => (
                    <Link href={image.link} key={index}>
                        <SkillDataProvider
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                        />
                    </Link>
                ))}
        </div>
         
          
        
        </div>
  
        
      </motion.div>
    );
};

export default Encryption;
