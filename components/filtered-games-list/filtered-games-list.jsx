import React from 'react';
import PropTypes from 'prop-types';

import GamesList from '../games-list/games-list';
import Filters from '../filters/filters';
import PageContent from '../page-content/page-content';

const orderAlphabetically = (list, propertyToOrderBy) => {
  return list.sort((a, b) => {
    if (!a[propertyToOrderBy] || !b[propertyToOrderBy]) return null;

    return a[propertyToOrderBy].localeCompare(b[propertyToOrderBy]);
  });
};

class FilteredGamesList extends React.Component {
  static propTypes = {
    games: PropTypes.array.isRequired
  };

  state = {
    games: orderAlphabetically(this.props.games, 'name'),
    filters: [],
    filteredGames: [],
    activeFilters: []
  };

  getFilters = games => {
    return games
      .map(game => game.categories)
      .reduce((accumulator, categories) => {
        return accumulator.concat(categories);
      }, []);
  };

  componentDidMount() {
    this.setState(
      {
        filteredGames: this.state.games,
        filters: this.getFilters(this.state.games)
      },
      () => {
        console.log(this.state.filters);
      }
    );
  }

  handleOnFilterClick = (e, id) => {
    console.log('clicked:', e, id);

    this.state.filters.find(item => {
      if (item.id === id) {
        item.isActive = !item.isActive;
        return;
      }

      return null;
    });

    this.setState(previousState => ({
      filteredGames: previousState.games.filter(game => {
        if (game.categories.indexOf(id) !== 0) return game;
      })
    }));
  };

  render() {
    return (
      <div className="filtered-games-list">
        <PageContent
          theme={PageContent.themes.wide}
          backgroundColor={PageContent.colors.grey}
        >
          <div className="filtered-games-list__filters">
            <Filters
              filters={this.state.filters}
              onClick={this.handleOnFilterClick}
            />
          </div>
        </PageContent>
        <PageContent>
          <GamesList games={this.state.filteredGames} />
        </PageContent>
      </div>
    );
  }
}

export default FilteredGamesList;
