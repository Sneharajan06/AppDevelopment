package project.config;
//

//import org.hibernate.annotations.Comment;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//@Component
//public class JwtAuth extends OncePerRequestFilter {

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

//	@Override

//	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
//			throws ServletException, java.io.IOException {
//		final String authHeader = req.getHeader("Authorization");
//		final String name;
//		final String jwtToken;
//
//		if (authHeader == null || !authHeader.startsWith("Bearer")) {
//			chain.doFilter(req, res);
//			return;
//		}
//
//		jwtToken = authHeader.substring(7);
//		name = "hie";
//		if (name != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//			UserDetails user = UserDetailsService.loadUserByUsername(name);
//			final boolean isValid;
//			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user, null);
//		}
//
//	}
//}

//package com.techbasket.techbasket.configs;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import project.service.UserService;
import project.util.CookieExtractor;
import project.util.JwtUtil;

@Component
@RequiredArgsConstructor
public class JWTfilter extends OncePerRequestFilter {

	@Autowired
	UserService userService;

	private final JwtUtil jwtUtil = new JwtUtil();
	private final CookieExtractor cookieExtractor = new CookieExtractor();

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// cookie holder
		String desiredCookie;
		String username;
		String password;

		try {
			// mining cookie
			desiredCookie = cookieExtractor.extractCookie(request.getHeader("Cookie"), "user-auth-key");

			// set credentials
			String credentials[] = jwtUtil.extract(desiredCookie).getSubject().split(";");
			username = credentials[0];
			password = credentials[1];
		} catch (Exception err) {
			// onerror
			desiredCookie = null;
			username = null;
			password = null;
		}

		if (desiredCookie != null && userService.login(username, password)) {
			// do more jwt based auth before setting Auth
			SecurityContextHolder.getContext().setAuthentication(new Authenticator(null));
		}

		filterChain.doFilter(request, response);
	}
}
