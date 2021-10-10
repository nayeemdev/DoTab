import React from "react";

export default function News() {
    return (

        <>
            {/* NEWS */}
            <div id="news-tab" className="tabcontent">
            <div className="pb-2">
              <h1 className="title title--h1 first-title title__separate">DEV NEWS</h1>
            </div>
            {/* News */}
            <div className="news-grid">
              {/* Post */}
              <article className="news-item box">
                <div className="news-item__image-wrap overlay overlay--45">
                  <div className="news-item__date">Jun<span>2020</span></div>
                  <a className="news-item__link" rel="noreferrer" target="_blank" href="https://medium.com/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82-%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE/php-%E0%A6%A4%E0%A7%87-%E0%A6%A6%E0%A7%81%E0%A6%9F%E0%A6%BF-%E0%A6%B8%E0%A6%BF%E0%A6%95%E0%A6%BF%E0%A6%89%E0%A6%B0%E0%A6%BF%E0%A6%9F%E0%A6%BF-%E0%A6%AE%E0%A7%87%E0%A6%87%E0%A6%A8%E0%A6%9F%E0%A7%87%E0%A6%87%E0%A6%A8-%E0%A6%95%E0%A6%B0%E0%A6%BE%E0%A6%B0-%E0%A6%AA%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A6%A4%E0%A6%BF-ac4016cc11e0" />
                  <img className="cover lazyload" src="#" alt="PHP তে দুটি সিকিউরিটি মেইনটেইন করার পদ্ধতি" />
                </div>
                <div className="news-item__caption">
                  <h6 className="title">PHP তে দুটি সিকিউরিটি মেইনটেইন করার পদ্ধতি</h6>
                </div>
              </article>
              {/* Post */}
              <article className="news-item box">
                <div className="news-item__image-wrap overlay overlay--45">
                  <div className="news-item__date">15<span>Jun</span></div>
                  <a className="news-item__link" rel="noreferrer" target="_blank" href="https://medium.com/@nayeemdev/how-to-send-sms-with-twilio-and-laravel-%E0%A6%95%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-twilio-%E0%A6%8F%E0%A6%AC%E0%A6%82-laravel-%E0%A6%8F%E0%A6%B0-%E0%A6%AE%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AE%E0%A7%87-sms-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%A4%E0%A7%87-%E0%A6%B9%E0%A7%9F-5330742cc3fe" />
                  <img className="cover lazyload" src="#" alt="কিভাবে Twilio এবং Laravel এর মাধ্যমে sms পাঠাতে হয়" />
                </div>
                <div className="news-item__caption">
                  <h6 className="title">কিভাবে Twilio এবং Laravel এর মাধ্যমে sms পাঠাতে হয়</h6>
                </div>
              </article>
              {/* Post */}
              <article className="news-item box">
                <div className="news-item__image-wrap overlay overlay--45">
                  <div className="news-item__date">Dec<span>2019</span></div>
                  <a className="news-item__link" rel="noreferrer" target="_blank" href="https://medium.com/@nayeemdev/how-to-create-multi-authentication-with-multiple-table-in-laravel-dbc43e229f9f" />
                  <img className="cover lazyload" src="#" alt="How to Create Multi Authentication with Multiple Table in Laravel" />
                </div>
                <div className="news-item__caption">
                  <h6 className="title">How to Create Multi Authentication with Multiple Table in Laravel</h6>
                </div>
              </article>
              {/* Post */}
              <article className="news-item box">
                <div className="news-item__image-wrap overlay overlay--45">
                  <div className="news-item__date">Dec<span>2019</span></div>
                  <a className="news-item__link" rel="noreferrer" target="_blank" href="https://medium.com/@nayeemdev/how-to-create-multi-authentication-with-multiple-table-in-laravel-dbc43e229f9f" />
                  <img className="cover lazyload" src="#" alt="How to Create Multi Authentication with Multiple Table in Laravel" />
                </div>
                <div className="news-item__caption">
                  <h6 className="title">How to Create Multi Authentication with Multiple Table in Laravel</h6>
                </div>
              </article>
              {/* Post */}
              <article className="news-item box">
                <div className="news-item__image-wrap overlay overlay--45">
                  <div className="news-item__date">Dec<span>2019</span></div>
                  <a className="news-item__link" rel="noreferrer" target="_blank" href="https://medium.com/@nayeemdev/how-to-create-multi-authentication-with-multiple-table-in-laravel-dbc43e229f9f" />
                  <img className="cover lazyload" src="#" alt="How to Create Multi Authentication with Multiple Table in Laravel" />
                </div>
                <div className="news-item__caption">
                  <h6 className="title">How to Create Multi Authentication with Multiple Table in Laravel</h6>
                </div>
              </article>
            </div>
          </div>
          
          
        </>

    );
}