import { motion } from "framer-motion"


function Welcome ({name}) {

    return (
    
        <motion.div initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
        }}
        >
            <h1 style={{color: '#fff'}}>Welcome {name} !</h1>
        </motion.div>
    )

}

export default Welcome