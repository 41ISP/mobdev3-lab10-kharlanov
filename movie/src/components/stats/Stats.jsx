const Stats = ({totalResults, Search}) => {
    return(
        <div className="results-info">
                Total Results: {totalResults} | Showing: {Search.length} movies
            </div>
    )
}

export default Stats