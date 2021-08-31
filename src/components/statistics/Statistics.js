import React from "react";
import PropTypes from 'prop-types'
import StatisticsItem from './statisticsItem/StatisticsItem'
import StatisticsWrapper from './styledStatistics'

const Statistics = ({ title, stats }) => {
    return (
        <StatisticsWrapper>
            <div className='statistics'>
                {title && <h2 className='title'>{title}</h2>}
                <ul className='stat-list list'>
                    {stats.map(stat => (
                        <StatisticsItem {...stat} key={stat.id}/>
                    ))}
                </ul>
            </div>
        </StatisticsWrapper>
    )
}

export default Statistics

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object)
}