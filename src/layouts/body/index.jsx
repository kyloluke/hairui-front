function Body() {
  const customStyles = {
    "--margin-left": "4rem",
  };

  const backgroundImageUrl = "assets/img/intro-img1.jpg";
  const customStyles1 = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <div className="main-inner">
      <nav className="mmm">
        <div className="mmm-content">
          <ul className="mmm-list">
            <li>
              <a href="index.html">首页</a>
            </li>
            <li>
              <a href="about-us.html">关于我们</a>
            </li>
            <li>
              <a href="services.html">服务</a>
            </li>
            <li>
              <a href="news.html">公司新闻</a>
            </li>
            <li>
              <a href="contacts.html">联系我们</a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="header header-minimal">
        <nav className="header-fixed">
          <div className="container">
            <div className="row flex-nowrap align-items-center justify-content-between">
              <div className="col-auto header-fixed-col logo-wrapper">
                <a href="index.html" className="logo" title="PathSoft">
                  <img
                    src="assets/img/logo.svg"
                    width="115"
                    height="36"
                    alt="PathSoft"
                  />
                </a>
              </div>
              <div className="col-auto col-xl col-static header-fixed-col d-none d-xl-block">
                <div className="row flex-nowrap align-items-center justify-content-end">
                  <div className="col header-fixed-col d-none d-xl-block col-static">
                    <nav className="main-mnu">
                      <ul className="main-mnu-list">
                        <li>
                          <a href="index.html" data-title="首页">
                            <span className="title-active">首页</span>
                          </a>
                        </li>
                        <li>
                          <a href="about-us.html" data-title="关于我们">
                            <span>关于我们</span>
                          </a>
                        </li>
                        <li>
                          <a href="services.html" data-title="服务">
                            <span>服务</span>
                          </a>
                        </li>
                        <li>
                          <a href="news.html" data-title="公司新闻">
                            <span>公司新闻</span>
                          </a>
                        </li>
                        <li>
                          <a href="contacts.html" data-title="联系我们">
                            <span>联系我们</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-auto d-block d-xl-none header-fixed-col">
                <div className="main-mnu-btn">
                  <span className="bar bar-1"></span>
                  <span className="bar bar-2"></span>
                  <span className="bar bar-3"></span>
                  <span className="bar bar-4"></span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="section-bgc intro">
        <div className="intro-item intro-item-type-1" style={customStyles1}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="intro-content" style={customStyles}>
                  <div className="section-heading shm-none">
                    <div className="section-subheading">达布苏消杀</div>
                    <h1>让害虫无处躲藏</h1>
                    <p className="section-desc">
                      我们致力于xxxx，我们是一家专业的消杀公司，换一张清晰的图片
                      在疫情期间我们响应政府号召，对哪儿哪儿进行了消毒，服务社区多少多少
                    </p>
                  </div>
                  <div className="btn-group intro-btns"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row">
            <header className="col-12">
              <div className="section-heading heading-center">
                <div className="section-subheading">categories</div>
                <h2>我们的服务</h2>
              </div>
            </header>
            <div className="col-lg-4 col-md-6 col-12 item">
              <a href="#!" className="iitem item-style iitem-hover">
                <div className="iitem-icon">
                  <img src="" alt="" />
                  <img src="assets/img/laoshu1.jpg" alt="" />
                </div>

                <h3 className="iitem-heading item-heading-large">鼠类防治</h3>
                <div className="iitem-desc">
                  老鼠可以把多种疾病或通过体外寄生虫传染给人畜，要彻底解决鼠患问题，必先从了解老鼠的习性开始，再配合一系列综合防治措施才能有效防治鼠患，
                  以达致安全、快速和持久的灭鼠效果。
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-12 item">
              <a href="#!" className="iitem item-style iitem-hover">
                <div className="iitem-icon">
                  <img src="assets/img/zhanglang1.jpg" alt="" />
                </div>

                <h3 className="iitem-heading item-heading-large">蟑螂防治</h3>
                <div className="iitem-desc">
                  蟑螂繁殖力惊人，对多种的杀虫剂已产生抗药性，如不尽快消灭，一对蟑螂一年可以繁殖出过百万只后代。
                  扑灭牠灭虫的专业施工团队、加上经验和专门仪器随时为您效劳。
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-12 col-12 item">
              <a href="#!" className="iitem item-style iitem-hover">
                <div className="iitem-icon">
                  <img src="assets/img/xiaodu2.jpg" alt="" />
                </div>
                <h3 className="iitem-heading item-heading-large">消毒杀菌</h3>
                <div className="iitem-desc">
                  醫院專用防疫產品，徹底消毒、滅菌。 成份無刺激性，安全可靠。
                  以專業噴霧機進行消毒，事後不須再用清水擦拭。
                  生物化解度高達百分之九十。 可一次完成消毒殺菌功效。
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-4 col-12 item">
              <a
                href="single-service.html"
                className="iitem item-style iitem-hover"
              >
                <div className="iitem-icon">
                  <img src="assets/img/youyanji.jpg" alt="" />
                </div>
                <h2 className="iitem-heading item-heading-large">油烟机清洗</h2>
                <div className="iitem-desc">
                  定期清洗油烟机，去除油污，不仅可以大幅提升油烟机的使用效果，还可以有效延长油烟机的使用寿命。清洗油烟机并非是一件简单的事，
                  油烟机是否清洁和干净直接影响到抽油烟效果，厨房的美观程度以及家人的健康。
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-4 col-12 item">
              <a
                href="single-service.html"
                className="iitem item-style iitem-hover"
              >
                <div className="iitem-icon">
                  <img src="assets/img/wenying1.jpg" alt="" />
                </div>

                <h2 className="iitem-heading item-heading-large">蚊蝇防治</h2>
                <div className="iitem-desc">
                  每年春夏蚊患及富蠓肆虐已成生活的一部份，由白纹伊蚊传播的疫病包括:日本脑炎、登革热等甚至引发死亡个案。
                  扑灭牠经验丰富，曾接受多间香港著名传媒机构的专题访问，信心保证，专业人员随时为您免费上门勘察、检查及报价。
                </div>
              </a>
            </div>
            <div className="col-md-6 col-xl-4 col-12 item">
              <a
                href="single-service.html"
                className="iitem item-style iitem-hover"
              >
                <div className="iitem-icon">
                  <img src="assets/img/shenghuohaichong1.jpg" alt="" />
                </div>

                <h2 className="iitem-heading item-heading-large">其他害虫</h2>
                <div className="iitem-desc">
                  白蚁是世界性的害虫，香港及亚热带地区特别严重。切勿自行处理，只会令白蚁四围扩散，后患无穷。
                  扑灭牠经验丰富，曾接受多间香港著名传媒的访问，加上专业的施工团队和专门仪器，为您免费上门勘察、检查及报价。
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bgc">
        <div className="container">
          <div className="row litems">
            <header className="col-12">
              <div className="section-heading heading-center">
                <div className="section-subheading">some reasons</div>
                <h2>关于消杀，我们是专业的</h2>
              </div>
            </header>
            <div className="col-lg-4 col-md-6 col-12 litem">
              <div className="ini">
                <div className="ini-count">01</div>
                <div className="ini-info">
                  <h3 className="ini-heading item-heading-large">
                    专业 <br />
                    高端
                  </h3>
                  <div className="ini-desc">
                    <p>10年消杀经验，行业领先</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 litem">
              <div className="ini">
                <div className="ini-count">02</div>
                <div className="ini-info">
                  <h3 className="ini-heading item-heading-large">
                    设备 <br />
                    精良
                  </h3>
                  <div className="ini-desc">
                    <p>医院专用防疫产品</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 litem">
              <div className="ini">
                <div className="ini-count">03</div>
                <div className="ini-info">
                  <h3 className="ini-heading item-heading-large">
                    消杀
                    <br />
                    彻底
                  </h3>
                  <div className="ini-desc">
                    <p>消杀彻底</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-without-padding-bottom">
        <div className="container">
          <div className="row items spincrement-container">
            <div className="col-xl-3 col-md-6 col-12 item">
              <div className="counter-min">
                <div className="counter-min-block">
                  <div className="counter-min-ico">
                    <i className="material-icons material-icons-outlined md-36">
                      history
                    </i>
                  </div>
                  <div
                    className="counter-min-numb spincrement"
                    data-from="0"
                    data-to="10"
                  >
                    0
                  </div>
                </div>
                <div className="counter-min-info">
                  <h4 className="counter-min-heading">10年经验</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 item">
              <div className="counter-min">
                <div className="counter-min-block">
                  <div className="counter-min-ico">
                    <i className="material-icons material-icons-outlined md-36">
                      chat
                    </i>
                  </div>
                  <div
                    className="counter-min-numb spincrement"
                    data-from="0"
                    data-to="12"
                  >
                    0
                  </div>
                </div>
                <div className="counter-min-info">
                  <h4 className="counter-min-heading">12个大型商场</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 item">
              <div className="counter-min">
                <div className="counter-min-block">
                  <div className="counter-min-ico">
                    <i className="material-icons material-icons-outlined md-36">
                      assignment_ind
                    </i>
                  </div>
                  <div
                    className="counter-min-numb spincrement"
                    data-from="0"
                    data-to="22"
                  >
                    0
                  </div>
                </div>
                <div className="counter-min-info">
                  <h4 className="counter-min-heading">22名员工</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 item">
              <div className="counter-min">
                <div className="counter-min-block">
                  <div className="counter-min-ico">
                    <i className="material-icons material-icons-outlined md-36">
                      phonelink_setup
                    </i>
                  </div>
                  <div className="counter-min-numb">
                    <span className="spincrement" data-from="0" data-to="26">
                      0
                    </span>
                  </div>
                </div>
                <div className="counter-min-info">
                  <h4 className="counter-min-heading">26个社区服务</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bgc">
        <div className="container">
          <div className="row items">
            <header className="col-12">
              <div className="section-heading heading-center">
                <div className="section-subheading">More info about</div>
                <h2>公司新闻</h2>
              </div>
            </header>
            <div className="col-lg-4 col-md-6 col-12 item">
              <article className="news-item item-style">
                <a href="news-post.html" className="news-item-img el">
                  <img
                    src="assets/img/news-img-1.jpg"
                    loading="lazy"
                    className="lazy"
                    // src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    alt=""
                  />
                </a>
                <div className="news-item-info">
                  <div className="news-item-date">07/01/2023</div>
                  <h3 className="news-item-heading item-heading">
                    <a href="news-post.html" title="Benefits Of Async/Await">
                      城市立方签订2年消杀合同
                    </a>
                  </h3>
                  <div className="news-item-desc">
                    <p>简单介绍，简单介绍，简单介绍，简单介绍，</p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-12 item">
              <article className="news-item item-style">
                <a href="news-post.html" className="news-item-img el">
                  <img
                    src="assets/img/news-img-2.jpg"
                    loading="lazy"
                    className="lazy"
                    // src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    alt=""
                  />
                </a>
                <div className="news-item-info">
                  <div className="news-item-date">05/01/2021</div>
                  <h3 className="news-item-heading item-heading">
                    <a
                      href="news-post.html"
                      title="Key Considerations Of IPaaS"
                    >
                      公司人员培训（这里可以点击进去查看详情，去哪儿抄几篇文章）
                    </a>
                  </h3>
                  <div className="news-item-desc">
                    <p>简单介绍</p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-12 item">
              <article className="news-item item-style">
                <a href="news-post.html" className="news-item-img el">
                  <img
                    src="assets/img/news-img-3.jpg"
                    loading="lazy"
                    className="lazy"
                    // src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    alt=""
                  />
                </a>
                <div className="news-item-info">
                  <div className="news-item-date">01/01/2021</div>
                  <h3 className="news-item-heading item-heading">
                    <a href="news-post.html" title="Hibernate Query Language">
                      政府合作项目
                    </a>
                  </h3>
                  <div className="news-item-desc">
                    <p>简单介绍</p>
                  </div>
                </div>
              </article>
            </div>
            <footer className="section-footer col-12 item section-footer-animate">
              <div className="btn-group align-items-center justify-content-center">
                <a href="news.html" className="btn btn-with-icon btn-w240 ripple">
                  <span>更多新闻</span>
                  <svg
                    className="btn-icon-right"
                    viewBox="0 0 13 9"
                    width="13"
                    height="9"
                  >
                    {/* <use xlink:href="assets/img/sprite.svg#arrow-right"></use> */}
                  </svg>
                </a>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
