import React from 'react'
import '../../styles/Footer.css'
const Footer = () => {
    return (
        <div className='top-foot'>
            <div className='main-foot'>
                <div className='first-foot'>
                    <h1>ABOUT</h1>
                    <p>Stay updated with the latest news from Unspoken Smiles <br />
                        Updated with the latest news from Unspoken Smiles <br />in life</p>
                    <h2>SOCIAL</h2>
                    <div className='social-icons-display'>
                        <h1 className='icon-display'>F</h1>
                        <h1 className='icon-display'>Y</h1>
                        <h1 className='icon-display'>T</h1>
                        <h1 className='icon-display'>P</h1>
                        <h1 className='icon-display'>L</h1>
                        <h1 className='icon-display'>W</h1>
                    </div>
                </div>
                <div  className='second-foot'>
                    <div className='child-second-foot'>
                        <h2>COMPANY</h2>
                        <ul>
                            <li>
                                About
                            </li>
                            <li>
                                Service
                            </li>
                            <li>
                                Workers
                            </li>
                            <li>
                                Queries
                            </li>
                            <li>
                                Contact
                            </li>
                            <li>
                                Adventures
                            </li>
                        </ul>
                    </div>
                    <div className='child-second-foot' >
                        <ul>
                            <li>
                                Control
                            </li>
                            <li>
                                Advance
                            </li>
                            <li>
                                Careers
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                FAQ's
                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>

                <div  className='third-foot'>
                    <h2>Recent Posts</h2>
                    <div  className='second-foot-underfoot'>
                        <div className='image-cotrol'>
                            <img src='m-4.jpg' />
                            <div  className='childs-foot'>
                                <h2>
                                    The quick brown fox <br />jumps over the lazy <br /> dog on the way <br /> to move back in <br /> life
                                </h2>
                                <p>May. 20, 2024</p>
                            </div>
                        </div>
                        <div  className='image-cotrol' >
                            <img src='m-5.jpg' />
                            <div className='childs-foot'>
                                <h2>
                                    The quick brown fox <br />jumps over the lazy <br /> dog on the way <br /> to move back in <br /> life
                                </h2>
                                <p>May. 20, 2024</p>
                            </div>
                        </div>
                        <div  className='image-cotrol'>
                            <img src='m-6.jpg' />
                            <div className='childs-foot'>
                                <h2>
                                    The quick brown fox <br />jumps over the lazy <br /> dog on the way <br /> to move back in <br /> life
                                </h2>
                                <p>May. 20, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='footer-pop'>All Rights Reserved by Shahzaib Ibrar. Copyright 2024 . Designed By Shahzaib Ibrar </p>
        </div>
    )
}

export default Footer