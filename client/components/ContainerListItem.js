import React from 'react'
export default ({container,onClick})=>
<a className="panel-block is-active" onClick={e=>onClick(container.Id)} >
<span className="panel-icon">
  <i className="fas fa-book" aria-hidden="true"></i>
</span>
{container.Names.map(name=>name.replace('/',''))}
</a>