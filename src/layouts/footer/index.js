function Footer() {
  return (
    <footer className="footer footer-minimal">
      <div className="footer-main">
        <div className="container">
          <div className="row items align-items-center">
            <div className="col-lg-3 col-md-4 col-12 item">
              <div className="widget-brand-info">
                <div className="widget-brand-info-main">
                  <a href="index.html" className="logo" title="PathSoft">
                    <img
                      data-src="assets/img/logo-white.svg"
                      className="lazy"
                      width="133"
                      height="36"
                      src="assets/img/logo-white.svg"
                      alt="PathSoft"
                      data-loaded="true"
                      style={{opacity: 1}}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md item">
              <div className="footer-item">
                <nav className="footer-nav">
                  <ul className="footer-mnu footer-mnu-line">
                    <li>
                      <a href="index.html" className="hover-link" data-title="Home">
                        <span>首页</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="about-us.html"
                        className="hover-link"
                        data-title="About us"
                      >
                        <span>关于我们</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="services.html"
                        className="hover-link"
                        data-title="Services"
                      >
                        <span>服务</span>
                      </a>
                    </li>
                    <li>
                      <a href="news.html" className="hover-link" data-title="News">
                        <span>公司新闻</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="contacts.html"
                        className="hover-link"
                        data-title="Contacts"
                      >
                        <span>联系我们</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-between items">
            <div className="col-md-auto col-12 item">
              <nav className="footer-links">
                全年午休，365日x24小时服务，静待您的呼叫~~~
              </nav>
            </div>
            <div className="col-md-auto col-12 item">
              <div className="copyright">
                备案号：
                <a href="https://beian.miit.gov.cn/" target="_blank">
                  陕ICP备2023009969号-1
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
