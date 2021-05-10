import React, { Component } from 'react';

class Reviews extends Component {
  render() {
    const { reviews } = this.props;

    return reviews.length !== 0 ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <h3>Sorry, reviews is not found</h3>
    );
  }
}

export default Reviews;
