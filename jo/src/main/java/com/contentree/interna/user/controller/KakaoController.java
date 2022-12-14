package com.contentree.interna.user.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/kakao")
public class KakaoController {
	// 인가코드 받기 위해 카카오 서버와 connect
	@Value("${spring.security.oauth2.client.registration.kakao.client-id}")
	private String clientId;
	@Value("${spring.security.oauth2.client.registration.kakao.client-secret}")
	private String clientSecret;
	@Value("${spring.security.oauth2.client.registration.kakao.redirect-uri}")
	private String redirectUri;

	@Tag(name = "회원 관리")
	@GetMapping(value = "/oauth")
	public String kakaoConnect() {
		log.info("KakaoController > kakaoConnect - 인가코드를 받기 위해 카카오 서버와 연결");
		StringBuffer url = new StringBuffer();
		url.append("https://kauth.kakao.com/oauth/authorize?");
		url.append("client_id=" + clientId);
		url.append("&redirect_uri=" + redirectUri);
		url.append("&response_type=code");

		return "redirect:" + url.toString();
	}
}