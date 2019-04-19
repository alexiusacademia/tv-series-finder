import React, { Component } from 'react'
import './index.css'

class SeriesDetails extends Component {

    state = {
        name: '',
        genres: [],
        image: '',
        rating: '',
        summary: ''
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`http://api.tvmaze.com/shows/${id}`)
            .then((result) => result.json())
            .then(json => {
                // console.log(json)
                this.setState({
                    name: json.name,
                    genres: json.genres,
                    image: json.image.medium,
                    rating: json.rating.average,
                    summary: json.summary
                })
            })
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <div>Details</div>
                <div>(id: {this.props.match.params.id})</div>
                <div></div>
                <div className="series-title">{this.state.name}</div>
                <img src={this.state.image} alt="Loading..." />
                <div>
                    <p>
                        {this.state.summary}
                    </p>
                </div>
            </div>
        )
    }
}

export default SeriesDetails