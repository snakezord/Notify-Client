import React from "react";
import PropTypes from "prop-types";
import iconPath from "../../assets/iconsLib";
import { IconContainer, SpinnerContainer } from "./icon.styles";

import Description from '../description'
import ColorPicker from '../color-picker'

import useHover from '../../hooks/useHover'

import { connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectActiveSideMenuButton } from '../../redux/ui/ui.selectors.js'

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Icon = ({ size, color, icon, className, style, containerStyles, viewBox, active, description, name, email, handleClick, isFetching, _id, ...otherProps }) => {
  
  const { activeSideMenuButton } = otherProps

  const styles = { ...defaultStyles, ...style };
  
  const [hovered, handleHover] = useHover(false)

  return isFetching && icon === 'refresh' 
  ? <SpinnerContainer />
  : <IconContainer color={color} icon={icon} active={active} activeSideMenuButton={activeSideMenuButton} onMouseEnter={handleHover} onMouseLeave={handleHover} style={containerStyles} onClick={handleClick} isFetching={isFetching}>
      <svg
        className={className}
        style={styles}
        viewBox={viewBox}
        width={`${size}px`}
        height={`${size}px`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        >
        <path fill={color} d={iconPath[icon]} />
      </svg>
      {hovered && !isFetching && icon !== 'camera' ? <Description description={description} name={name} email={email} /> : null }
      {hovered && icon === 'colorsPalette' ? <ColorPicker _id={_id}/> : null }
  </IconContainer>
};

Icon.defaultProps = {
  size: 16,
  color: "#495057",
  viewBox: "0 0 24 24",
  style: {},
  className: "",
  description: "",
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  //style: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
  description: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  activeSideMenuButton: selectActiveSideMenuButton
})

export default connect(mapStateToProps, null)(Icon)