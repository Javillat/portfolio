
import { useEffect, useState } from 'react';
import { statsWebShow } from '../../data/helper';
import { motion } from 'framer-motion';

const Stats = () => {
    const [stats, setStats] = useState({});

    return (
        <section className="stats">
            <div className="container">
                <div className="stats__content">
                    {statsWebShow.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3>{stat.number}</h3>
                            <p>{stat.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

