import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";
import { Link } from "../../components/Link";

export const Socials: React.FC = () => {
  return (
    <PageWrapper>
      <section className="sec-areatop socials">
        <div className="container">
          <div className="subtit-area">
            <span className="co">BOSagora</span>
            <h2 className="subtit">Join the Community</h2>
            <p className="txt">
              The BOSagora community is open to all comers.
              <br className="pc" />
              <br className="t" />
              Don’t be a stranger, connect with the community here.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-g sec-social">
        <div className="container">
          <div className="sec-area">
            <h3 className="sec-tit2">COMMUNITY</h3>
            <ul className="lst-social box-over">
              <li>
                <Link to="https://t.me/bosagora_korea">
                  <span className="ico-social telegram">telegram</span>
                  <strong>KOREA</strong>
                  <p>@bosagora_korea</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/bosagora_eng">
                  <span className="ico-social telegram">telegram</span>
                  <strong>GLOBAL</strong>
                  <p>@bosagora_eng</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/BOSAGORA_News_Kor">
                  <span className="ico-social telegram">telegram</span>
                  <strong>KOREA (Announcement)</strong>
                  <p>@BOSAGORA_News_Kor</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/boa_announcement">
                  <span className="ico-social telegram">telegram</span>
                  <strong>GLOBAL (Announcement)</strong>
                  <p>@boa_announcement</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/bosagora_cn">
                  <span className="ico-social telegram">telegram</span>
                  <strong>CHINA</strong>
                  <p>@bosagora_cn</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/bosagoraTR">
                  <span className="ico-social telegram">telegram</span>
                  <strong>TURKEY</strong>
                  <p>@bosagoraTR</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/bosagora_es">
                  <span className="ico-social telegram">telegram</span>
                  <strong>SPANISH</strong>
                  <p>@bosagora_es</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li>
                <Link to="https://t.me/bosagora_ru">
                  <span className="ico-social telegram">telegram</span>
                  <strong>RUSSIA</strong>
                  <p>@bosagora_ru</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="sec-area">
            <h3 className="sec-tit2">SOCIAL MEDIA</h3>
            <ul className="lst-social box-over">
              <li className="medium">
                <Link to="https://medium.com/bosagora">
                  <span className="ico-social medium">medium</span>
                  <strong>Medium</strong>
                  <p>/bosagora</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li className="twitter">
                <Link to="https://twitter.com/bosagora1">
                  <span className="ico-social twitter">twitter</span>
                  <strong>Twitter</strong>
                  <p>/BOSAGORA1</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li className="instagram">
                <Link to="https://www.instagram.com/bosagora_official/">
                  <span className="ico-social instagram">instagram</span>
                  <strong>Instagram</strong>
                  <p>/bosagora_official</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
              <li className="youtube">
                <Link to="https://www.youtube.com/channel/UCjcTwkskyTmAwHpqv9Oynig">
                  <span className="ico-social youtube">youtube</span>
                  <strong>Youtube</strong>
                  <p>@boa_announcement</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="sec-area">
            <h3 className="sec-tit2">DEVELOPMENT</h3>
            <ul className="lst-social box-over">
              <li className="github">
                <Link to="https://github.com/bosagora">
                  <span className="ico-social github">github</span>
                  <strong>Github</strong>
                  <p>/bosagora</p>
                  <span className="material-symbols-outlined">north_east</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec-ambassador bg-w p100">
        <div className="container">
          <div className="tit-wrap">
            <h2 className="tit">Ambassador</h2>
            <p className="txt">
              Are you passionate, knowledgeable, <br className="pc" />
              and want to be a part of BOSagora to share about the BOSagora
              ecosystem? <br />
              if you are, sign up as an ambassador and play a role as below.
            </p>
            <strong>BOSagora AMBASSADORS GET:</strong>
          </div>
          <ul className="lst-different">
            <li>
              <p>
                Direct lines to the BOSagora Foundation <br className="pc" />
                through dedicated channels.
              </p>
            </li>
            <li>
              <p>
                Invitations to closed events, software <br className="pc" />
                previews, and calls with our teams.
              </p>
            </li>
            <li>
              <p>
                BOSagora-branded event swag to <br className="pc" />
                distribute at your own offline events.
              </p>
            </li>
            <li>
              <p>
                Blockchain industry experience and <br className="pc" />
                behind-the-scenes access to BOSagora.
              </p>
            </li>
          </ul>
          <a href="mailto:support@bosagora.io" className="btn-g">
            Apply NOW
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </section>
    </PageWrapper>
  );
};
