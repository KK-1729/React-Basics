import React from 'react';

class Imagecard extends React.Component {
    // to create reference for every image
    constructor(props) {
        super(props);

        this.state = {spans: 0};

        this.imageRef = React.createRef();
    }
    
    // to reach into the DOM and capture the image height
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans: spans});
    }

    // here we add an event listener to component did mount class to capture the height of the image while 
    // it is loading otherwise we get the height as 0 due to timing differenes

    render () {


        return (
            <div style={{gridRow: `span ${this.state.spans}`}}>
                <img 
                    alt={this.props.image.description} ref={this.imageRef}
                    src={this.props.image.urls.regular}    
                />
            </div>
        );
    }
}

export default Imagecard;