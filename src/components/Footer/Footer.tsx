import { Link as TopLink } from "react-scroll";
import { Link } from "../Link";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="nav-ft">
          <ul className="nav-ft-depth1">
            <li>
              <Link to="/Developers">Developers</Link>
              <ul className="nav-depth2">
                <li>
                  <Link to="/Developers">Getting Started</Link>
                </li>
                <li>
                  <Link to="/Developers/Agorachain">Agora Chain</Link>
                </li>
                <li>
                  <Link to="/Developers/Tools">Tools</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Validator">Validator</Link>
              <ul className="nav-depth2">
                <li>
                  <Link to="/Validator">Becoming a Validator</Link>
                </li>
                <li>
                  <Link to="https://docs.bosagora.org/en/votera/introduction">
                    Votera
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Earn">Earn</Link>
              <ul className="nav-depth2">
                <li>
                  <Link to="/Earn#calculate-sec">Calculate Rewards</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Community">Community</Link>
              <ul className="nav-depth2">
                <li>
                  <Link to="/Community">News</Link>
                </li>
                <li>
                  <Link to="/Community/Socials">Socials</Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/channel/UCjcTwkskyTmAwHpqv9Oynig">
                    Youtube
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="ft-social">
          <h2 className="ft-tit">Bosagora Social</h2>
          <ul className="lst-social">
            <li className="medium">
              <Link to="https://medium.com/bosagora">M</Link>
            </li>
            <li className="telegram">
              <Link to="https://t.me/bosagora_eng">텔레그램</Link>
            </li>
            <li className="twitter">
              <Link to="https://twitter.com/bosagora1">트위터</Link>
            </li>
            <li className="youtube">
              <Link to="https://www.youtube.com/channel/UCjcTwkskyTmAwHpqv9Oynig">
                유튜브
              </Link>
            </li>
            <li className="github">
              <Link to="https://www.github.com/bosagora">github</Link>
            </li>
          </ul>
        </div>
        <TopLink
          id="scrollUp"
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          duration={500}
        >
          Scroll to top
        </TopLink>

        <div className="ft-copyright">Copyright © 2022 BOSAGORA Foundation</div>
      </div>
    </footer>
  );
};
