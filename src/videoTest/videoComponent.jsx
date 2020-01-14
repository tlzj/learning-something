import React, { Component } from 'react';
import H5Player from 'html5-player/libs/history';
const historyList = {
  "beginDate": "2018-12-18 09:53:02",
  "duration": 3600,
  "fragments": [
    {
      "begin": 0,
      "end": 1800,
      "file": "https://jxsr-oss1.antelopecloud.cn/records/m3u8_info2/1545097982_1545099782.m3u8?access_token=538452871_3356491776_1576637587_0311db8481de5a8f6ab441beba8e5903&head=1"
    },
    {
      "begin": 1800,
      "end": 3579,
      "file": "https: //jxsr-oss1.antelopecloud.cn/records/m3u8_info2/1545099782_1545101561.m3u8?access_token=538452871_3356491776_1576637587_0311db8481de5a8f6ab441beba8e5903"
    }
  ]
}


class App extends Component {
  state = {
    key: Math.random()
  }
  setSeeking = () => {
    this.player.setSeeking(2000)
  }
  render() {
    return (
      <div style={{ height: '400px' }}>
        <H5Player
          key={this.state.key}
          historyList={historyList}
          defaultCurrentTime={2400}
          isLiving={false}
          videoCallback={player => {
            this.player = player
          }}
        />
        <button onClick={this.setSeeking}>跳转</button>
      </div>
    )
  }
}

export default App;