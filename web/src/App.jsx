import React from 'react';
import './App.css';
import Header from './conponent/Header';
import Footer from './conponent/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <div className="content">
                    <section id="about-me">
                        <h2>About Me</h2>
                        <p>안녕하세요👋 안요한입니다.</p>
                        <p>저는 초등학교 5학년 때 Python을 시작으로 C, C++ 등 알고리즘 언어를 공부하였습니다.</p>
                        <p>현재는 서울로봇고등학교 소프트웨어과에 진학하면서 Java, JS, Ts 등 다양한 언어를 경험하고 배우고 있습니다.</p>
                        <p>지금은 Python과 R을 중점으로 공부하고 있으면 머신러닝 개발자를 꿈꾸고 있습니다.</p>
                    </section>
                    <section id="skills">
                        <h2>Skills</h2>
                        <ul>
                            <li>Machine Learning (Python, R)</li>
                            <li>Front-End (HTML, CSS, JS)</li>
                            <li>Back-End (Flask, Nest JS)</li>
                            <li>App (Flutter)</li>
                            <li>Cloud Computing (AWS, Firebase)</li>
                        </ul>
                    </section>
                    <section id="career">
                        <h2>Career</h2>
                        <ul>
                            <li>Crerobot 부원 (2023.4~2024.3.20)</li>
                            <li>Team 역천(逆天), 리더 (2022.07~)</li>
                            <li>Team 린, 부원 (2023.12~)</li>
                            <li>SPAM 부원 (2024.3.21~)</li>
                        </ul>
                    </section>
                    <section id="contest">
                        <h2>Contest</h2>
                        <ul>
                            <li>• 2023년도 제17회 서울시 직업계고 창의아이디어경진대회(본선 진출)</li>
                            <li>• 2023 고졸성공 취업·창업 페스타 동아리 경진대회(은상)</li>
                            <li>• 2023 제주 위성데이터 활용 경진대회(본선 진출)</li>
                            <li>• 2024 고등학생 AI경진대회 제1회 제주(4위)</li>
                            <li>• 2024 고객 대출등급 분류 해커톤(421위/1586)</li>
                            <li>• 2024 이커머스 고객 세분화 분석 아이디어 경진대회</li>
                            <li>• 2024 반도체 소자 이상 탐지 AI 경진대회</li>
                            <li>• 2024 도배 하자 질의 응답 처리 : 한솔데코 시즌2 AI 경진대회</li>
                            <li>• 코드 유사성 판단 시즌2 AI 경진대회</li>
                            <li>• 모델 튜닝 챌린지 : RF 하이퍼파라미터 최적화 경진대회</li>
                            <li>• 제2회 IT 코딩 발명 아이디어 경진대회</li>
                            <li>• 2024년 영주시 데이터 분석・활용 공모전</li>
                            <li>• 25회 APPJAM 미래산업 분야 장려상</li>
                            <li>• 26회 APPJAM 미래산업 분야 장려상</li>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
