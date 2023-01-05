import css from './Searchbar.module.css';

export const Searchbar = () =>  {
  return (
    <header className={css.searchBar}>
      <form className={css.form}>
        <button type="submit" className={css.btn}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}
