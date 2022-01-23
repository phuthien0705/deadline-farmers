import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { page, totalRows } = pagination;
    const totalPages = Math.ceil(totalRows / 12);
    console.log(totalRows);
    console.log(totalPages)

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }

    return (
        <div>
            <div className='pagination flex items-center justify-center'>
                <button
                    className='text-xl p-2 m-2'
                    disabled={page <= 1}
                    onClick={() => handlePageChange(page - 1)}
                    >
                    Prev
                </button>
                <button
                    className='text-xl p-2 m-2'
                    disabled={page >= totalPages}
                    onClick={() => handlePageChange(page + 1)}
                    >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;