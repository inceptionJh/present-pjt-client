import React, { Component } from 'react';
import './Search.css';

// 인스턴스 객체 선언
var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

// 연속결과 or 단일결과
recognition.continous = false;

// 중간결과 반환
recognition.interimResults = true;

// 언어 설정
recognition.lang = 'ko';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listening: false,
      finalScript: ''
    };
    this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
    this.openSearch = this.openSearch.bind(this);
  }

  // 버튼 클릭 이벤트 => listening 변경 & handleListen 실행
  toggleListen() {
    this.setState(
      prevState => ({
        listening: !prevState.listening
      }),
      this.handleListen
    );
  }

  // state의 true & false에 따라 이벤트 발생
  handleListen() {
    var micBtn = document.getElementById('mic-button');
    if (this.state.listening) {
      // 음성 발생 중지 시 이벤트
      micBtn.className = 'Rec';
      recognition.start();
      recognition.onend = () => {
        this.openSearch(
          `https://www.google.com/search?q=${this.state.finalScript}`
        );
      };
    } else {
      // 버튼 클릭(Stop) 시 이벤트
      micBtn.className = 'notRec';
      recognition.stop();
      recognition.onend = () => {
        this.openSearch(
          `https://www.google.com/search?q=${this.state.finalScript}`
        );
      };
    }

    // 음성 인식 결과 반환 Method
    let finalTranscript = '';
    recognition.onresult = event => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          document.querySelector('.interim').innerHTML = transcript;
          finalTranscript += transcript + ' ';
        } else {
        }
        this.setState({
          finalScript: finalTranscript
        });
      }
    };

    // Error event
    recognition.onerror = event => {
      console.log('Error occurred in recognition: ' + event.error);
      this.toggleListen();
    };
  }

  // speech to text => url + result => 현재 페이지에서 실행
  openSearch(url) {
    window.location.href = url;
  }

  render() {
    return (
      <div className="search">
        <div className="interim">Voice Search</div>
        <div className="microphone">
          <button
            id="mic-button"
            className="notRec"
            onClick={this.toggleListen}
          />
        </div>
      </div>
    );
  }
}

export default App;
