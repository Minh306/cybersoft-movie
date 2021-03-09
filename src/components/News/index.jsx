import React from "react";

export default function News() {
  return (
    <section className="tixNews">
      <div className="news-wrap container">
        <ul className="nav nav-tabs newsTab" id="newsTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#news24h"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Điện Ảnh 24h
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#newsReview"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Review
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#newsPromo"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Khuyến Mãi
            </a>
          </li>
        </ul>
        <div className="tab-content newsTabContent" id="newsTabContent">
          <div
            className="tab-pane fade show active"
            id="news24h"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="news-top">
              <div className="news-item top-left">
                <img src="./img/news-1.png" alt="news" />
                <div className="news-info">
                  <h2 className="title">
                    “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                  </h2>
                  <p className="intro">
                    Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
                    độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương
                    tại 360 Giải Phóng!
                  </p>
                  <div className="social">
                    <p className="like">
                      <img src="./img/like.png" alt="like" />
                      <span>0</span>
                    </p>
                    <p className="comment">
                      <img src="./img/comment.png" alt="comment" />
                      <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-item top-right">
                <img src="./img/news-2.jpg" alt="news" />
                <div className="news-info">
                  <h2 className="title">
                    Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                    chiếu{" "}
                  </h2>
                  <p className="intro">
                    Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                    lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn
                    ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ
                    trong một khung hình để ăn mừng thành tích ấn tượng của tác
                    phẩm.{" "}
                  </p>
                  <div className="social">
                    <p className="like">
                      <img src="./img/like.png" alt="like" />
                      <span>1</span>
                    </p>
                    <p className="comment">
                      <span>
                        <img src="./img/comment.png" alt="comment" />
                      </span>
                      <span>0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-bot">
              <div className="bot-item bot-left">
                <div className="news-item top-left">
                  <img src="./img/news-1.png" alt="news" />
                  <div className="news-info">
                    <h2 className="title">
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </h2>
                    <p className="intro">
                      Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống
                      ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai
                      trương tại 360 Giải Phóng!
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src="./img/like.png" alt="like" />
                        <span>0</span>
                      </p>
                      <p className="comment">
                        <img src="./img/comment.png" alt="comment" />
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="news-item top-right">
                  <img src="./img/news-2.jpg" alt="news" />
                  <div className="news-info">
                    <h2 className="title">
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công chiếu{" "}
                    </h2>
                    <p className="intro">
                      Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                      lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé.
                      Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ
                      đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng
                      của tác phẩm.{" "}
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src="./img/like.png" alt="like" />
                        <span>1</span>
                      </p>
                      <p className="comment">
                        <span>
                          <img src="./img/comment.png" alt="comment" />
                        </span>
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bot-item bot-right">
                {/* Small Items */}
                <div className="news-small-item">
                  <img src="./img/news-small-1.png" alt="news" />
                  <p>
                    {" "}
                    Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu
                    doanh thu tại Hàn Quốc mùa dịch
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src="./img/news-small-2.png" alt="news" />
                  <p>
                    {" "}
                    Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                    Christopher Nolan
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src="./img/news-small-3.png" alt="news" />
                  <p>
                    {" "}
                    Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng
                    vé' xứ Hàn
                  </p>
                </div>
                {/* Small Items */}
                <div className="news-small-item">
                  <img src="./img/news-small-1.png" alt="news" />
                  <p>
                    6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình
                    đám nhất Hollywood
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="newsReview"
            role="tabpanel"
            aria-labelledby="profile-tab"
          ></div>
          <div
            className="tab-pane fade"
            id="newsPromo"
            role="tabpanel"
            aria-labelledby="contact-tab"
          ></div>
        </div>
        <div className="showMore">
          <button type="button">XEM THÊM</button>
        </div>
      </div>
    </section>
  );
}
