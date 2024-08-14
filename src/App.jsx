import React from 'react';
import './App.css';



function App() {
  const notifications = [
    {
      id: 1,
      avatar: "/avatar-mark-webber.webp",
      name: 'Mark Webber',
      action: 'reacted to your recent post',
      content: 'My first tournament today!',
      time: '1m ago',
      type: 'follow',
    },
    {
      id: 2,
      avatar: '/avatar-angela-gray.webp',
      name: 'Angela Gray',
      action: 'followed you',
      time: '5m ago',
      type: 'follow',
    },
    {
      id: 3,
      avatar: '/avatar-jacob-thompson.webp',
      name: 'Jacob Thompson',
      action: 'has joined your group',
      content: 'Chess Club',
      time: '1 day ago',
      type: 'follow',
    },
    {
      id: 4,
      avatar: '/avatar-rizky-hasanuddin.webp',
      name: 'Rizky Hasanuddin',
      action: 'sent you a private message',
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: '5 days ago',
      type: 'messag',
    },
    {
      id: 5,
      avatar: '/avatar-kimberly-smith.webp',
      name: 'Kimberly Smith',
      action: 'commented on your picture',
      picture: '/images/image-chess.webp',
      time: '1 week ago',
      type: 'comment',
    },
    {
      id: 6,
      avatar: '/avatar-nathan-peterson.webp',
      name: 'Nathan Peterson',
      action: 'reacted to your recent post',
      content: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      type: 'reaction',
    },
    {
      id: 7,
      avatar: '/avatar-anna-kim.webp',
      name: 'Anna Kim',
      action: 'left the group',
      content: 'Chess Club',
      time: '2 weeks ago',
      type: 'left-group',
    },
  ];

  return (
    <div className="App">
      <div className="notifications-container">
        <div className="header">
          <h2>Notifications <span className="badge">3</span></h2>
          <button className="mark-all-read">Mark all as read</button>
        </div>
        <div className="notifications-list">
          {notifications.map(notification => (
            <div className={`notification ${notification.type}`} key={notification.id}>
              <img src={notification.avatar} alt={`${notification.name}`} className="avatar" />
              <div className="content">
                <p>
                  <strong>{notification.name}</strong> {notification.action}{' '}
                  {notification.content && (
                    <span className="highlight">{notification.content}</span>
                  )}
                </p>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default App;



