import React from 'react';
import PropTypes from 'prop-types';

import GamesList from '../games-list/games-list';
import Filters from '../filters/filters';
import PageContent from '../page-content/page-content';

import './filtered-games-list.scss';

const orderAlphabetically = (list, propertyToOrderBy) => {
  return list.sort((a, b) => {
    if (!a[propertyToOrderBy] || !b[propertyToOrderBy]) return null;

    return a[propertyToOrderBy].localeCompare(b[propertyToOrderBy]);
  });
};

class FilteredGamesList extends React.Component {
  static propTypes = {
    games: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired
  };

  state = {
    games: orderAlphabetically(this.props.games, 'name'),
    filters: this.props.filters,
    activeGames: []
  };

  componentDidMount() {
    this.setState({
      activeGames: this.state.games
    });
  }

  handleOnFilterClick = (e, id) => {
    console.log(e, id);
    this.setState(previousState => ({
      activeGames: previousState.games.filter(game => game.categories[0] === id)
    }));
  };

  render() {
    return (
      <PageContent>
        <div className="filtered-games-list">
          <div className="filtered-games-list__filters">
            <Filters
              filters={this.state.filters}
              onClick={this.handleOnFilterClick}
            />
          </div>
          <GamesList games={this.state.activeGames} />
        </div>
      </PageContent>
    );
  }
}

export default FilteredGamesList;
