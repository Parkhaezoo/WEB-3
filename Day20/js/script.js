$(function() {
    $('#fullpage').fullpage({
        // 2.옵션 지정
            // 섹션(슬라이드) 배경색
            sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
            // 스크롤 속도
            scrollingSpeed: 500,
            // 연결 링크 (메뉴)
            menu: '#menu',      /* 메뉴박스 선택자로 지정 */
            anchors: ['page1', 'page2', 'page3', 'page4', 'footer'],
            // 스크롤바 여부
            scrollBar: true,
            // 키보드 사용 여부
            keyboardScrolling: true,
            // 네비게이션 여부
            navigation: true,
            // 네비게이션 위치
            navigationPosition: 'right',
            // 페이지 내 슬라이드 화살표 여부
            controlArrows: true,
    })
})