const Card = (props) => {

  const items = [];
  for (let i = 0; i < props.lang.length; i++) {
    items.push(<span className="bubble2" key = {i} >{props.lang[i]}</span>);
  }

  return (
    <div className="projects_card">
        <img src= {`images/projects/${props.img}`} alt={props.name} />
         <div className="bubble2_container">
          {items}
        </div>
        <br />
        <h3>{props.name}</h3>
        <p>{props.details}</p>
        <div className="card_btn">
            <a href={props.repo}><button>View Code</button></a>
        </div>
    </div>
  )
}

export default Card