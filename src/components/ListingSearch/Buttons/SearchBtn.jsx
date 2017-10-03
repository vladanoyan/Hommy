import React from 'react';
import SerachIcon from 'react-icons/lib/fa/search';
import { NavLink } from 'react-router-dom';
import cs from './SerachBtn.pcss';


class SearchBtn extends React.Component {

  render() {
    return (
      <div className={cs.SearchBtn}>
        <NavLink to="/app/listings">
          <div className={cs.icon}>
            <SerachIcon className={cs.iconIc} />
          </div>
        </NavLink>
      </div>
    );
  }
}

export default SearchBtn;
