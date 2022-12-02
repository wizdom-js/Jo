const setCookie = (name, value, expiredDay) => {
    const expired = new Date();
    //access 2시간 refresh 2주
    expired.setTime(expired.getTime() + expiredDay * 24 * 60 * 60 * 1000);
	//expired.setTime(expired.getTime() + 2000);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + expired.toUTCString() + ';path=/';
};

const getCookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? decodeURIComponent(value[2]) : null;
};

const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;'; 
};

const onDelete = () => {
	deleteCookie("refresh");
	deleteCookie("access");
	location.href = "http://localhost:8080/jo/";
};

const onClick = (e) => {
	const target = e.target;
	const contents = document.querySelector(".modal_contents");
	const birth_text= "<h2>메가박스</h2><p>[생일쿠폰]</p><p>- 팝콘(L) 무료: 오리지날 또는 카라멜 중 택1(맛 변경, 업그레이드 등 불가)</p><p>- 생일 쿠폰은 회원 정보 상 등록 되어 있는 생일 2주전, 회원 계정으로 자동 발급됩니다.</p>	<p>- VIP 회원 생일 쿠폰 '콤보 무료' 는 기존과 동일하게 지급됩니다.</p><p>- 일정 및 내용은 사정에 따라 변동 될 수 있습니다.</p><br><br><h2>휘닉스</h2><p>- 생일 할인: 리프트, 렌탈 반값 혜택(주민등록상 생일 당일, 1회만 가능)</p>	";
	const joins_text= "<h2>메가박스</h2><p>- 달 2장 영화 예매쿠폰 증정</p><p>- 팝콘(L) 무료: 오리지날 또는 카라멜 중 택1(맛 변경, 업그레이드 등 불가)</p><br><br><h2>휘닉스</h2><p>- 분기별 무료 예약</p><p>- 숙소 예약시 조식 2인권 쿠폰 증정</p><br><br><h2>중앙일보, JTBC</h2><p>- 이용권 50% 할인</p>";
	let level_text = "<h2>메가박스</h2><p>- 연 2회 영화 예매 쿠폰 증정</p><p>- 연 2회 팝콘(M) 무료: 오리지날 또는 카라멜 중 택1(맛 변경, 업그레이드 등 불가)</p><br><br><h2>휘닉스</h2><p>- 연 1회 리프트 이용권 30%할인 쿠폰 증정</p>	";
	const gold_level = "<h2>GOLE</h2><br><h2>메가박스</h2><p>- 연 2회 영화 예매 쿠폰 증정</p><p>- 연 2회 팝콘(M) 무료: 오리지날 또는 카라멜 중 택1(맛 변경, 업그레이드 등 불가)</p><br><br><h2>휘닉스</h2><p>- 연 1회 리프트 이용권 30%할인 쿠폰 증정</p>	";
	const silver_level = "<h2>SILVER</h2><br><h2>메가박스</h2><p>- 연 2회 영화 예매 쿠폰 증정</p><p>- 연 2회 팝콘(M) 무료: 오리지날 또는 카라멜 중 택1(맛 변경, 업그레이드 등 불가)</p><br><br><h2>휘닉스</h2><p>- 연 1회 리프트 이용권 30%할인 쿠폰 증정</p>	";
	const bronze_level = "<h2>BRONZE</h2><br><h2>메가박스</h2><p>- 연 2회 영화 예매 쿠폰 증정</p><p>- 연 2회 팝콘(M) 무료: 오리지날 또는 카라멜 중 택1(맛 변경, 업그레이드 등 불가)</p><br><br><h2>휘닉스</h2><p>- 연 1회 리프트 이용권 30%할인 쿠폰 증정</p>	";
	
	if(target.id === "level") {
		if(target.innerText === "G") level_text = gold_level;
		else if(target.innerText === "S") level_text = silver_level;
		else if(target.innerText === "B") level_text = bronze_level;
		contents.innerHTML = level_text;
	}else if(target.id === "joins") {
		contents.innerHTML = joins_text;
	}else if(target.id === "gift_logo") {
		contents.innerHTML = birth_text;
	}
	document.querySelector(".modal_wrap").style.display = "block";
	document.querySelector(".black_bg").style.display = "block";
};

const offClick = () => {
	document.querySelector(".modal_wrap").style.display = "none";
	document.querySelector(".black_bg").style.display = "none";
};