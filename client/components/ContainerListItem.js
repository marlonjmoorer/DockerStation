import React from 'react'
export default ({container})=>
<a className="panel-block is-active">
<span className="panel-icon">
  <i className="fas fa-book" aria-hidden="true"></i>
</span>
{container.Names.map(name=>name.replace('/',''))}
</a>