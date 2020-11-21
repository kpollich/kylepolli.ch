import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: 40,
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const EnterTransition: React.FunctionComponent = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
