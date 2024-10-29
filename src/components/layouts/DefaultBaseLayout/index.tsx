import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '../../../utils/seo-utils';

// Définition du composant ChatBubble directement dans le fichier
function ChatBubble() {
    React.useEffect(() => {
        const chatIcon = document.getElementById('avatar-chat-icon');
        const chatWindow = document.getElementById('avatar-chat-window');
        let isOpen = false;

        function toggleChat() {
            isOpen = !isOpen;
            if (chatWindow) {
                chatWindow.style.display = isOpen ? 'block' : 'none';
                if (isOpen) {
                    chatWindow.style.opacity = '0';
                    chatWindow.style.transform = 'translateY(20px)';
                    chatWindow.style.transition = 'opacity 0.3s, transform 0.3s';
                    setTimeout(() => {
                        chatWindow.style.opacity = '1';
                        chatWindow.style.transform = 'translateY(0)';
                    }, 50);
                }
            }
        }

        chatIcon?.addEventListener('click', toggleChat);

        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && 
                chatWindow && 
                !chatWindow.contains(event.target as Node) && 
                chatIcon && 
                !chatIcon.contains(event.target as Node)) {
                toggleChat();
            }
        };

        document.addEventListener('click', handleClickOutside);

        const handleResize = () => {
            if (window.innerWidth <= 480 && chatWindow) {
                chatWindow.style.height = window.innerHeight + 'px';
            } else if (chatWindow) {
                chatWindow.style.height = '600px';
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            chatIcon?.removeEventListener('click', toggleChat);
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div id="avatar-chat-bubble">
                <div id="avatar-chat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                </div>
            </div>

            <div id="avatar-chat-window">
                <iframe 
                    src="https://astro-app-4rgdkhl6vq-uc.a.run.app/?hideCanvas=true" 
                    style={{width:'100%', height:'100%', border:'none'}}
                    title="aV_atar Chat"
                />
            </div>
        </>
    );
}

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const { enableAnnotations = true } = site;
    const pageMeta = page?.__metadata || {};
    let title = seoGenerateTitle(page, site);
    let metaTags = seoGenerateMetaTags(page, site);
    let metaDescription = seoGenerateMetaDescription(page, site);
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} {...(enableAnnotations && { 'data-sb-object-id': pageMeta.id })}>
            <div className="sb-base sb-default-base-layout">
                <Head>
                    <title>{title}</title>
                    {metaDescription && <meta name="description" content={metaDescription} />}
                    {metaTags.map((metaTag) => {
                        if (metaTag.format === 'property') {
                            return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                        }
                        return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                    })}
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {site.favicon && <link rel="icon" href={site.favicon} />}
                </Head>
                {site.header && <Header {...site.header} enableAnnotations={enableAnnotations} />}
                {props.children}
                {site.footer && <Footer {...site.footer} enableAnnotations={enableAnnotations} />}
                <ChatBubble />
            </div>
        </div> 
    )
}
