import React from 'react';
import './index.less';

export default function SideMenu(props) {
	const { items, handleMenuChange } = props;

  return (
    <ul className="sidemenu-container">
      {items.map((e, i) => {
        const { id, name } = e;
        return (
          <li 
						key={id} 
						className={ i === 0 ? 'active' : ''} 
						onClick={() => handleMenuChange(id)}
					>
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
