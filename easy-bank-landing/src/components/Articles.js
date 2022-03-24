import React from 'react'

import currency from '../assets/image-currency.jpg'
import restaurant from '../assets/image-restaurant.jpg'
import plane from '../assets/image-plane.jpg'
import confetti from '../assets/image-confetti.jpg'

export default function Articles () {
    return (
        <div className="articles-section-container">
            <div>
                <h3 className="articles-section-title">Latest Articles</h3>
            </div>

            <div className="articles-container">
                <div className="article">

                    <div className="article-image">
                       <img src={currency} alt=" a pile of American paper money"/>
                    </div>

                    <div className="article-body">
                        <p className="article-author">By Wilson Hutton</p>
                        <h4 className="article-title">Recieve money in any currency with no fees.</h4>
                        <p className="article-blurb">The world is getting smaller and we're becoming more mobile. So why should you be forced to recieve money in only one kind of currency ...</p>
                    </div>
                </div>

                <div className="article">

                    <div className="article-image">
                       <img src={restaurant} alt=" a pile of American paper money"/>
                    </div>

                    <div className="article-body">
                        <p className="article-author">By Wilson Hutton</p>
                        <h4 className="article-title">Treat yourself without worrying about money.</h4>
                        <p className="article-blurb">Our simple budgeting feature allows you to seperate out your spending and allows for realistic limits each month ...</p>
                    </div>
                </div>

                 <div className="article">

                    <div className="article-image">
                       <img src={plane} alt=" a pile of American paper money"/>
                    </div>

                    <div className="article-body">
                        <p className="article-author">By Wilson Hutton</p>
                        <h4 className="article-title">Take your Easybank Card wherever you go!</h4>
                        <p className="article-blurb">we want you to enjoy your travels. That's why we won't charge any fees while your abroad. We'll even show you ...</p>
                    </div>
                </div>

                <div className="article">

                    <div className="article-image">
                       <img src={confetti} alt=" a pile of American paper money"/>
                    </div>

                    <div className="article-body">
                        <p className="article-author">By Claire Robinson</p>
                        <h4 className="article-title">Our invite only Beta Accounts are now live!</h4>
                        <p className="article-blurb">After alot of hard work by our team, we are excited to launch our closed beta. It's easy to request an invite through our site ...</p>
                    </div>
                </div>

            </div>
        </div>
    )
}