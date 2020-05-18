import React from 'react';
import PropTypes from 'prop-types';
import slug from 'slug';
import { Link, Route } from 'react-router-dom';

function CustomLink({ to, children }) {
  return (
    <Route
      to={to.pathname}
      children={({ match }) => (
        <li
          style={{
            listStyleType: 'none',
            fontWeight: match ? 'bold' : 'normal',
          }}
        >
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  );
}

Sidebar.porpTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default function Sidebar({ title, list, loading, match, location }) {
  return loading ? (
    <h1 className='center'>LOADING...</h1>
  ) : (
    <div>
      <h3 className='header'>{title}</h3>
      <ul className='sidebar-list'>
        {list.map((item) => (
          <CustomLink
            key={item}
            to={{
              pathname: `${match.url}/${slug(item)}`,
              search: location.search,
            }}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}
