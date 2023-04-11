import stars from '../assets/symbols/stars.png';
import userHead from '../assets/symbols/userHead.png';

export default function Profile() {
  return (
    <div>

      <div id="bannerPhoto"></div>


      <div style={{marginLeft:'200px'}}>
        <div id="profileBioSquare">
          <img href="" alt="" src={userHead}
            style={{
              width: '75px',
              height: '75px',
            }} />
        </div>


        <div id="profileBio">
          <h2 style={{ margin: '0'}}>Pancho Rodriguez</h2>
          <h4 style={{ margin: '0'}}>Fullerton, CA</h4>
          <h4 style={{ display: 'flex', alignItems: 'center', margin: '0' }}>
            <img href="" alt="" src={stars}
              style={{
                width: '40px',
                height: '40px',
                marginRight: '10px'
              }}/>
            2 Reviews
          </h4>
          </div> {/* end of profileBio */}
      </div>

      <div id="fillerSpace"></div>

    </div>

  )
}
