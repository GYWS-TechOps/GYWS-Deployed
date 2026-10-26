import './Foundersmsg.css';


import {
  Facebook,
  Linkedin,
  EnvelopeFill,
} from 'react-bootstrap-icons';
import HCard from '../../HeaderCard/HCard';
export default function Foundersmsg() {

  return (
    <div className='msg-container'>
      <div className="msg-container-heading">
        <HCard head={"FOUNDER'S MESSAGE"}></HCard>
      </div>
      <div className="msg-container-about">
        <div className="msg-container-about-card">
          <div className="founder-image">
            <img src="/images/founder.webp" alt="Founder" className='founderimg' />
          </div>
          <div className="founder-about">
            <h2>Prof. N R Mandal</h2>
            <h3>Founder (Gopali Youth Welfare Society)</h3>
          </div>
          <div className="msg-container-links">
            <a href='mailto:gywsociety@gmail.com'>
              <EnvelopeFill />
            </a>
            <button style={{background:'none',border:'none',cursor:'default',padding:0}}>
              <Facebook />
            </button>
            <button style={{background:'none',border:'none',cursor:'default',padding:0}}>
              <Linkedin />
            </button>
          </div>
        </div>
        <div className="description">
          <div className="content">
            <p>
              There is a natural law, a Divine law that obliges you and me to believe the sufferings of the distressed and the destitute. A service for the poor is a supreme virtue and the great channel through which the mercy of God is passed on to mankind.
            </p>
            <p>
              As stewards of GOPALI YOUTH WELFARE SOCIETY, the board and staff of Society are committed to adhering as closely as possible to his intentions, as reflected in our guiding principle. GYWS is a rural-based registered organization by and for the people. Despite the many ups and downs, it has pulled on with real favor to serve the disadvantaged, the underprivileged, the poor and the needy.
            </p>
            <p>
              Our journey would not have been smooth if it was not for the support by the wholehearted participation and cooperation from the community as well as from the other partners (agencies) have helped a lot to sustain the activities. So, we take this occasion to extend our heartfelt gratitude to one and all, who, in whatever capacity, might have contributed to one's might to sustain our noble endeavour. We earnestly hope the coming year will be fruitful and meaningful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
