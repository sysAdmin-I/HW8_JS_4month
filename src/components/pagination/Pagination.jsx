import React from 'react';
import classes from './Pagination.module.scss';


const Pagination = ({next, prev, page}) => {
    return (
        <div className={classes.buttons}>
            <button className={classes.prevBtn} onClick={prev}>Prev</button>
            <p className={classes.pageNumber}>{page}</p>
            <button  className={classes.nextBtn} onClick={next}>Next</button>
        </div>
    );
};

export default Pagination;