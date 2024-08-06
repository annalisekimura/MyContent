import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/projects.css';
import { useState } from "react";

import myTreeLogin from '../Pictures/myTree/login.png';
import myTreeQuiz from '../Pictures/myTree/quiz.png';
import myTreeWelcome from '../Pictures/myTree/welcome.png';
import myTreeCreateAccount from '../Pictures/myTree/createAccount.png';

import myTreeLeaderboard from '../Pictures/myTree/leaderboard.png';
import myTreeGroup from '../Pictures/myTree/group.png';
import myTreeActivities from '../Pictures/myTree/activities.png';
import myTreeAwards from '../Pictures/myTree/awards.png';

import myTreeNav from '../Pictures/myTree/nav.png';
import myTreeStats from '../Pictures/myTree/stats.png';
import myTreeNotifications from '../Pictures/myTree/notifications.png';
import myTreeManage from '../Pictures/myTree/manage.png';

import beProductiveCongrats from '../Pictures/beProductive/congrats.png';
import beProductiveDelete from '../Pictures/beProductive/delete.png';
import beProductiveFinish from '../Pictures/beProductive/finish.png';
import beProductiveLogin from '../Pictures/beProductive/login.png';
import beProductiveMonth from '../Pictures/beProductive/month.png';
import beProductiveNews from '../Pictures/beProductive/news.png';
import beProductiveNotes from '../Pictures/beProductive/notes.png';
import beProductiveWeek from '../Pictures/beProductive/week.png';

import spotPadBackground from '../Pictures/SpotPad/background.png';
import spotPadColors from '../Pictures/SpotPad/colors.png';
import spotPadCurrent from '../Pictures/SpotPad/current.png';
import spotPadDraw from '../Pictures/SpotPad/draw.png';
import spotPadGallery from '../Pictures/SpotPad/gallery.png';
import spotPadGif from '../Pictures/SpotPad/gif.png';
import spotPadHome from '../Pictures/SpotPad/home.png';
import spotPadRightClick from '../Pictures/SpotPad/rightClick.png';
import spotPadSave from '../Pictures/SpotPad/save.png';
import spotPadSaved from '../Pictures/SpotPad/saved.png';
import spotPadSavedEntries from '../Pictures/SpotPad/savedEntries.png';
import spotPadScrapbook from '../Pictures/SpotPad/scrapbook.png';
import spotPadTerms from '../Pictures/SpotPad/terms.png';
import spotPadTracks from '../Pictures/SpotPad/tracks.png';
import spotPadWelcome from '../Pictures/SpotPad/welcome.png';

import buySellAddBuyer from '../Pictures/buyAndSell/addBuyer.png';
import buySellAddSeller from '../Pictures/buyAndSell/addSeller.png';
import buySellBuyListing from '../Pictures/buyAndSell/buyListing.png';
import buySellEditListing from '../Pictures/buyAndSell/editListing.png';
import buySellListingForm from '../Pictures/buyAndSell/listingForm.png';
import buySellListings from '../Pictures/buyAndSell/listings.png';
import buySellOrders from '../Pictures/buyAndSell/orders.png';
import buySellSellerPage from '../Pictures/buyAndSell/sellerPage.png';
import buySellSortListings from '../Pictures/buyAndSell/sortListings.png';
import buySellSortOrders from '../Pictures/buyAndSell/sortOrders.png';
import buySellWelcome from '../Pictures/buyAndSell/welcome.png';


