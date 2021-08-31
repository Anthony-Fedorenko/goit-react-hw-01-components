import styles from'./CardWrapper.module.css'

export const CardWrapper = ({row, children}) => {
    return (
        <div className={`col s${row}`}>
            <div className='row'>
                <div className='col s12'>
                    <div className={'card blue-grey lighten-4 card' + styles.cardWrapper}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}