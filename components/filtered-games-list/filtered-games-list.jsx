import React from 'react';
import PropTypes from 'prop-types';

import GamesList from '../games-list/games-list';
import Filters from '../filters/filters';
import PageContent from '../page-content/page-content';

import './filtered-games-list.scss';

class FilteredGamesList extends React.Component {
  static propTypes = {
    games: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired
  };

  state = {
    games: this.props.games,
    filters: this.props.filters
  };

  render() {
    return (
      <PageContent>
        <div className="filtered-games-list">
          <div className="filtered-games-list__filters">
            <Filters filters={this.state.filters} />
          </div>
          <GamesList games={this.state.games} />
        </div>
      </PageContent>
    );
  }
}

export default FilteredGamesList;