const Projects = () => {
    const myTree = [
        { src: myTreeCreateAccount, className: 'myTree-create', title: 'Create Account' },
        { src: myTreeLogin, className: 'myTree-login', title: 'Login' },
        { src: myTreeQuiz, className: 'myTree-quiz', title: 'Quiz' },
        { src: myTreeWelcome, className: 'myTree-welcome', title: 'Welcome'},
        { src: myTreeActivities, className: 'myTree-activities', title: 'Activities'},
        { src: myTreeAwards, className: 'myTree-awards', title: 'Awards'},
        { src: myTreeLeaderboard, className: 'myTree-leaderboard', title: 'Leaderboard'},
        { src: myTreeGroup, className: 'myTree-group', title: 'Group'},
        { src: myTreeNav, className: 'myTree-nav', title: 'Nav'},
        { src: myTreeStats, className: 'myTree-stats', title: 'Climate Stats'},
        { src: myTreeNotifications, className: 'myTree-notifications', title: 'Notifications'},
        { src: myTreeManage, className: 'myTree-manage', title: 'Manage Account'},
    ]
    
    const beProductive = [
        { src: beProductiveLogin, className: 'beProductive-login', title: 'Login Page' },
        { src: beProductiveNews, className: 'beProductive-news', title: 'News' },
        { src: beProductiveMonth, className: 'beProductive-month', title: 'Month' },
        { src: beProductiveWeek, className: 'beProductive-week', title: 'Week' },
        { src: beProductiveNotes, className: 'beProductive-notes', title: 'Notes' },
        { src: beProductiveDelete, className: 'beProductive-delete', title: 'Edit or Delete' },
        { src: beProductiveFinish, className: 'beProductive-finish', title: 'Finish Task' },
        { src: beProductiveCongrats, className: 'beProductive-congrats', title: 'Congratulations' }
    ]
    
    const spotPad = [
        { src: spotPadWelcome, className: 'spotPad-welcome', title: 'Welcome' },
        { src: spotPadTerms, className: 'spotPad-terms', title: 'Spotify Terms' },
        { src: spotPadHome, className: 'spotPad-home', title: 'Home Page' },
        { src: spotPadScrapbook, className: 'spotPad-scrapbook', title: 'Scrapbook Area' },
        { src: spotPadTracks, className: 'spotPad-tracks', title: 'Tracks in Playlists' },
        { src: spotPadColors, className: 'spotPad-colors', title: 'Color Picker' },
        { src: spotPadDraw, className: 'spotPad-draw', title: 'Draw' },
        { src: spotPadRightClick, className: 'spotPad-rightClick', title: 'On Right Click' },
        { src: spotPadGif, className: 'spotPad-gif', title: 'Search Gifs'},
        { src: spotPadBackground, className: 'spotPad-background', title: 'Background Color' },
        { src: spotPadCurrent, className: 'spotPad-current', title: 'Current Drawing' },
        { src: spotPadSave, className: 'spotPad-save', title: 'Save' },
        { src: spotPadGallery, className: 'spotPad-gallery', title: 'Gallery' },
        { src: spotPadSavedEntries, className: 'spotPad-entries', title: 'Saved States'},
        { src: spotPadSaved, className: 'spotPad-saved', title: 'View Saved Drawing' }
    ]
    
    const buySell = [
        { src: buySellWelcome, className: 'buySell-welcome', title: 'Welcome'},
        { src: buySellAddSeller, className: 'buySell-addSeller', title: 'Add Seller' },
        { src: buySellSellerPage, className: 'buySell-sellerPage', title: 'Seller Page' },
        { src: buySellSortListings, className: 'buySell-sortListings', title: 'Sort Listings'},
        { src: buySellEditListing, className: 'buySell-editListing', title: 'Edit Listing'},
        { src: buySellListingForm, className: 'buySell-listingForm', title: 'Listing Form' },
        { src: buySellListings, className: 'buySell-listings', title: 'Listings' },
    
        { src: buySellAddBuyer, className: 'buySell-addBuyer', title: 'Add Buyer' },
        { src: buySellBuyListing, className: 'buySell-buyListing', title: 'Buy Listing' },
        { src: buySellOrders, className: 'buySell-orders', title: 'Orders' },
        { src: buySellSortOrders, className: 'buySell-sortOrders', title: 'Sort Orders'}
    ]
    
    
    //arrows for myTree
    const [showArrowTree, setShowArrowTree] = useState(true);
    const [scrollTreeEnd, setScrollTreeEnd] = useState(false);
    const [scrollTreeBegin, setScrollTreeBegin] = useState(false);
    const [showArrowTreeBegin, setShowArrowTreeBegin] = useState(false);

    //arrows for beProductive
    const [showArrowBP, setShowArrowBP] = useState(true);
    const [scrollBPEnd, setScrollBPEnd] = useState(false);
    const [scrollBPBegin, setScrollBPBegin] = useState(false);
    const [showArrowBPBegin, setShowArrowBPBegin] = useState(false);

    //arrows for spotPad
    const [showArrowSP, setShowArrowSP] = useState(true);
    const [scrollSPEnd, setScrollSPEnd] = useState(false);
    const [scrollSPBegin, setScrollSPBegin] = useState(false);
    const [showArrowSPBegin, setShowArrowSPBegin] = useState(false);

    //arrows for buySell
    const [showArrowBS, setShowArrowBS] = useState(true);
    const [scrollBSEnd, setScrollBSEnd] = useState(false);
    const [scrollBSBegin, setScrollBSBegin] = useState(false);
    const [showArrowBSBegin, setShowArrowBSBegin] = useState(false);

    
    // myTree scrolling
    const handleScrollTreeRight = () => {
        const row = document.querySelector('.browse-row-myTree');

        row.scrollBy({ left: 160, behavior: 'smooth' }); // Scroll right by 200px
    };

    const handleScrollTreeLeft = () => {
        const row = document.querySelector('.browse-row-myTree');
        row.scrollBy({ left: -160, behavior: 'smooth' }); // Scroll left by 200px
    };

    const handleScrollTreeEnd = () => {
        const row = document.querySelector('.browse-row-myTree');
        const scrollLeft = row.scrollLeft;
        const scrollWidth = row.scrollWidth;
        const clientWidth = row.clientWidth;
        
        // Check if scrolled to end or start
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
            setScrollTreeEnd(true);
        } else {
            setScrollTreeEnd(false);
        }
        setShowArrowTree(!scrollTreeEnd);
    };

    const handleScrollTreeBegin = () => {
        const row = document.querySelector('.browse-row-myTree');
        const scrollLeft = row.scrollLeft;
        if(scrollLeft <= 1) {
            setScrollTreeBegin(true);
        } else {
            setScrollTreeBegin(false);
        }
        setShowArrowTreeBegin(!scrollTreeBegin);
    };

    // handle when tree scrolling happens
    useEffect(() => {
        const row = document.querySelector('.browse-row-myTree');
        row.addEventListener('scroll', handleScrollTreeEnd);
        return () => {
            row.removeEventListener('scroll', handleScrollTreeEnd);
        };
    }, [scrollTreeEnd]);


    useEffect(() => {
        const row = document.querySelector('.browse-row-myTree');
        row.addEventListener('scroll', handleScrollTreeBegin);
        return () => {
            row.removeEventListener('scroll', handleScrollTreeBegin);
        };
    }, [scrollTreeBegin]);

    // beProductive scrolling
    const handleScrollBPRight = () => {
        const row = document.querySelector('.browse-row-beProductive');

        row.scrollBy({ left: 160, behavior: 'smooth' }); // Scroll right by 200px
    };

    const handleScrollBPLeft = () => {
        const row = document.querySelector('.browse-row-beProductive');
        row.scrollBy({ left: -160, behavior: 'smooth' }); // Scroll left by 200px
    };

    const handleScrollBPEnd = () => {
        const row = document.querySelector('.browse-row-beProductive');
        const scrollLeft = row.scrollLeft;
        const scrollWidth = row.scrollWidth;
        const clientWidth = row.clientWidth;
        
        // Check if scrolled to end or start
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
            setScrollBPEnd(true);
        } else {
            setScrollBPEnd(false);
        }
        setShowArrowBP(!scrollBPEnd);
    };

    const handleScrollBPBegin = () => {
        const row = document.querySelector('.browse-row-beProductive');
        const scrollLeft = row.scrollLeft;
        if(scrollLeft <= 1) {
            setScrollBPBegin(true);
        } else {
            setScrollBPBegin(false);
        }
        setShowArrowBPBegin(!scrollBPBegin);
    };

    // handle when bp scrolling happens
    useEffect(() => {
        const row = document.querySelector('.browse-row-beProductive');
        row.addEventListener('scroll', handleScrollBPEnd);
        return () => {
            row.removeEventListener('scroll', handleScrollBPEnd);
        };
    }, [scrollBPEnd]);


    useEffect(() => {
        const row = document.querySelector('.browse-row-beProductive');
        row.addEventListener('scroll', handleScrollBPBegin);
        return () => {
            row.removeEventListener('scroll', handleScrollBPBegin);
        };
    }, [scrollBPBegin]);

    // SpotPad scrolling
    const handleScrollSPRight = () => {
        const row = document.querySelector('.browse-row-spotPad');

        row.scrollBy({ left: 160, behavior: 'smooth' }); // Scroll right by 200px
    };

    const handleScrollSPLeft = () => {
        const row = document.querySelector('.browse-row-spotPad');
        row.scrollBy({ left: -160, behavior: 'smooth' }); // Scroll left by 200px
    };

    const handleScrollSPEnd = () => {
        const row = document.querySelector('.browse-row-spotPad');
        const scrollLeft = row.scrollLeft;
        const scrollWidth = row.scrollWidth;
        const clientWidth = row.clientWidth;
        
        // Check if scrolled to end or start
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
            setScrollSPEnd(true);
        } else {
            setScrollSPEnd(false);
        }
        setShowArrowSP(!scrollSPEnd);
    };

    const handleScrollSPBegin = () => {
        const row = document.querySelector('.browse-row-spotPad');
        const scrollLeft = row.scrollLeft;
        console.log(scrollLeft);
        if(scrollLeft <= 1) {
            setScrollSPBegin(true);
            
        } else {
            setScrollSPBegin(false);
        }
        
        setShowArrowSPBegin(!scrollSPBegin);
    };

    // handle when spotPad scrolling happens
    useEffect(() => {
        const row = document.querySelector('.browse-row-spotPad');
        row.addEventListener('scroll', handleScrollSPEnd);
        return () => {
            row.removeEventListener('scroll', handleScrollSPEnd);
        };
    }, [scrollSPEnd]);


    useEffect(() => {
        const row = document.querySelector('.browse-row-spotPad');
        row.addEventListener('scroll', handleScrollSPBegin);
        return () => {
            row.removeEventListener('scroll', handleScrollSPBegin);
        };
    }, [scrollSPBegin]);

    // buySell scrolling
    const handleScrollBSRight = () => {
        const row = document.querySelector('.browse-row-buySell');

        row.scrollBy({ left: 160, behavior: 'smooth' }); // Scroll right by 200px
    };

    const handleScrollBSLeft = () => {
        const row = document.querySelector('.browse-row-buySell');
        row.scrollBy({ left: -160, behavior: 'smooth' }); // Scroll left by 200px
    };

    const handleScrollBSEnd = () => {
        const row = document.querySelector('.browse-row-buySell');
        const scrollLeft = row.scrollLeft;
        const scrollWidth = row.scrollWidth;
        const clientWidth = row.clientWidth;
        
        // Check if scrolled to end or start
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
            setScrollBSEnd(true);
        } else {
            setScrollBSEnd(false);
        }
        setShowArrowBS(!scrollBSEnd);
    };

    const handleScrollBSBegin = () => {
        const row = document.querySelector('.browse-row-buySell');
        const scrollLeft = row.scrollLeft;
        if(scrollLeft <= 1) {
            setScrollBSBegin(true);
        } else {
            setScrollBSBegin(false);
        }
        setShowArrowBSBegin(!scrollBSBegin);
    };

    // handle when tree scrolling happens
    useEffect(() => {
        const row = document.querySelector('.browse-row-buySell');
        row.addEventListener('scroll', handleScrollBSEnd);
        return () => {
            row.removeEventListener('scroll', handleScrollBSEnd);
        };
    }, [scrollBSEnd]);


    useEffect(() => {
        const row = document.querySelector('.browse-row-buySell');
        row.addEventListener('scroll', handleScrollBSBegin);
        return () => {
            row.removeEventListener('scroll', handleScrollBSBegin);
        };
    }, [scrollBSBegin]);


    return (
        <div className="entire">
            <div className="browse-myTree">
                <h2>
                <a className='tree-title' href='https://github.com/bdgillis/CS307-myTree.git'>MyTree</a>
                </h2>
                {showArrowTreeBegin && (
                    <div className="scroll-indicator-tree-begin" onClick={handleScrollTreeLeft}>
                        &lt;
                    </div>
                )}

                <div className="browse-row-myTree">
                    {myTree.map((tree, index) => (
                        <div key={index} className="placeholder-box-myTree">
                            <img
                                src={tree.src}
                                alt={`Placeholder ${index + 1}`}
                                className={`placeholder-image-myTree ${tree.className}`}
                            />
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{tree.title}</div>
                            </div>
                            
                        </div>
                        
                    ))}
                </div>
                {showArrowTree && (
                    <div className="scroll-indicator-tree-end" onClick={handleScrollTreeRight}>
                        &gt;
                    </div>
                )}
            </div>

            <div className="browse-beProductive">
                <h2>
                    <a className='productive-title' href='https://github.com/annalisekimura/BeProductive.git'>BeProductive</a>
                </h2>
                {showArrowBPBegin && (
                    <div className="scroll-indicator-bp-begin" onClick={handleScrollBPLeft}>
                        &lt;
                    </div>
                )}

                <div className="browse-row-beProductive">
                    {beProductive.map((productive, index) => (
                        <div key={index} className="placeholder-box-beProductive">
                            <img
                                src={productive.src}
                                alt={`Placeholder ${index + 1}`}
                                className={`placeholder-image-beProductive ${productive.className}`}
                            />
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{productive.title}</div>
                            </div>
                            
                        </div>
                        
                    ))}
                </div>
                {showArrowBP && (
                    <div className="scroll-indicator-bp-end" onClick={handleScrollBPRight}>
                        &gt;
                    </div>
                )}
            </div>

            <div className="browse-spotPad">
                <h2>
                    <a className='pad-title' href='https://github.com/annalisekimura/SpotPad.git'>SpotPad</a>
                </h2>
                {showArrowSPBegin && (
                    <div className="scroll-indicator-spotPad-begin" onClick={handleScrollSPLeft}>
                        &lt;
                    </div>
                )}

                <div className="browse-row-spotPad">
                    {spotPad.map((pad, index) => (
                        <div key={index} className="placeholder-box-spotPad">
                            <img
                                src={pad.src}
                                alt={`Placeholder ${index + 1}`}
                                className={`placeholder-image-spotPad ${pad.className}`}
                            />
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{pad.title}</div>
                            </div>
                            
                        </div>
                        
                    ))}
                </div>
                {showArrowSP && (
                    <div className="scroll-indicator-spotPad-end" onClick={handleScrollSPRight}>
                        &gt;
                    </div>
                )}
            </div>

            <div className="browse-buySell">
                <h2>
                    <a className='buySell-title' href='https://github.com/annalisekimura/BuyAndSell.git'>BuyAndSell</a>
                </h2>
                {showArrowBSBegin && (
                    <div className="scroll-indicator-buySell-begin" onClick={handleScrollBSLeft}>
                        &lt;
                    </div>
                )}

                <div className="browse-row-buySell">
                    {buySell.map((item, index) => (
                        <div key={index} className="placeholder-box-buySell">
                            <img
                                src={item.src}
                                alt={`Placeholder ${index + 1}`}
                                className={`placeholder-image-buySell ${item.className}`}
                            />
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{item.title}</div>
                            </div>
                            
                        </div>
                        
                    ))}
                </div>
                {showArrowBS && (
                    <div className="scroll-indicator-buySell-end" onClick={handleScrollBSRight}>
                        &gt;
                    </div>
                )}
            </div>

        </div>
    )
}


export default Projects;