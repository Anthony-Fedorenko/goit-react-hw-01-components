import React from "react";
import PropTypes from 'prop-types'
import TransactionHistoryWrapper from "./styledTransactionHistory";

const TransactionHistory = ({items}) => {
    return (
        <TransactionHistoryWrapper>
            <table className='transaction-history'>
                <thead className='thead'>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>

                <tbody className='tbody'>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </TransactionHistoryWrapper>
    )
}

export default TransactionHistory

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}