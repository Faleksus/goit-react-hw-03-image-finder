import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component  {

  state = {
    query: '',
  }

  handleInputChange = event => {
    this.setState({ query: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { query } = this.state;

    if(query === '') {
      return
    }

    this.props.onSubmit(query)
    this.setState({
      query: '',
    })
  }

  render() {
    const { handleSubmit, handleInputChange } = this;
    const { query } = this;

    return (
      <header className={css.searchBar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.btn}>
            <span className={css.btnLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={query}
            onInput={handleInputChange}
          />
        </form>
      </header>
    )
  }
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func,
  query: PropTypes.string,
  handleInputChange: PropTypes.func,
};
