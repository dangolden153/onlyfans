import React, { useState } from "react";
import { motion, AnimateSharedLayout,AnimatePresence } from "framer-motion";
import {picsData} from './picsData'
import cancelSvg from '../assets/white-cancel.svg'
import "./gallary.css";

function Content({ pics, disabled }) {
  return (
    <motion.div
      className="title"
      layoutId="title"
      style={{ opacity: disabled ? 0.2 : 1 }}
    >
      {/* {day} */}
      <motion.div >
        <img src={pics.img} alt="img gallary"  className="gallaryPics"/>
        </motion.div>
    </motion.div>
  );
}

function ExpandedCard({ children, onCollapse }) {
  return (
    <>
      <motion.div
        className="card expanded"
        layoutId="expandable-card"
        onClick={onCollapse}
      >
        {children}
      </motion.div>
     

    </>
  );
}

function Bg(){

    return(
        <div className="bg">
            <div className="cancelIcon"
            style={{
                backgroundImage:`url(${cancelSvg})`
            }}
            />
        </div>
    )
}

function CompactCard({ children, onExpand, disabled }) {
  return (
    <motion.div
      className="card compact"
      layoutId="expandable-card"
      onClick={disabled ? undefined : onExpand}
    >
      {children}
    </motion.div>
  );
}

function DateButton({ pics, onCollapse, onExpand, disabled }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseDate = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandDate = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (

    <div className={isExpanded ? " cardXpanded" : "card-container"}>
      <AnimateSharedLayout>
        {isExpanded ? (
          <ExpandedCard onCollapse={collapseDate} pics={pics}>
              <Bg/>
            <Content pics={pics} disabled={disabled} />
          </ExpandedCard>
        ) : (
          <CompactCard onExpand={expandDate} disabled={disabled} pics={pics}>
            <Content pics={pics} disabled={disabled} />
          </CompactCard>
        )}
      </AnimateSharedLayout>
    </div>
  );
}

export default function App() {
  const [expandedDay, setCollapsedDay] = useState();
//   const days = [25, 26, 27, 28, 29];

  return (
    <div className="container">
      <h3 className="picsText">
            6 PHOTOS
        </h3>
        
      <div className="dates">
        {picsData.map(pics => (
            <div className={expandedDay !== pics ? "dataContainer" : "ActiveData"}>
          <DateButton
            key={pics}
            pics={pics}
            disabled={expandedDay !== pics && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(pics)}
            onCollapse={() => setCollapsedDay()}
          />
        </div>
        ))}
      </div>
    </div>
  );
}
