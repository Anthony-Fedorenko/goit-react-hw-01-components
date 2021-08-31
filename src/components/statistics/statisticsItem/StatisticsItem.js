import React from "react";
import PropTypes from 'prop-types'
import LiItem from "./styledStatisticsItem";

const StatisticsItem = ({ label, percentage }) => {
    return (
        <LiItem className='item'>
            <span className='label'>{label}</span>
            <span className='percentage'>{percentage}%</span>
        </LiItem>
    )
}

export default StatisticsItem

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}