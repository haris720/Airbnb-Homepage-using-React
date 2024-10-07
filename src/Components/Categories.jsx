import { useState, useRef } from "react";
import "../Styles/Categories.css";
import categories from "../categories";
import { MdFilterList } from "react-icons/md";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Arrow icons

const YourComponent = () => {
  const [icon, setIcon] = useState(categories);
  const [selectedIcon, setSelectedIcon] = useState(null); // Track selected icon
  const [isOn, setIsOn] = useState(false); // Toggle state
  const [showForwardArrow, setShowForwardArrow] = useState(true);
  const [showBackwardArrow, setShowBackwardArrow] = useState(false);

  const iconsRef = useRef(null); // Reference to icons div

  // Toggle button handler
  const handleToggle = () => {
    setIsOn(!isOn); // Toggle between true and false
  };

  // Scroll icons forward
  const scrollForward = () => {
    if (iconsRef.current) {
      iconsRef.current.scrollLeft += 200; // Scroll by 200px
      handleArrowVisibility();
    }
  };

  // Scroll icons backward
  const scrollBackward = () => {
    if (iconsRef.current) {
      iconsRef.current.scrollLeft -= 200; // Scroll by 200px
      handleArrowVisibility();
    }
  };

  // Handle arrow visibility based on scroll position
  const handleArrowVisibility = () => {
    const scrollLeft = iconsRef.current.scrollLeft;
    const scrollWidth = iconsRef.current.scrollWidth;
    const clientWidth = iconsRef.current.clientWidth;

    setShowBackwardArrow(scrollLeft > 0);
    setShowForwardArrow(scrollLeft + clientWidth < scrollWidth);
  };

  // Select an icon and set the color
  const selectIcon = (index) => {
    setSelectedIcon(index); // Mark selected icon
  };

  return (
    <div className="container">
      <div className="hr"></div>
      <div className="sub-container">
        {/* Arrows */}

        <div className="icons-wrapper">
          {" "}
          {showBackwardArrow && (
            <div className="arrows arrow-left" onClick={scrollBackward}>
              <FaChevronLeft />
            </div>
          )}
          <div
            className="icons"
            ref={iconsRef}
            onScroll={handleArrowVisibility}
          >
            {icon.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`product ${
                    selectedIcon === index ? "selected" : ""
                  }`}
                  onClick={() => selectIcon(index)}
                >
                  <img src={item.url} alt="" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>{" "}
          {showForwardArrow && (
            <div className="arrows arrow-right" onClick={scrollForward}>
              <FaChevronRight />
            </div>
          )}
        </div>
        <div className="buttons">
          <button className="first-btn">
            <MdFilterList /> <span>Filter</span>
          </button>
          <button className="second-btn" onClick={handleToggle}>
            Display total before taxes
            {isOn ? (
              <FaToggleOn className="toggle-icon" />
            ) : (
              <FaToggleOff className="toggle-icon off" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;