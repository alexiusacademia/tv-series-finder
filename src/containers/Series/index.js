import React, { Component } from 'react'
import SeriesList from '../../components/SeriesList'

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    onInputChanged = event => {
        this.setState(
            {seriesName: event.target.value, isFetching: true}
        )

        fetch(`http://api.tvmaze.com/search/shows?q=${event.target.value}`)
          .then((result) => result.json())
          .then(json => {
            this.setState( { series: json, isFetching: false} )
          })
    }
      
    render() {
        const {series, seriesName, isFetching} = this.state
        return (
            <div>
                <input type="text" onChange={this.onInputChanged}></input>

                {
                    !isFetching && series.length === 0
                    &&
                    <p>Please enter a search item.</p>
                }
                {
                    !isFetching && seriesName.trim() !== ''
                    &&
                    <SeriesList series= {this.state.series} />
                }
                {
                    isFetching && seriesName.trim() !== ''
                    &&
                    <p>Loading...</p>
                }
                
            </div>
        )
    }
}

export default Series