import image  from './images/image-equilibrium.jpg';
import ethImage from './images/icon-ethereum.svg';
import clock from './images/icon-clock.svg';
import creator from './images/image-avatar.png';
import viewIcon from './images/icon-view.svg';

function App() {
  return (
    <>
      <main className="main">
        <div className="image-container">
          <img className="nft-image" src={image} alt="nft equilibrium" />
          <img className="view-icon" src={viewIcon} alt="view icon" />
        </div>
        <h1 className="title">Equilibrium #3429</h1>
        <p className="desc">Our Equilibrium collection promotes balance and calm.</p>
        <div className="info">
          <p className="eth"> <img src={ethImage} alt="ethereum icon" />  0.041 ETH</p>
          <p className="days"><img src={clock} alt="clock icon" /> 3 days left</p>
        </div>
        <hr />
        <div className="creator">
          <img src={creator} alt="avatar of user that created the post" />
          <p>Creation of <span className="creator-name">Jules Wyvern</span></p>
        </div>
      </main>
      <footer>
        <div className="attribution">
          <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a></p>
          <p>Coded by <a href="https://github.com/iulian-cenusa" target="_blank" rel="noreferrer">Iulian Cenuşă</a></p>
        </div></footer>
    </>
  );
}

export default App;
