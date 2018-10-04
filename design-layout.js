import React from 'react';

class MessageOverview extends React.Component {
  state = {
    selectedTab: 'CONVERSIONS',
    after24Hours: true, //differences in UI according to whether during 24-hour period or after
  }

  render() {
    return (
      <div>
        { this.renderMetadata() }
        { this.renderMessageStats() }
        <tabs>...</tabs>
        { selectedTab === 'CLICKS' && <LineGraph clicks={}/> }
        { selectedTab === 'CONVERSIONS' && <ConversionsComponent />}
        <Performance stats={} after24Hours={}/>
        <ComposeNewMessage after24Hours={}/>
      </div>
    )
  }
}
