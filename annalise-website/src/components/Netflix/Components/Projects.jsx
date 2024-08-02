import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/projects.css';

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


    return (
        <div className="entire">
            <div className="browse-myTree">
                <h2>MyTree</h2>

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
            </div>

            <div className="browse-beProductive">
                <h2>BeProductive</h2>

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
            </div>

            <div className="browse-spotPad">
                <h2>SpotPad</h2>

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
            </div>

            <div className="browse-buySell">
                <h2>BuyAndSell</h2>

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
            </div>

        </div>
    )
}


export default Projects;