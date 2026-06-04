import{ motion} from 'framer-motion';
import React from 'react';
const TechAnimation = () => {
  return (
    <>
    
<section
  className="flex flex-col justify-center items-center px-2      text-white overflow-hidden"
  id="techstack"
>
 

 
  <div className="relative w-full overflow-hidden border-t border-b my-2 backdrop:blur-sm bg-white/10 rounded-lg">
    <motion.div
      className="flex gap-4 whitespace-nowrap"
      animate={{ x: ["-100%", "0%"] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[
        "/icons/react.png",
        "/icons/tailwind.png",
        "/icons/node.png",
      
        "/icons/html.png",
        "/icons/css.png",
          "/icons/mongodb.png",
        "/icons/javascript.png"
      ].map((icon, idx) => (
        <img
          key={idx}
          src={icon}
          alt="tech-icon"
          className="h-25 w-25 object-contain "
        />
      ))}
    
      {[
        "/icons/react.png",
        "/icons/tailwind.png",
        "/icons/node.png",
        "/icons/html.png",
        "/icons/css.png",
        "/icons/mongodb.png",
        "/icons/javascript.png"
      ].map((icon, idx) => (
        <img
          key={`repeat1-${idx}`}
          src={icon}
          alt="tech-icon"
          className="h-25 w-25 object-contain"
        />
      ))}
    </motion.div>
  </div>

 
  <div className="relative w-full overflow-hidden border-t border-b  backdrop:blur-sm bg-white/10 rounded-lg">
    <motion.div
      className="flex gap-4 whitespace-nowrap"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {[
       /* "/icons/git.svg",
        "/icons/express.svg",
        "/icons/python.svg",
        "/icons/docker.svg",
        "/icons/aws.svg",
        "/icons/vscode.svg",*/
         "/icons/react.png",
        "/icons/tailwind.png",
        "/icons/node.png",
        
        "/icons/html.png",
        "/icons/css.png",
        "/icons/mongodb.png",
        "/icons/javascript.png"
      ].map((icon, idx) => (
        <img
          key={idx}
          src={icon}
          alt="tech-icon"
          className="h-25 w-25 object-contain"
        />
      ))}
      {/* Duplicate for seamless loop */}
      {[
       /* "/icons/git.svg",
        "/icons/express.svg",
        "/icons/python.svg",
        "/icons/docker.svg",
        "/icons/aws.svg",
        "/icons/vscode.svg",*/
         "/icons/react.png",
        "/icons/tailwind.png",
        "/icons/node.png",
       
        "/icons/html.png",
        "/icons/css.png",
         "/icons/mongodb.png",
        "/icons/javascript.png"
      ].map((icon, idx) => (
        <img
          key={`repeat2-${idx}`}
          src={icon}
          alt="tech-icon"
          className="h-25 w-25 object-contain"
        />
      ))}
    </motion.div>
  </div>
</section>

    </>
  )
}

export default TechAnimation    
